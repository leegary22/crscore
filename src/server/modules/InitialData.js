import { gs, GlideRecord } from '@servicenow/glide';

/**
 * Create initial loan products for testing
 */
export function createInitialLoanProducts() {
  const products = [
    {
      product_name: 'Personal Loan - Standard',
      product_code: 'PL001',
      description: 'Standard personal loan for general purposes',
      min_amount: 1000,
      max_amount: 50000,
      min_credit_score: 600,
      base_interest_rate: 12.5,
      term_months: 36,
      product_category: 'personal',
      active: true,
      requires_collateral: false,
      income_verification_required: true
    },
    {
      product_name: 'Personal Loan - Premium',
      product_code: 'PL002',
      description: 'Premium personal loan with better rates for high credit scores',
      min_amount: 5000,
      max_amount: 100000,
      min_credit_score: 700,
      base_interest_rate: 8.9,
      term_months: 48,
      product_category: 'personal',
      active: true,
      requires_collateral: false,
      income_verification_required: true
    }
  ];

  products.forEach(product => {
    const gr = new GlideRecord('x_snc_cash_loan_wi_loan_product');
    gr.initialize();
    
    Object.keys(product).forEach(key => {
      gr.setValue(key, product[key]);
    });
    
    gr.insert();
    gs.info('Created loan product: ' + product.product_name);
  });
}

/**
 * Create a sample customer for testing
 */
export function createSampleCustomer() {
  const gr = new GlideRecord('x_snc_cash_loan_wi_customer');
  gr.initialize();
  
  gr.setValue('first_name', 'John');
  gr.setValue('last_name', 'Doe');
  gr.setValue('email', 'john.doe@example.com');
  gr.setValue('phone', '555-123-4567');
  gr.setValue('date_of_birth', '1985-06-15');
  gr.setValue('social_security', '1234');
  gr.setValue('address_line1', '123 Main Street');
  gr.setValue('city', 'Anytown');
  gr.setValue('state', 'CA');
  gr.setValue('zip_code', '12345');
  gr.setValue('employment_status', 'employed');
  gr.setValue('annual_income', 75000);
  gr.setValue('employer_name', 'Tech Corp');
  gr.setValue('years_employed', 3);
  
  const customerSysId = gr.insert();
  gs.info('Created sample customer: John Doe with sys_id: ' + customerSysId);
  
  // Create a credit score for this customer
  const creditGR = new GlideRecord('x_snc_cash_loan_wi_credit_score');
  creditGR.initialize();
  creditGR.setValue('customer', customerSysId);
  creditGR.setValue('credit_score', 720);
  creditGR.setValue('credit_bureau', 'experian');
  creditGR.setValue('score_date', gs.nowDateTime());
  creditGR.setValue('debt_to_income_ratio', 25);
  creditGR.setValue('payment_history_score', 85);
  creditGR.setValue('credit_utilization', 15);
  creditGR.setValue('total_debt', 25000);
  creditGR.setValue('available_credit', 15000);
  creditGR.setValue('number_of_accounts', 5);
  creditGR.setValue('recent_inquiries', 1);
  creditGR.setValue('verification_method', 'soft_pull');
  
  creditGR.insert();
  gs.info('Created credit score for customer John Doe');
}