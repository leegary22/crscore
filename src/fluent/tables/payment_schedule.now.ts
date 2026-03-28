import '@servicenow/sdk/global';
import { Table, ReferenceColumn, DecimalColumn, StringColumn, DateColumn, IntegerColumn } from '@servicenow/sdk/core';

export const x_snc_cash_loan_wi_payment_schedule = Table({
  name: 'x_snc_cash_loan_wi_payment_schedule',
  label: 'Payment Schedule',
  schema: {
    loan_application: ReferenceColumn({
      label: 'Loan Application',
      referenceTable: 'x_snc_cash_loan_wi_loan_application',
      mandatory: true
    }),
    payment_number: IntegerColumn({
      label: 'Payment Number',
      mandatory: true
    }),
    due_date: DateColumn({
      label: 'Due Date',
      mandatory: true
    }),
    payment_amount: DecimalColumn({
      label: 'Payment Amount ($)',
      mandatory: true
    }),
    principal_amount: DecimalColumn({
      label: 'Principal Amount ($)',
      mandatory: true
    }),
    interest_amount: DecimalColumn({
      label: 'Interest Amount ($)',
      mandatory: true
    }),
    remaining_balance: DecimalColumn({
      label: 'Remaining Balance ($)',
      mandatory: true
    }),
    payment_status: StringColumn({
      label: 'Payment Status',
      maxLength: 20,
      default: 'pending',
      mandatory: true,
      choices: {
        pending: { label: 'Pending', sequence: 0 },
        paid: { label: 'Paid', sequence: 1 },
        overdue: { label: 'Overdue', sequence: 2 },
        partial: { label: 'Partial Payment', sequence: 3 },
        skipped: { label: 'Skipped', sequence: 4 }
      },
      dropdown: 'dropdown_with_none'
    }),
    actual_payment_date: DateColumn({
      label: 'Actual Payment Date'
    }),
    actual_payment_amount: DecimalColumn({
      label: 'Actual Payment Amount ($)'
    }),
    late_fee: DecimalColumn({
      label: 'Late Fee ($)',
      default: '0.00'
    }),
    payment_method: StringColumn({
      label: 'Payment Method',
      maxLength: 20,
      choices: {
        ach: { label: 'ACH Transfer', sequence: 0 },
        check: { label: 'Check', sequence: 1 },
        credit_card: { label: 'Credit Card', sequence: 2 },
        cash: { label: 'Cash', sequence: 3 },
        wire_transfer: { label: 'Wire Transfer', sequence: 4 }
      },
      dropdown: 'dropdown_with_none'
    }),
    transaction_reference: StringColumn({
      label: 'Transaction Reference',
      maxLength: 50
    }),
    notes: StringColumn({
      label: 'Payment Notes',
      maxLength: 500
    })
  },
  display: 'payment_number',
  actions: ['create', 'read', 'update', 'delete'],
  accessible_from: 'public',
  allow_web_service_access: true,
  audit: true
});