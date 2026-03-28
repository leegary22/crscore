/**
 * Simple Demo Data Creation Script
 * This can be run from a background script or fix script
 */

// Import the demo data creation functions
var InitialData = require('src/server/modules/InitialData.js');

// Create complete demo data
gs.info('Starting demo data creation...');

try {
  var result = InitialData.createCompleteDemoData();
  
  if (result.success) {
    gs.info('✅ Demo data creation completed successfully!');
    gs.info('📊 Created:');
    gs.info('   • ' + result.products + ' loan products');
    gs.info('   • ' + result.customers + ' customers'); 
    gs.info('   • ' + result.applications + ' loan applications');
    gs.info('   • Credit scores for all customers');
    gs.info('   • Payment schedules for approved loans');
  } else {
    gs.error('❌ Demo data creation failed: ' + result.error);
  }
} catch (error) {
  gs.error('❌ Error running demo data script: ' + error.message);
}

gs.info('Demo data script execution completed.');