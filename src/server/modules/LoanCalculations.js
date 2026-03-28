import { gs, GlideRecord } from '@servicenow/glide';

/**
 * Loan Calculation Utilities
 * Provides methods for calculating loan payments, interest rates, and risk assessment
 */
export class LoanCalculator {
  
  /**
   * Calculate monthly payment using standard amortization formula
   * @param {number} principal - Loan amount
   * @param {number} annualRate - Annual interest rate (as percentage)
   * @param {number} termMonths - Loan term in months
   * @returns {number} Monthly payment amount
   */
  static calculateMonthlyPayment(principal, annualRate, termMonths) {
    if (annualRate === 0) {
      return principal / termMonths;
    }
    
    const monthlyRate = annualRate / 100 / 12;
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) 
                   / (Math.pow(1 + monthlyRate, termMonths) - 1);
    
    return Math.round(payment * 100) / 100; // Round to 2 decimal places
  }
  
  /**
   * Calculate total amount payable over loan term
   * @param {number} monthlyPayment - Monthly payment amount
   * @param {number} termMonths - Loan term in months
   * @returns {number} Total amount payable
   */
  static calculateTotalPayable(monthlyPayment, termMonths) {
    return Math.round(monthlyPayment * termMonths * 100) / 100;
  }
  
  /**
   * Determine interest rate based on credit score and base rate
   * @param {number} creditScore - Customer's credit score
   * @param {number} baseRate - Product's base interest rate
   * @returns {number} Final interest rate
   */
  static calculateInterestRate(creditScore, baseRate) {
    let rateAdjustment = 0;
    
    if (creditScore >= 750) {
      rateAdjustment = -0.5; // Excellent credit gets 0.5% discount
    } else if (creditScore >= 700) {
      rateAdjustment = 0; // Very good credit gets base rate
    } else if (creditScore >= 650) {
      rateAdjustment = 1; // Good credit gets 1% premium
    } else if (creditScore >= 600) {
      rateAdjustment = 2.5; // Fair credit gets 2.5% premium
    } else {
      rateAdjustment = 4; // Poor credit gets 4% premium
    }
    
    return Math.round((baseRate + rateAdjustment) * 100) / 100;
  }
  
  /**
   * Assess loan risk category based on credit score and debt-to-income ratio
   * @param {number} creditScore - Customer's credit score
   * @param {number} debtToIncomeRatio - Customer's debt-to-income ratio
   * @param {number} loanAmount - Requested loan amount
   * @param {number} annualIncome - Customer's annual income
   * @returns {string} Risk category: 'low_risk', 'medium_risk', or 'high_risk'
   */
  static assessRiskCategory(creditScore, debtToIncomeRatio, loanAmount, annualIncome) {
    const loanToIncomeRatio = (loanAmount / annualIncome) * 100;
    
    // High risk conditions
    if (creditScore < 600 || debtToIncomeRatio > 40 || loanToIncomeRatio > 50) {
      return 'high_risk';
    }
    
    // Low risk conditions
    if (creditScore >= 700 && debtToIncomeRatio <= 25 && loanToIncomeRatio <= 25) {
      return 'low_risk';
    }
    
    // Everything else is medium risk
    return 'medium_risk';
  }
  
  /**
   * Determine loan approval eligibility
   * @param {number} creditScore - Customer's credit score
   * @param {number} annualIncome - Customer's annual income
   * @param {number} requestedAmount - Requested loan amount
   * @param {number} minCreditScore - Minimum credit score for product
   * @param {number} maxAmount - Maximum loan amount for product
   * @returns {object} Approval decision with reason
   */
  static checkEligibility(creditScore, annualIncome, requestedAmount, minCreditScore, maxAmount) {
    const reasons = [];
    
    if (creditScore < minCreditScore) {
      reasons.push(`Credit score ${creditScore} below minimum requirement of ${minCreditScore}`);
    }
    
    if (requestedAmount > maxAmount) {
      reasons.push(`Requested amount $${requestedAmount} exceeds maximum of $${maxAmount}`);
    }
    
    // Income requirement: loan amount should not exceed 5x annual income
    const maxLoanByIncome = annualIncome * 5;
    if (requestedAmount > maxLoanByIncome) {
      reasons.push(`Requested amount exceeds 5x annual income limit of $${maxLoanByIncome}`);
    }
    
    return {
      eligible: reasons.length === 0,
      reasons: reasons
    };
  }
}

/**
 * Credit Score Utilities
 */
export class CreditScoreUtils {
  
  /**
   * Determine credit rating based on score
   * @param {number} score - Credit score
   * @returns {string} Credit rating category
   */
  static getCreditRating(score) {
    if (score >= 750) return 'excellent';
    if (score >= 700) return 'very_good';
    if (score >= 650) return 'good';
    if (score >= 600) return 'fair';
    return 'poor';
  }
  
  /**
   * Get the latest credit score for a customer
   * @param {string} customerSysId - Customer's sys_id
   * @returns {object} Credit score record or null
   */
  static getLatestCreditScore(customerSysId) {
    const gr = new GlideRecord('x_snc_cash_loan_wi_credit_score');
    gr.addQuery('customer', customerSysId);
    gr.orderByDesc('score_date');
    gr.query();
    
    if (gr.next()) {
      return {
        sysId: gr.getUniqueValue(),
        score: parseInt(gr.getValue('credit_score')),
        rating: gr.getValue('credit_rating'),
        debtToIncomeRatio: parseFloat(gr.getValue('debt_to_income_ratio')) || 0,
        scoreDate: gr.getValue('score_date')
      };
    }
    
    return null;
  }
}