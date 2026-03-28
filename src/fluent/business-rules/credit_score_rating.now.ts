import '@servicenow/sdk/global';
import { BusinessRule } from '@servicenow/sdk/core';
import { assignCreditRating } from '../../server/modules/CreditScoreRules.js';

export const credit_score_rating_assignment = BusinessRule({
  $id: Now.ID['credit-score-rating'],
  name: 'Credit Score Rating Assignment',
  table: 'x_snc_cash_loan_wi_credit_score',
  when: 'before',
  action: ['insert', 'update'],
  order: 100,
  active: true,
  script: assignCreditRating
});