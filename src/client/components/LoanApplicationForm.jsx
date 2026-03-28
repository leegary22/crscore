import React, { useState, useEffect } from 'react';
import { LoanService } from '../services/LoanService.js';
import { display, value } from '../utils/fields.js';

export default function LoanApplicationForm({ onSuccess }) {
  const [customers, setCustomers] = useState([]);
  const [loanProducts, setLoanProducts] = useState([]);
  const [formData, setFormData] = useState({
    customer: '',
    loan_product: '',
    requested_amount: '',
    term_months: '',
    loan_purpose: '',
    collateral_description: '',
    collateral_value: ''
  });
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    loadFormData();
  }, []);

  const loadFormData = async () => {
    try {
      const loanService = new LoanService();
      const [customerData, productData] = await Promise.all([
        loanService.getCustomers(),
        loanService.getLoanProducts()
      ]);
      setCustomers(customerData);
      setLoanProducts(productData);
    } catch (error) {
      setError('Failed to load form data: ' + error.message);
    } finally {
      setLoadingData(false);
    }
  };

  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;
    setFormData(prev => ({ ...prev, [name]: inputValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const loanService = new LoanService();
      await loanService.submitLoanApplication(formData);
      setSuccess('Loan application submitted successfully!');
      setTimeout(() => {
        onSuccess();
      }, 2000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loadingData) return <div className="loading">Loading form data...</div>;

  return (
    <div className="card">
      <h2>Submit Loan Application</h2>
      
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Customer *</label>
            <select
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              required
            >
              <option value="">Select Customer...</option>
              {customers.map(customer => (
                <option key={value(customer.sys_id)} value={value(customer.sys_id)}>
                  {display(customer.first_name)} {display(customer.last_name)} - {display(customer.email)}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Loan Product *</label>
            <select
              name="loan_product"
              value={formData.loan_product}
              onChange={handleChange}
              required
            >
              <option value="">Select Product...</option>
              {loanProducts.map(product => (
                <option key={value(product.sys_id)} value={value(product.sys_id)}>
                  {display(product.product_name)} - {display(product.base_interest_rate)}% APR
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Requested Amount ($) *</label>
            <input
              type="number"
              name="requested_amount"
              value={formData.requested_amount}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />
          </div>
          <div className="form-group">
            <label>Term (Months) *</label>
            <select
              name="term_months"
              value={formData.term_months}
              onChange={handleChange}
              required
            >
              <option value="">Select Term...</option>
              <option value="12">12 Months</option>
              <option value="24">24 Months</option>
              <option value="36">36 Months</option>
              <option value="48">48 Months</option>
              <option value="60">60 Months</option>
              <option value="72">72 Months</option>
            </select>
          </div>
          <div className="form-group">
            <label>Loan Purpose *</label>
            <select
              name="loan_purpose"
              value={formData.loan_purpose}
              onChange={handleChange}
              required
            >
              <option value="">Select Purpose...</option>
              <option value="debt_consolidation">Debt Consolidation</option>
              <option value="home_improvement">Home Improvement</option>
              <option value="major_purchase">Major Purchase</option>
              <option value="medical_expenses">Medical Expenses</option>
              <option value="vacation">Vacation</option>
              <option value="business">Business</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group full-width">
            <label>Collateral Description</label>
            <input
              type="text"
              name="collateral_description"
              value={formData.collateral_description}
              onChange={handleChange}
              placeholder="Describe any collateral (if applicable)"
            />
          </div>
          <div className="form-group">
            <label>Collateral Value ($)</label>
            <input
              type="number"
              name="collateral_value"
              value={formData.collateral_value}
              onChange={handleChange}
              min="0"
              step="0.01"
            />
          </div>
        </div>
        
        <div className="card" style={{ backgroundColor: '#f8f9fa', marginTop: '2rem' }}>
          <h4>Important Notes:</h4>
          <ul style={{ marginLeft: '1rem' }}>
            <li>Ensure the customer has a valid credit score on file before submitting</li>
            <li>Applications are automatically processed based on credit score and eligibility criteria</li>
            <li>Low-risk applications under $25,000 may be auto-approved</li>
            <li>All other applications will require manual review</li>
          </ul>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={loading}
          style={{ marginTop: '1rem' }}
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}