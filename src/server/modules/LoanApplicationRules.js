import { LoanCalculator, CreditScoreUtils } from './LoanCalculations.js';
import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide';

/**
 * Process loan application and make automated decisions
 */
export function processLoanApplication() {
  // Only process if we have required fields
  if (!current.customer || !current.loan_product || !current.requested_amount) {
    return;
  }
  
  // Get customer information
  const customerGR = new GlideRecord('x_snc_cash_loan_wi_customer');
  if (!customerGR.get(current.customer)) {
    gs.addErrorMessage('Customer not found');
    return;
  }
  
  // Get loan product information
  const productGR = new GlideRecord('x_snc_cash_loan_wi_loan_product');
  if (!productGR.get(current.loan_product)) {
    gs.addErrorMessage('Loan product not found');
    return;
  }
  
  const requestedAmount = parseFloat(current.requested_amount);
  const annualIncome = parseFloat(customerGR.getValue('annual_income'));
  const baseRate = parseFloat(productGR.getValue('base_interest_rate'));
  const minCreditScore = parseInt(productGR.getValue('min_credit_score'));
  const maxAmount = parseFloat(productGR.getValue('max_amount'));
  const termMonths = parseInt(current.term_months || productGR.getValue('term_months'));
  
  // Get latest credit score
  const creditScoreData = CreditScoreUtils.getLatestCreditScore(current.customer);
  
  if (!creditScoreData) {
    current.application_status = 'under_review';
    current.comments = 'Credit score verification required';
    return;
  }
  
  // Set credit score reference
  current.credit_score = creditScoreData.sysId;
  
  // Check eligibility
  const eligibility = LoanCalculator.checkEligibility(
    creditScoreData.score,
    annualIncome,
    requestedAmount,
    minCreditScore,
    maxAmount
  );
  
  if (!eligibility.eligible) {
    current.application_status = 'rejected';
    current.rejection_reason = eligibility.reasons.join('; ');
    current.decision_date = gs.nowDateTime();
    return;
  }
  
  // Calculate interest rate based on credit score
  const finalRate = LoanCalculator.calculateInterestRate(creditScoreData.score, baseRate);
  current.interest_rate = finalRate;
  current.term_months = termMonths;
  
  // Calculate monthly payment
  const monthlyPayment = LoanCalculator.calculateMonthlyPayment(
    requestedAmount,
    finalRate,
    termMonths
  );
  current.monthly_payment = monthlyPayment;
  
  // Calculate total amount payable
  const totalPayable = LoanCalculator.calculateTotalPayable(monthlyPayment, termMonths);
  current.total_amount_payable = totalPayable;
  
  // Assess risk category
  const riskCategory = LoanCalculator.assessRiskCategory(
    creditScoreData.score,
    creditScoreData.debtToIncomeRatio,
    requestedAmount,
    annualIncome
  );
  current.risk_category = riskCategory;
  
  // Auto-approve low risk loans under certain conditions
  if (riskCategory === 'low_risk' && requestedAmount <= 25000) {
    current.application_status = 'approved';
    current.approved_amount = requestedAmount;
    current.decision_date = gs.nowDateTime();
    
    // Set funding date to next business day
    const fundingDate = new GlideDateTime();
    fundingDate.addDaysUTC(1);
    current.funding_date = fundingDate.getDisplayValue().substring(0, 10);
    
    // Set first payment date to 30 days from funding
    const firstPaymentDate = new GlideDateTime();
    firstPaymentDate.addDaysUTC(31);
    current.first_payment_date = firstPaymentDate.getDisplayValue().substring(0, 10);
  } else {
    // Require manual review for higher risk or larger amounts
    current.application_status = 'under_review';
  }
}