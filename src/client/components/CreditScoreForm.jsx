import React, { useState, useEffect } from 'react';
import { LoanService } from '../services/LoanService.js';
import { display, value } from '../utils/fields.js';

export default function CreditScoreForm({ onSuccess }) {
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    customer: '',
    credit_score: '',
    credit_bureau: '',
    debt_to_income_ratio: '',
    payment_history_score: '',
    credit_utilization: '',
    total_debt: '',
    available_credit: '',
    number_of_accounts: '',
    recent_inquiries: '',
    verification_method: ''
  });
  const [loading, setLoading] = useState(false);
  const [loadingCustomers, setLoadingCustomers] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const loanService = new LoanService();
      const customerData = await loanService.getCustomers();
      setCustomers(customerData);
    } catch (error) {
      setError('Failed to load customers: ' + error.message);
    } finally {
      setLoadingCustomers(false);
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
      const submitData = {
        ...formData,
        score_date: new Date().toISOString()
      };
      await loanService.createCreditScore(submitData);
      setSuccess('Credit score created successfully!');
      setTimeout(() => {
        onSuccess();
      }, 2000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loadingCustomers) return <div className="loading">Loading customers...</div>;

  return (
    <div className="card">
      <h2>Add Credit Score</h2>
      
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
                  {display(customer.first_name)} {display(customer.last_name)}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Credit Score (300-850) *</label>
            <input
              type="number"
              name="credit_score"
              value={formData.credit_score}
              onChange={handleChange}
              min="300"
              max="850"
              required
            />
          </div>
          <div className="form-group">
            <label>Credit Bureau *</label>
            <select
              name="credit_bureau"
              value={formData.credit_bureau}
              onChange={handleChange}
              required
            >
              <option value="">Select Bureau...</option>
              <option value="experian">Experian</option>
              <option value="equifax">Equifax</option>
              <option value="transunion">TransUnion</option>
            </select>
          </div>
          <div className="form-group">
            <label>Verification Method</label>
            <select
              name="verification_method"
              value={formData.verification_method}
              onChange={handleChange}
            >
              <option value="">Select Method...</option>
              <option value="soft_pull">Soft Pull</option>
              <option value="hard_pull">Hard Pull</option>
              <option value="third_party">Third Party Service</option>
            </select>
          </div>
          <div className="form-group">
            <label>Debt-to-Income Ratio (%)</label>
            <input
              type="number"
              name="debt_to_income_ratio"
              value={formData.debt_to_income_ratio}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.1"
            />
          </div>
          <div className="form-group">
            <label>Payment History Score (0-100)</label>
            <input
              type="number"
              name="payment_history_score"
              value={formData.payment_history_score}
              onChange={handleChange}
              min="0"
              max="100"
            />
          </div>
          <div className="form-group">
            <label>Credit Utilization (%)</label>
            <input
              type="number"
              name="credit_utilization"
              value={formData.credit_utilization}
              onChange={handleChange}
              min="0"
              max="100"
              step="0.1"
            />
          </div>
          <div className="form-group">
            <label>Total Debt ($)</label>
            <input
              type="number"
              name="total_debt"
              value={formData.total_debt}
              onChange={handleChange}
              min="0"
              step="0.01"
            />
          </div>
          <div className="form-group">
            <label>Available Credit ($)</label>
            <input
              type="number"
              name="available_credit"
              value={formData.available_credit}
              onChange={handleChange}
              min="0"
              step="0.01"
            />
          </div>
          <div className="form-group">
            <label>Number of Credit Accounts</label>
            <input
              type="number"
              name="number_of_accounts"
              value={formData.number_of_accounts}
              onChange={handleChange}
              min="0"
            />
          </div>
          <div className="form-group">
            <label>Recent Inquiries (6 months)</label>
            <input
              type="number"
              name="recent_inquiries"
              value={formData.recent_inquiries}
              onChange={handleChange}
              min="0"
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Credit Score'}
        </button>
      </form>
    </div>
  );
}