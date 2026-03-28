import { GlideDateTime } from '@servicenow/glide';

/**
 * Update payment status based on dates and amounts
 */
export function updatePaymentStatus() {
  // Auto-update payment status based on dates and amounts
  if (current.due_date && current.payment_status == 'pending') {
    const today = new GlideDateTime();
    const dueDate = new GlideDateTime();
    dueDate.setValue(current.due_date + ' 00:00:00');
    
    // Mark as overdue if past due date and no payment recorded
    if (today.after(dueDate) && !current.actual_payment_date) {
      current.payment_status = 'overdue';
      
      // Calculate late fee (5% of payment amount, max $50)
      const paymentAmount = parseFloat(current.payment_amount);
      const lateFee = Math.min(paymentAmount * 0.05, 50);
      current.late_fee = Math.round(lateFee * 100) / 100;
    }
  }
  
  // Update status when payment is recorded
  if (current.actual_payment_date && current.actual_payment_amount) {
    const expectedAmount = parseFloat(current.payment_amount) + parseFloat(current.late_fee || 0);
    const actualAmount = parseFloat(current.actual_payment_amount);
    
    if (actualAmount >= expectedAmount) {
      current.payment_status = 'paid';
    } else if (actualAmount > 0) {
      current.payment_status = 'partial';
    }
  }
}