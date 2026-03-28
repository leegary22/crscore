import '@servicenow/sdk/global';
import { UiPage } from '@servicenow/sdk/core';
import loanApp from '../../client/index.html';

export const loan_application_ui = UiPage({
  $id: Now.ID['loan-application-ui'],
  endpoint: 'x_snc_cash_loan_wi_loan_app.do',
  html: loanApp,
  direct: true
});