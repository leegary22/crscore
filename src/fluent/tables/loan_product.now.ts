import '@servicenow/sdk/global';
import { Table, StringColumn, DecimalColumn, IntegerColumn, BooleanColumn } from '@servicenow/sdk/core';

export const x_snc_cash_loan_wi_loan_product = Table({
  name: 'x_snc_cash_loan_wi_loan_product',
  label: 'Loan Product',
  schema: {
    product_name: StringColumn({
      label: 'Product Name',
      maxLength: 100,
      mandatory: true
    }),
    product_code: StringColumn({
      label: 'Product Code',
      maxLength: 20,
      mandatory: true
    }),
    description: StringColumn({
      label: 'Description',
      maxLength: 500
    }),
    min_amount: DecimalColumn({
      label: 'Minimum Amount ($)',
      mandatory: true
    }),
    max_amount: DecimalColumn({
      label: 'Maximum Amount ($)',
      mandatory: true
    }),
    min_credit_score: IntegerColumn({
      label: 'Minimum Credit Score',
      mandatory: true
    }),
    base_interest_rate: DecimalColumn({
      label: 'Base Interest Rate (%)',
      mandatory: true
    }),
    term_months: IntegerColumn({
      label: 'Term (Months)',
      mandatory: true
    }),
    product_category: StringColumn({
      label: 'Product Category',
      maxLength: 30,
      mandatory: true,
      choices: {
        personal: { label: 'Personal Loan', sequence: 0 },
        auto: { label: 'Auto Loan', sequence: 1 },
        mortgage: { label: 'Mortgage', sequence: 2 },
        business: { label: 'Business Loan', sequence: 3 },
        emergency: { label: 'Emergency Loan', sequence: 4 }
      },
      dropdown: 'dropdown_with_none'
    }),
    active: BooleanColumn({
      label: 'Active',
      default: 'true'
    }),
    requires_collateral: BooleanColumn({
      label: 'Requires Collateral',
      default: 'false'
    }),
    income_verification_required: BooleanColumn({
      label: 'Income Verification Required',
      default: 'true'
    })
  },
  display: 'product_name',
  actions: ['create', 'read', 'update', 'delete'],
  accessible_from: 'public',
  allow_web_service_access: true
});