import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard.jsx';
import CustomerForm from './components/CustomerForm.jsx';
import LoanApplicationForm from './components/LoanApplicationForm.jsx';
import LoanApplicationsList from './components/LoanApplicationsList.jsx';
import CreditScoreForm from './components/CreditScoreForm.jsx';
import './app.css';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [viewParams, setViewParams] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'dashboard';
      const [view, ...params] = hash.split('/');
      setCurrentView(view);
      setViewParams(params.join('/'));
    };
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (view, params) => {
    window.location.hash = params ? `${view}/${params}` : view;
  };

  const renderNavigation = () => (
    <nav className="loan-nav">
      <div className="loan-nav-brand">
        <h1>Cash Loan System</h1>
      </div>
      <div className="loan-nav-links">
        <button 
          className={currentView === 'dashboard' ? 'active' : ''}
          onClick={() => navigate('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={currentView === 'customer' ? 'active' : ''}
          onClick={() => navigate('customer')}
        >
          New Customer
        </button>
        <button 
          className={currentView === 'credit-score' ? 'active' : ''}
          onClick={() => navigate('credit-score')}
        >
          Credit Score
        </button>
        <button 
          className={currentView === 'loan-application' ? 'active' : ''}
          onClick={() => navigate('loan-application')}
        >
          New Loan Application
        </button>
        <button 
          className={currentView === 'applications' ? 'active' : ''}
          onClick={() => navigate('applications')}
        >
          View Applications
        </button>
      </div>
    </nav>
  );

  const renderView = () => {
    switch(currentView) {
      case 'customer':
        return <CustomerForm onSuccess={() => navigate('dashboard')} />;
      case 'credit-score':
        return <CreditScoreForm onSuccess={() => navigate('dashboard')} />;
      case 'loan-application':
        return <LoanApplicationForm onSuccess={() => navigate('applications')} />;
      case 'applications':
        return <LoanApplicationsList />;
      default:
        return <Dashboard onNavigate={navigate} />;
    }
  };

  return (
    <div className="loan-app">
      {renderNavigation()}
      <main className="loan-main">
        {renderView()}
      </main>
    </div>
  );
}