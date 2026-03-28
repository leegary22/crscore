import '@servicenow/sdk/global';
import { Table, ReferenceColumn, IntegerColumn, StringColumn, DateTimeColumn, DecimalColumn } from '@servicenow/sdk/core';

export const x_snc_cash_loan_wi_credit_score = Table({
  name: 'x_snc_cash_loan_wi_credit_score',
  label: 'Credit Score',
  schema: {
    customer: ReferenceColumn({
      label: 'Customer',
      referenceTable: 'x_snc_cash_loan_wi_customer',
      mandatory: true
    }),
    credit_score: IntegerColumn({
      label: 'Credit Score',
      min: 300,
      max: 850,
      mandatory: true
    }),
    credit_bureau: StringColumn({
      label: 'Credit Bureau',
      maxLength: 30,
      mandatory: true,
      choices: {
        experian: { label: 'Experian', sequence: 0 },
        equifax: { label: 'Equifax', sequence: 1 },
        transunion: { label: 'TransUnion', sequence: 2 }
      },
      dropdown: 'dropdown_with_none'
    }),
    score_date: DateTimeColumn({
      label: 'Score Date',
      mandatory: true
    }),
    credit_rating: StringColumn({
      label: 'Credit Rating',
      maxLength: 20,
      choices: {
        excellent: { label: 'Excellent (750+)', sequence: 0 },
        very_good: { label: 'Very Good (700-749)', sequence: 1 },
        good: { label: 'Good (650-699)', sequence: 2 },
        fair: { label: 'Fair (600-649)', sequence: 3 },
        poor: { label: 'Poor (<600)', sequence: 4 }
      },
      dropdown: 'dropdown_with_none'
    }),
    debt_to_income_ratio: DecimalColumn({
      label: 'Debt-to-Income Ratio (%)'
    }),
    payment_history_score: IntegerColumn({
      label: 'Payment History Score',
      min: 0,
      max: 100
    }),
    credit_utilization: DecimalColumn({
      label: 'Credit Utilization (%)'
    }),
    total_debt: DecimalColumn({
      label: 'Total Debt ($)'
    }),
    available_credit: DecimalColumn({
      label: 'Available Credit ($)'
    }),
    number_of_accounts: IntegerColumn({
      label: 'Number of Credit Accounts'
    }),
    recent_inquiries: IntegerColumn({
      label: 'Recent Inquiries (6 months)'
    }),
    verification_method: StringColumn({
      label: 'Verification Method',
      maxLength: 30,
      choices: {
        soft_pull: { label: 'Soft Pull', sequence: 0 },
        hard_pull: { label: 'Hard Pull', sequence: 1 },
        third_party: { label: 'Third Party Service', sequence: 2 }
      },
      dropdown: 'dropdown_with_none'
    })
  },
  display: 'credit_score',
  actions: ['create', 'read', 'update', 'delete'],
  accessible_from: 'public',
  allow_web_service_access: true,
  audit: true
});