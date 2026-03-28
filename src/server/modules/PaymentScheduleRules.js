import { gs, GlideRecord, GlideDateTime } from '@servicenow/glide';

/**
 * Generate payment schedule for approved loans
 */
export function generatePaymentSchedule() {
  // Validate required data
  if (!current.approved_amount || !current.interest_rate || !current.term_months || !current.first_payment_date) {
    gs.info('Payment schedule generation skipped - missing required data');
    return;
  }
  
  // Delete existing payment schedule if regenerating
  const existingSchedule = new GlideRecord('x_snc_cash_loan_wi_payment_schedule');
  existingSchedule.addQuery('loan_application', current.sys_id);
  existingSchedule.query();
  existingSchedule.deleteMultiple();
  
  const approvedAmount = parseFloat(current.approved_amount);
  const interestRate = parseFloat(current.interest_rate);
  const termMonths = parseInt(current.term_months);
  const monthlyPayment = parseFloat(current.monthly_payment);
  
  let remainingBalance = approvedAmount;
  const monthlyInterestRate = interestRate / 100 / 12;
  
  // Start from first payment date
  const paymentDate = new GlideDateTime();
  paymentDate.setValue(current.first_payment_date + ' 00:00:00');
  
  for (let paymentNum = 1; paymentNum <= termMonths; paymentNum++) {
    // Calculate interest and principal for this payment
    const interestAmount = remainingBalance * monthlyInterestRate;
    const principalAmount = monthlyPayment - interestAmount;
    
    // Adjust for final payment rounding
    const finalPrincipal = paymentNum === termMonths ? remainingBalance : principalAmount;
    const finalPayment = interestAmount + finalPrincipal;
    
    // Create payment schedule record
    const scheduleRecord = new GlideRecord('x_snc_cash_loan_wi_payment_schedule');
    scheduleRecord.initialize();
    scheduleRecord.setValue('loan_application', current.sys_id);
    scheduleRecord.setValue('payment_number', paymentNum);
    scheduleRecord.setValue('due_date', paymentDate.getDisplayValue().substring(0, 10));
    scheduleRecord.setValue('payment_amount', Math.round(finalPayment * 100) / 100);
    scheduleRecord.setValue('principal_amount', Math.round(finalPrincipal * 100) / 100);
    scheduleRecord.setValue('interest_amount', Math.round(interestAmount * 100) / 100);
    
    // Update remaining balance
    remainingBalance -= finalPrincipal;
    scheduleRecord.setValue('remaining_balance', Math.round(Math.max(0, remainingBalance) * 100) / 100);
    scheduleRecord.setValue('payment_status', 'pending');
    
    scheduleRecord.insert();
    
    // Move to next month
    paymentDate.addMonthsUTC(1);
  }
  
  gs.info('Payment schedule generated for loan application: ' + current.number);
}