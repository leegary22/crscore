import React, { useState } from 'react';
import { LoanService } from '../services/LoanService.js';

export default function CustomerForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    date_of_birth: '',
    social_security: '',
    address_line1: '',
    address_line2: '',
    city: '',
    state: '',
    zip_code: '',
    employment_status: '',
    annual_income: '',
    employer_name: '',
    years_employed: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const loanService = new LoanService();
      await loanService.createCustomer(formData);
      setSuccess('Customer created successfully!');
      setTimeout(() => {
        onSuccess();
      }, 2000);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>Add New Customer</h2>
      
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth *</label>
            <input
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>SSN (Last 4 digits) *</label>
            <input
              type="text"
              name="social_security"
              value={formData.social_security}
              onChange={handleChange}
              maxLength="4"
              pattern="[0-9]{4}"
              required
            />
          </div>
          <div className="form-group full-width">
            <label>Address Line 1 *</label>
            <input
              type="text"
              name="address_line1"
              value={formData.address_line1}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group full-width">
            <label>Address Line 2</label>
            <input
              type="text"
              name="address_line2"
              value={formData.address_line2}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>State *</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              maxLength="2"
              placeholder="CA"
              required
            />
          </div>
          <div className="form-group">
            <label>ZIP Code *</label>
            <input
              type="text"
              name="zip_code"
              value={formData.zip_code}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Employment Status *</label>
            <select
              name="employment_status"
              value={formData.employment_status}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
              <option value="self_employed">Self-Employed</option>
              <option value="retired">Retired</option>
              <option value="student">Student</option>
            </select>
          </div>
          <div className="form-group">
            <label>Annual Income *</label>
            <input
              type="number"
              name="annual_income"
              value={formData.annual_income}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />
          </div>
          <div className="form-group">
            <label>Employer Name</label>
            <input
              type="text"
              name="employer_name"
              value={formData.employer_name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Years Employed</label>
            <input
              type="number"
              name="years_employed"
              value={formData.years_employed}
              onChange={handleChange}
              min="0"
              step="0.1"
            />
          </div>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Customer'}
        </button>
      </form>
    </div>
  );
}