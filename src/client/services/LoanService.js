export class LoanService {
  constructor() {
    this.scope = 'x_snc_cash_loan_wi';
  }

  async getCustomers() {
    try {
      const response = await fetch(`/api/now/table/${this.scope}_customer?sysparm_display_value=all&sysparm_limit=100`, {
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        }
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to fetch customers');
      }
      
      const data = await response.json();
      return data.result || [];
    } catch (error) {
      console.error('Error fetching customers:', error);
      throw error;
    }
  }

  async createCustomer(customerData) {
    try {
      const response = await fetch(`/api/now/table/${this.scope}_customer?sysparm_display_value=all`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
        body: JSON.stringify(customerData)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to create customer');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating customer:', error);
      throw error;
    }
  }

  async getLoanProducts() {
    try {
      const response = await fetch(`/api/now/table/${this.scope}_loan_product?sysparm_display_value=all&active=true`, {
        headers: {
          "Accept": "application/json", 
          "X-UserToken": window.g_ck
        }
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to fetch loan products');
      }
      
      const data = await response.json();
      return data.result || [];
    } catch (error) {
      console.error('Error fetching loan products:', error);
      throw error;
    }
  }

  async getLoanApplications() {
    try {
      const response = await fetch(`/api/now/table/${this.scope}_loan_application?sysparm_display_value=all&sysparm_limit=50&sysparm_order=sys_created_on`, {
        headers: {
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        }
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to fetch loan applications');
      }
      
      const data = await response.json();
      return data.result || [];
    } catch (error) {
      console.error('Error fetching loan applications:', error);
      throw error;
    }
  }

  async submitLoanApplication(applicationData) {
    try {
      const response = await fetch(`/api/now/table/${this.scope}_loan_application?sysparm_display_value=all`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
        body: JSON.stringify(applicationData)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to submit loan application');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error submitting loan application:', error);
      throw error;
    }
  }

  async createCreditScore(creditScoreData) {
    try {
      const response = await fetch(`/api/now/table/${this.scope}_credit_score?sysparm_display_value=all`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "X-UserToken": window.g_ck
        },
        body: JSON.stringify(creditScoreData)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'Failed to create credit score');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating credit score:', error);
      throw error;
    }
  }
}