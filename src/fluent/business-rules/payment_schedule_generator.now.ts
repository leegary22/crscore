import '@servicenow/sdk/global';
import { BusinessRule } from '@servicenow/sdk/core';
import { generatePaymentSchedule } from '../../server/modules/PaymentScheduleRules.js';

export const payment_schedule_generator = BusinessRule({
  $id: Now.ID['payment-schedule-generator'],
  name: 'Payment Schedule Generator',
  table: 'x_snc_cash_loan_wi_loan_application',
  when: 'after',
  action: ['insert', 'update'],
  order: 200,
  active: true,
  condition: "current.application_status == 'approved' && (current.application_status.changes() || previous.approved_amount != current.approved_amount)",
  script: generatePaymentSchedule
});