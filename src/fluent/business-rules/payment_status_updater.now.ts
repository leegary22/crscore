import '@servicenow/sdk/global';
import { BusinessRule } from '@servicenow/sdk/core';
import { updatePaymentStatus } from '../../server/modules/PaymentStatusRules.js';

export const payment_status_updater = BusinessRule({
  $id: Now.ID['payment-status-updater'],
  name: 'Payment Status Updater',
  table: 'x_snc_cash_loan_wi_payment_schedule',
  when: 'before',
  action: ['insert', 'update'],
  order: 100,
  active: true,
  script: updatePaymentStatus
});