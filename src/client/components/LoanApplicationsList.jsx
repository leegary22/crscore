import React, { useState, useEffect } from 'react';
import { LoanService } from '../services/LoanService.js';
import { display, value } from '../utils/fields.js';

export default function LoanApplicationsList() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      setLoading(true);
      const loanService = new LoanService();
      const data = await loanService.getLoanApplications();
      setApplications(data);
    } catch (error) {
      setError('Failed to load applications: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusClass = `status-badge status-${status}`;
    return <span className={statusClass}>{display(status).replace(/_/g, ' ')}</span>;
  };

  const getRiskBadge = (risk) => {
    if (!risk) return null;
    const riskClass = `risk-badge risk-${risk}`;
    return <span className={riskClass}>{display(risk).replace(/_/g, ' ')}</span>;
  };

  const formatCurrency = (amount) => {
    if (!amount) return '$0.00';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(parseFloat(amount));
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    return new Date(dateString).toLocaleDateString();
  };

  if (loading) return <div className="loading">Loading applications...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Loan Applications</h2>
        <button 
          className="btn btn-secondary" 
          onClick={loadApplications}
        >
          Refresh
        </button>
      </div>

      {applications.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem', color: '#6c757d' }}>
          No loan applications found. Create your first application to get started.
        </div>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="table">
            <thead>
              <tr>
                <th>Application #</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Requested Amount</th>
                <th>Status</th>
                <th>Risk Category</th>
                <th>Interest Rate</th>
                <th>Monthly Payment</th>
                <th>Applied Date</th>
                <th>Decision Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.map(app => (
                <tr key={value(app.sys_id)}>
                  <td>
                    <strong>{display(app.number)}</strong>
                  </td>
                  <td>
                    {display(app.customer)}
                  </td>
                  <td>
                    {display(app.loan_product)}
                  </td>
                  <td>
                    {formatCurrency(display(app.requested_amount))}
                  </td>
                  <td>
                    {getStatusBadge(display(app.application_status))}
                  </td>
                  <td>
                    {getRiskBadge(display(app.risk_category))}
                  </td>
                  <td>
                    {display(app.interest_rate) ? `${display(app.interest_rate)}%` : '-'}
                  </td>
                  <td>
                    {display(app.monthly_payment) ? formatCurrency(display(app.monthly_payment)) : '-'}
                  </td>
                  <td>
                    {formatDate(display(app.application_date))}
                  </td>
                  <td>
                    {formatDate(display(app.decision_date))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <h4>Application Status Guide:</h4>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
          <span className="status-badge status-submitted">Submitted</span>
          <span className="status-badge status-under_review">Under Review</span>
          <span className="status-badge status-approved">Approved</span>
          <span className="status-badge status-rejected">Rejected</span>
          <span className="status-badge status-funded">Funded</span>
        </div>
      </div>
    </div>
  );
}