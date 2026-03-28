import '@servicenow/sdk/global';
import { Table, StringColumn, DateColumn, DecimalColumn } from '@servicenow/sdk/core';

export const x_snc_cash_loan_wi_customer = Table({
  name: 'x_snc_cash_loan_wi_customer',
  label: 'Customer',
  schema: {
    first_name: StringColumn({
      label: 'First Name',
      maxLength: 50,
      mandatory: true
    }),
    last_name: StringColumn({
      label: 'Last Name',
      maxLength: 50,
      mandatory: true
    }),
    email: StringColumn({
      label: 'Email Address',
      maxLength: 100,
      mandatory: false
    }),
    phone: StringColumn({
      label: 'Phone Number',
      maxLength: 20,
      mandatory: true
    }),
    date_of_birth: DateColumn({
      label: 'Date of Birth',
      mandatory: true
    }),
    social_security: StringColumn({
      label: 'SSN (Last 4)',
      maxLength: 4,
      mandatory: true
    }),
    address_line1: StringColumn({
      label: 'Address Line 1',
      maxLength: 100,
      mandatory: true
    }),
    address_line2: StringColumn({
      label: 'Address Line 2',
      maxLength: 100
    }),
    city: StringColumn({
      label: 'City',
      maxLength: 50,
      mandatory: true
    }),
    state: StringColumn({
      label: 'State',
      maxLength: 2,
      mandatory: true
    }),
    zip_code: StringColumn({
      label: 'ZIP Code',
      maxLength: 10,
      mandatory: true
    }),
    employment_status: StringColumn({
      label: 'Employment Status',
      maxLength: 20,
      mandatory: true,
      choices: {
        employed: { label: 'Employed', sequence: 0 },
        unemployed: { label: 'Unemployed', sequence: 1 },
        self_employed: { label: 'Self-Employed', sequence: 2 },
        retired: { label: 'Retired', sequence: 3 },
        student: { label: 'Student', sequence: 4 }
      },
      dropdown: 'dropdown_with_none'
    }),
    annual_income: DecimalColumn({
      label: 'Annual Income ($)',
      mandatory: true
    }),
    employer_name: StringColumn({
      label: 'Employer Name',
      maxLength: 100
    }),
    years_employed: DecimalColumn({
      label: 'Years Employed'
    }),
    customer_status: StringColumn({
      label: 'Customer Status',
      maxLength: 20,
      default: 'active',
      choices: {
        active: { label: 'Active', sequence: 0 },
        inactive: { label: 'Inactive', sequence: 1 },
        suspended: { label: 'Suspended', sequence: 2 }
      },
      dropdown: 'dropdown_with_none'
    }),
    verification_status: StringColumn({
      label: 'Verification Status',
      maxLength: 20,
      default: 'pending',
      choices: {
        pending: { label: 'Pending', sequence: 0 },
        verified: { label: 'Verified', sequence: 1 },
        rejected: { label: 'Rejected', sequence: 2 }
      },
      dropdown: 'dropdown_with_none'
    })
  },
  display: 'first_name',
  actions: ['create', 'read', 'update', 'delete'],
  accessible_from: 'public',
  allow_web_service_access: true,
  audit: true,
  auto_number: {
    prefix: 'CUST',
    number: 1001,
    number_of_digits: 6
  }
});