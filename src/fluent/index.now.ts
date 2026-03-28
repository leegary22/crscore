//Add your Fluent APIs here and in other now.ts files under src/fluent

// Export all table definitions
export * from './tables/customer.now';
export * from './tables/loan_product.now';
export * from './tables/credit_score.now';
export * from './tables/loan_application.now';
export * from './tables/payment_schedule.now';

// Export all business rules
export * from './business-rules/credit_score_rating.now';
export * from './business-rules/loan_application_processor.now';
export * from './business-rules/payment_schedule_generator.now';
export * from './business-rules/payment_status_updater.now';

// Export UI pages
export * from './ui-pages/loan_application.now';