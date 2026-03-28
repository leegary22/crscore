import '@servicenow/sdk/global';
import { BusinessRule } from '@servicenow/sdk/core';
import { processLoanApplication } from '../../server/modules/LoanApplicationRules.js';

export const loan_application_processor = BusinessRule({
  $id: Now.ID['loan-application-processor'],
  name: 'Loan Application Processor',
  table: 'x_snc_cash_loan_wi_loan_application',
  when: 'before',
  action: ['insert', 'update'],
  order: 100,
  active: true,
  script: processLoanApplication
});