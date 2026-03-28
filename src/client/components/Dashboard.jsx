import React, { useState, useEffect } from 'react';
import { LoanService } from '../services/LoanService.js';
import { display } from '../utils/fields.js';

export default function Dashboard({ onNavigate }) {
  const [metrics, setMetrics] = useState({
    totalApplications: 0,
    pendingReview: 0,
    approved: 0,
    totalCustomers: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const loanService = new LoanService();
      
      const [applications, customers] = await Promise.all([
        loanService.getLoanApplications(),
        loanService.getCustomers()
      ]);

      const totalApplications = applications.length;
      const pendingReview = applications.filter(app => 
        display(app.application_status) === 'under_review' || 
        display(app.application_status) === 'submitted'
      ).length;
      const approved = applications.filter(app => 
        display(app.application_status) === 'approved' || 
        display(app.application_status) === 'funded'
      ).length;
      
      setMetrics({
        totalApplications,
        pendingReview,
        approved,
        totalCustomers: customers.length
      });
    } catch (error) {
      setError('Failed to load dashboard data: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading dashboard...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div>
      <div className="card">
        <h2>Loan Application Dashboard</h2>
        <p>Welcome to the Cash Loan Application System. Manage customers, credit scores, and loan applications.</p>
      </div>

      <div className="dashboard-grid">
        <div className="metric-card">
          <div className="metric-number">{metrics.totalApplications}</div>
          <div className="metric-label">Total Applications</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">{metrics.pendingReview}</div>
          <div className="metric-label">Pending Review</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">{metrics.approved}</div>
          <div className="metric-label">Approved</div>
        </div>
        <div className="metric-card">
          <div className="metric-number">{metrics.totalCustomers}</div>
          <div className="metric-label">Total Customers</div>
        </div>
      </div>

      <div className="card">
        <h3>Quick Actions</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          <button className="btn btn-primary" onClick={() => onNavigate('customer')}>
            Add New Customer
          </button>
          <button className="btn btn-primary" onClick={() => onNavigate('credit-score')}>
            Add Credit Score
          </button>
          <button className="btn btn-primary" onClick={() => onNavigate('loan-application')}>
            New Loan Application
          </button>
          <button className="btn btn-secondary" onClick={() => onNavigate('applications')}>
            View All Applications
          </button>
        </div>
      </div>
    </div>
  );
}