import '@servicenow/sdk/global';
import { Table, ReferenceColumn, DecimalColumn, StringColumn, DateTimeColumn, DateColumn, IntegerColumn, BooleanColumn } from '@servicenow/sdk/core';

export const x_snc_cash_loan_wi_loan_application = Table({
  name: 'x_snc_cash_loan_wi_loan_application',
  label: 'Loan Application',
  schema: {
    customer: ReferenceColumn({
      label: 'Customer',
      referenceTable: 'x_snc_cash_loan_wi_customer',
      mandatory: true
    }),
    loan_product: ReferenceColumn({
      label: 'Loan Product',
      referenceTable: 'x_snc_cash_loan_wi_loan_product',
      mandatory: true
    }),
    credit_score: ReferenceColumn({
      label: 'Credit Score Record',
      referenceTable: 'x_snc_cash_loan_wi_credit_score'
    }),
    requested_amount: DecimalColumn({
      label: 'Requested Amount ($)',
      mandatory: true
    }),
    approved_amount: DecimalColumn({
      label: 'Approved Amount ($)'
    }),
    interest_rate: DecimalColumn({
      label: 'Interest Rate (%)'
    }),
    term_months: IntegerColumn({
      label: 'Term (Months)',
      mandatory: true
    }),
    monthly_payment: DecimalColumn({
      label: 'Monthly Payment ($)'
    }),
    total_amount_payable: DecimalColumn({
      label: 'Total Amount Payable ($)'
    }),
    application_date: DateTimeColumn({
      label: 'Application Date',
      mandatory: true,
      default: 'javascript:gs.nowDateTime()'
    }),
    decision_date: DateTimeColumn({
      label: 'Decision Date'
    }),
    funding_date: DateColumn({
      label: 'Funding Date'
    }),
    first_payment_date: DateColumn({
      label: 'First Payment Date'
    }),
    application_status: StringColumn({
      label: 'Application Status',
      maxLength: 30,
      default: 'submitted',
      mandatory: true,
      choices: {
        submitted: { label: 'Submitted', sequence: 0 },
        under_review: { label: 'Under Review', sequence: 1 },
        approved: { label: 'Approved', sequence: 2 },
        rejected: { label: 'Rejected', sequence: 3 },
        funded: { label: 'Funded', sequence: 4 },
        cancelled: { label: 'Cancelled', sequence: 5 }
      },
      dropdown: 'dropdown_with_none'
    }),
    risk_category: StringColumn({
      label: 'Risk Category',
      maxLength: 20,
      choices: {
        low_risk: { label: 'Low Risk', sequence: 0 },
        medium_risk: { label: 'Medium Risk', sequence: 1 },
        high_risk: { label: 'High Risk', sequence: 2 }
      },
      dropdown: 'dropdown_with_none'
    }),
    rejection_reason: StringColumn({
      label: 'Rejection Reason',
      maxLength: 500
    }),
    loan_purpose: StringColumn({
      label: 'Loan Purpose',
      maxLength: 30,
      mandatory: true,
      choices: {
        debt_consolidation: { label: 'Debt Consolidation', sequence: 0 },
        home_improvement: { label: 'Home Improvement', sequence: 1 },
        major_purchase: { label: 'Major Purchase', sequence: 2 },
        medical_expenses: { label: 'Medical Expenses', sequence: 3 },
        vacation: { label: 'Vacation', sequence: 4 },
        business: { label: 'Business', sequence: 5 },
        education: { label: 'Education', sequence: 6 },
        other: { label: 'Other', sequence: 7 }
      },
      dropdown: 'dropdown_with_none'
    }),
    collateral_description: StringColumn({
      label: 'Collateral Description',
      maxLength: 500
    }),
    collateral_value: DecimalColumn({
      label: 'Collateral Value ($)'
    }),
    documents_verified: BooleanColumn({
      label: 'Documents Verified',
      default: 'false'
    }),
    income_verified: BooleanColumn({
      label: 'Income Verified',
      default: 'false'
    }),
    assigned_to: ReferenceColumn({
      label: 'Assigned Underwriter',
      referenceTable: 'sys_user'
    }),
    comments: StringColumn({
      label: 'Comments',
      maxLength: 1000
    })
  },
  display: 'customer',
  actions: ['create', 'read', 'update', 'delete'],
  accessible_from: 'public',
  allow_web_service_access: true,
  audit: true,
  auto_number: {
    prefix: 'LOAN',
    number: 10001,
    number_of_digits: 8
  }
});