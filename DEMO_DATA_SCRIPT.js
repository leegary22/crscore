/**
 * 🎯 COMPREHENSIVE DEMO DATA CREATION SCRIPT
 * 
 * Copy and paste this script into ServiceNow Background Scripts
 * to generate complete demo data for the Cash Loan Application System
 * 
 * Instructions:
 * 1. Navigate to System Definition → Scripts - Background
 * 2. Copy this entire script
 * 3. Paste into the script field
 * 4. Click "Run script"
 * 5. Check the output log for success confirmation
 * 6. Refresh your loan application dashboard to see the data
 */

gs.info('🚀 Starting comprehensive demo data creation for Cash Loan Application System...');

try {
  // Step 1: Create Loan Products
  gs.info('📋 Creating loan products...');
  
  const products = [
    {
      product_name: 'Personal Loan - Standard',
      product_code: 'PL001',
      description: 'Standard personal loan for general purposes with competitive rates',
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
      description: 'Premium personal loan with excellent rates for high credit scores',
      min_amount: 5000,
      max_amount: 100000,
      min_credit_score: 700,
      base_interest_rate: 8.9,
      term_months: 48,
      product_category: 'personal',
      active: true,
      requires_collateral: false,
      income_verification_required: true
    },
    {
      product_name: 'Emergency Loan - Quick',
      product_code: 'EL001',
      description: 'Fast emergency loan for urgent financial needs - quick approval',
      min_amount: 500,
      max_amount: 15000,
      min_credit_score: 550,
      base_interest_rate: 18.9,
      term_months: 24,
      product_category: 'emergency',
      active: true,
      requires_collateral: false,
      income_verification_required: true
    },
    {
      product_name: 'Auto Loan - New Vehicle',
      product_code: 'AL001',
      description: 'Auto loan for new vehicle purchases with competitive rates',
      min_amount: 15000,
      max_amount: 85000,
      min_credit_score: 650,
      base_interest_rate: 6.5,
      term_months: 60,
      product_category: 'auto',
      active: true,
      requires_collateral: true,
      income_verification_required: true
    },
    {
      product_name: 'Auto Loan - Used Vehicle',
      product_code: 'AL002', 
      description: 'Auto loan for used vehicle purchases',
      min_amount: 5000,
      max_amount: 45000,
      min_credit_score: 600,
      base_interest_rate: 8.9,
      term_months: 48,
      product_category: 'auto',
      active: true,
      requires_collateral: true,
      income_verification_required: true
    },
    {
      product_name: 'Business Loan - Small Business',
      product_code: 'BL001',
      description: 'Small business loan for entrepreneurs and growing companies',
      min_amount: 10000,
      max_amount: 250000,
      min_credit_score: 680,
      base_interest_rate: 11.5,
      term_months: 60,
      product_category: 'business',
      active: true,
      requires_collateral: true,
      income_verification_required: true
    }
  ];

  const createdProducts = [];
  products.forEach(function(product) {
    const gr = new GlideRecord('x_snc_cash_loan_wi_loan_product');
    gr.initialize();
    
    Object.keys(product).forEach(function(key) {
      gr.setValue(key, product[key]);
    });
    
    const sysId = gr.insert();
    createdProducts.push({ sysId: sysId, name: product.product_name });
    gs.info('  ✓ Created: ' + product.product_name);
  });

  // Step 2: Create Demo Customers
  gs.info('👥 Creating demo customers...');
  
  const customers = [
    {
      first_name: 'Sarah', last_name: 'Johnson',
      email: 'sarah.johnson@email.com', phone: '555-123-4567',
      date_of_birth: '1985-03-15', social_security: '1234',
      address_line1: '123 Oak Street', city: 'San Francisco', state: 'CA', zip_code: '94102',
      employment_status: 'employed', annual_income: 95000,
      employer_name: 'Tech Solutions Inc', years_employed: 5.2,
      creditScore: 780
    },
    {
      first_name: 'Michael', last_name: 'Chen',
      email: 'michael.chen@email.com', phone: '555-234-5678',
      date_of_birth: '1978-11-22', social_security: '5678',
      address_line1: '456 Pine Avenue', address_line2: 'Apt 2B',
      city: 'Seattle', state: 'WA', zip_code: '98101',
      employment_status: 'employed', annual_income: 125000,
      employer_name: 'Global Engineering Corp', years_employed: 8.5,
      creditScore: 745
    },
    {
      first_name: 'Emily', last_name: 'Rodriguez',
      email: 'emily.rodriguez@email.com', phone: '555-345-6789',
      date_of_birth: '1990-07-08', social_security: '9012',
      address_line1: '789 Maple Drive', city: 'Austin', state: 'TX', zip_code: '73301',
      employment_status: 'employed', annual_income: 68000,
      employer_name: 'Healthcare Partners', years_employed: 3.1,
      creditScore: 685
    },
    {
      first_name: 'David', last_name: 'Thompson',
      email: '', phone: '555-456-7890', // Testing optional email
      date_of_birth: '1983-12-03', social_security: '3456',
      address_line1: '321 Cedar Lane', city: 'Denver', state: 'CO', zip_code: '80201',
      employment_status: 'self_employed', annual_income: 85000,
      employer_name: 'Thompson Consulting', years_employed: 4.0,
      creditScore: 620
    },
    {
      first_name: 'Jessica', last_name: 'Williams',
      email: 'jessica.williams@email.com', phone: '555-567-8901',
      date_of_birth: '1992-09-14', social_security: '7890',
      address_line1: '654 Birch Street', city: 'Miami', state: 'FL', zip_code: '33101',
      employment_status: 'employed', annual_income: 45000,
      employer_name: 'Retail Solutions LLC', years_employed: 2.5,
      creditScore: 580
    },
    {
      first_name: 'Robert', last_name: 'Davis',
      email: 'robert.davis@email.com', phone: '555-678-9012',
      date_of_birth: '1975-01-20', social_security: '2468',
      address_line1: '987 Elm Court', city: 'Phoenix', state: 'AZ', zip_code: '85001',
      employment_status: 'retired', annual_income: 55000,
      employer_name: 'Retired - Former Government', years_employed: 0,
      creditScore: 720
    }
  ];

  const createdCustomers = [];
  customers.forEach(function(customer) {
    const gr = new GlideRecord('x_snc_cash_loan_wi_customer');
    gr.initialize();
    
    // Set customer data (excluding credit score)
    const customerData = Object.assign({}, customer);
    delete customerData.creditScore;
    
    Object.keys(customerData).forEach(function(key) {
      gr.setValue(key, customerData[key]);
    });
    
    const customerSysId = gr.insert();
    createdCustomers.push({
      sysId: customerSysId,
      name: customer.first_name + ' ' + customer.last_name,
      creditScore: customer.creditScore
    });
    
    gs.info('  ✓ Created customer: ' + customer.first_name + ' ' + customer.last_name);
  });

  // Step 3: Create Credit Scores
  gs.info('💳 Creating credit scores...');
  
  const creditBureaus = ['experian', 'equifax', 'transunion'];
  const verificationMethods = ['soft_pull', 'hard_pull', 'third_party'];
  
  createdCustomers.forEach(function(customer, index) {
    const bureau = creditBureaus[index % creditBureaus.length];
    const verificationMethod = verificationMethods[index % verificationMethods.length];
    const score = customer.creditScore;
    
    // Calculate realistic metrics based on credit score
    let debtToIncomeRatio, creditUtilization, totalDebt, availableCredit, paymentHistoryScore;
    
    if (score >= 750) {
      debtToIncomeRatio = 15 + Math.random() * 10;
      creditUtilization = 5 + Math.random() * 10;
      paymentHistoryScore = 90 + Math.random() * 10;
      totalDebt = 10000 + Math.random() * 20000;
      availableCredit = 25000 + Math.random() * 35000;
    } else if (score >= 700) {
      debtToIncomeRatio = 20 + Math.random() * 15;
      creditUtilization = 10 + Math.random() * 15;
      paymentHistoryScore = 80 + Math.random() * 15;
      totalDebt = 15000 + Math.random() * 25000;
      availableCredit = 15000 + Math.random() * 25000;
    } else if (score >= 650) {
      debtToIncomeRatio = 25 + Math.random() * 20;
      creditUtilization = 20 + Math.random() * 20;
      paymentHistoryScore = 70 + Math.random() * 15;
      totalDebt = 20000 + Math.random() * 30000;
      availableCredit = 10000 + Math.random() * 20000;
    } else {
      debtToIncomeRatio = 35 + Math.random() * 25;
      creditUtilization = 40 + Math.random() * 30;
      paymentHistoryScore = 50 + Math.random() * 25;
      totalDebt = 25000 + Math.random() * 35000;
      availableCredit = 5000 + Math.random() * 15000;
    }
    
    const creditGR = new GlideRecord('x_snc_cash_loan_wi_credit_score');
    creditGR.initialize();
    creditGR.setValue('customer', customer.sysId);
    creditGR.setValue('credit_score', score);
    creditGR.setValue('credit_bureau', bureau);
    creditGR.setValue('score_date', gs.nowDateTime());
    creditGR.setValue('debt_to_income_ratio', Math.round(debtToIncomeRatio * 10) / 10);
    creditGR.setValue('payment_history_score', Math.round(paymentHistoryScore));
    creditGR.setValue('credit_utilization', Math.round(creditUtilization * 10) / 10);
    creditGR.setValue('total_debt', Math.round(totalDebt));
    creditGR.setValue('available_credit', Math.round(availableCredit));
    creditGR.setValue('number_of_accounts', 3 + Math.floor(Math.random() * 8));
    creditGR.setValue('recent_inquiries', Math.floor(Math.random() * 4));
    creditGR.setValue('verification_method', verificationMethod);
    
    creditGR.insert();
    gs.info('  ✓ Created credit score: ' + customer.name + ' (' + score + ')');
  });

  // Step 4: Create Sample Loan Applications
  gs.info('📝 Creating loan applications...');
  
  const applications = [
    // Auto-approved (excellent credit, low amount)
    { customerIndex: 0, productIndex: 0, amount: 15000, term: 36, purpose: 'debt_consolidation' },
    { customerIndex: 1, productIndex: 1, amount: 20000, term: 48, purpose: 'home_improvement' },
    
    // Under review (medium risk or high amounts)
    { customerIndex: 2, productIndex: 3, amount: 35000, term: 60, purpose: 'other', collateral: '2024 Honda Civic', collateralValue: 38000 },
    { customerIndex: 3, productIndex: 5, amount: 45000, term: 60, purpose: 'business', collateral: 'Business equipment', collateralValue: 55000 },
    
    // Rejected (poor credit for premium product)
    { customerIndex: 4, productIndex: 1, amount: 25000, term: 48, purpose: 'debt_consolidation' },
    
    // Emergency loan (approved)
    { customerIndex: 5, productIndex: 2, amount: 8000, term: 24, purpose: 'medical_expenses' }
  ];
  
  applications.forEach(function(app, index) {
    const customer = createdCustomers[app.customerIndex];
    const product = createdProducts[app.productIndex];
    
    const gr = new GlideRecord('x_snc_cash_loan_wi_loan_application');
    gr.initialize();
    
    gr.setValue('customer', customer.sysId);
    gr.setValue('loan_product', product.sysId);
    gr.setValue('requested_amount', app.amount);
    gr.setValue('term_months', app.term);
    gr.setValue('loan_purpose', app.purpose);
    
    if (app.collateral) {
      gr.setValue('collateral_description', app.collateral);
      gr.setValue('collateral_value', app.collateralValue);
    }
    
    // Set application date to random time in past month
    const daysAgo = 1 + Math.floor(Math.random() * 30);
    const appDate = new GlideDateTime();
    appDate.addDaysUTC(-daysAgo);
    gr.setValue('application_date', appDate.getDisplayValue());
    
    const appSysId = gr.insert();
    gs.info('  ✓ Created application: ' + customer.name + ' - $' + app.amount);
  });

  gs.info('');
  gs.info('🎉 DEMO DATA CREATION COMPLETED SUCCESSFULLY!');
  gs.info('');
  gs.info('📊 Summary:');
  gs.info('  • ' + createdProducts.length + ' loan products created');
  gs.info('  • ' + createdCustomers.length + ' customers created');  
  gs.info('  • ' + createdCustomers.length + ' credit scores created');
  gs.info('  • ' + applications.length + ' loan applications created');
  gs.info('');
  gs.info('✅ Demo data includes:');
  gs.info('  • Customers with credit scores from 580-780');
  gs.info('  • Various loan products (Personal, Auto, Business, Emergency)');
  gs.info('  • Applications in different states (approved, under review, rejected)');
  gs.info('  • Realistic payment schedules will be auto-generated');
  gs.info('');
  gs.info('🔄 Next steps:');
  gs.info('  1. Refresh your loan application dashboard');
  gs.info('  2. Navigate to the loan application interface');
  gs.info('  3. Explore the created customers, applications, and data');
  gs.info('  4. Test creating new applications with the existing customers');
  gs.info('');
  gs.info('🎯 Your Cash Loan Application System is now ready for testing and demonstration!');

} catch (error) {
  gs.error('❌ Error creating demo data: ' + error.message);
  gs.error('Stack trace: ' + error.stack);
}

gs.info('Demo data script execution completed.');