import { CreditScoreUtils } from './LoanCalculations.js';

/**
 * Auto-assign credit rating based on credit score
 */
export function assignCreditRating() {
  // Auto-assign credit rating based on credit score
  if (current.credit_score.changes()) {
    const score = parseInt(current.credit_score);
    if (score >= 300 && score <= 850) {
      current.credit_rating = CreditScoreUtils.getCreditRating(score);
    }
  }
}