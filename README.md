# 💰 Cash Loan Application System

[![ServiceNow](https://img.shields.io/badge/ServiceNow-Fluent%20SDK-00A1C9?style=flat-square&logo=servicenow)](https://developer.servicenow.com/)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-UNLICENSED-red?style=flat-square)](#)
[![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)](#)

A comprehensive ServiceNow application for managing cash loan applications with integrated credit score evaluation, automated approval workflows, and complete customer management capabilities.

## 🚀 Features

### 🏦 **Core Functionality**
- **Customer Management**: Complete customer onboarding with verification status tracking
- **Credit Score System**: Multi-bureau credit evaluation with automated rating assignment
- **Loan Products**: Configurable loan offerings with different terms and interest rates
- **Application Processing**: End-to-end loan application lifecycle management
- **Payment Scheduling**: Automated amortization calculations and payment tracking

### 🤖 **Intelligent Automation**
- **Smart Decision Engine**: Automated loan approval based on credit scores and risk assessment
- **Dynamic Interest Rates**: Credit score-based rate adjustments (750+ gets 0.5% discount, <600 gets 4% premium)
- **Risk Categorization**: Automatic classification into Low/Medium/High risk categories
- **Auto-Approval**: Instant approval for qualified low-risk applications under $25,000
- **Payment Processing**: Automatic late fee calculation and status updates

### 💻 **Modern UI/UX**
- **React-Based Interface**: Responsive, modern user interface built with React 18.2.0
- **Dashboard Analytics**: Real-time metrics and key performance indicators
- **Multi-Step Forms**: Guided customer and application entry processes
- **Status Tracking**: Visual status badges and progress indicators
- **Mobile Responsive**: Optimized for desktop and mobile devices

## 🏗️ Architecture

### **Technology Stack**
- **Platform**: ServiceNow (Fluent SDK 4.4.1)
- **Frontend**: React 18.2.0 + ReactDOM 18.2.0
- **Backend**: ServiceNow Glide APIs
- **Database**: ServiceNow Tables with proper relationships
- **Authentication**: ServiceNow Session Management

### **Data Model**
```
Customer (1) ──── (Many) Loan Applications
    │                      │
    │                      │
    └── (Many) Credit Scores   │
                              │
Loan Product (1) ──── (Many) Loan Applications
                              │
                              └── (Many) Payment Schedule
```

### **Key Components**

#### 📊 **Database Tables**
- `x_snc_cash_loan_wi_customer` - Customer information and verification status
- `x_snc_cash_loan_wi_loan_product` - Loan product configurations
- `x_snc_cash_loan_wi_credit_score` - Credit evaluations and ratings
- `x_snc_cash_loan_wi_loan_application` - Application lifecycle management
- `x_snc_cash_loan_wi_payment_schedule` - Payment tracking and schedules

#### ⚙️ **Business Rules**
- **Credit Score Rating Assignment** - Auto-assigns ratings based on scores
- **Loan Application Processor** - Eligibility checks and automated decisions
- **Payment Schedule Generator** - Creates amortization schedules
- **Payment Status Updater** - Manages payment status and late fees

#### 🎨 **UI Components**
- **Dashboard** - Metrics overview and quick actions
- **Customer Form** - New customer registration
- **Credit Score Form** - Credit evaluation entry
- **Loan Application Form** - Application submission
- **Applications List** - Status tracking and management

## 📦 Installation

### Prerequisites
- ServiceNow instance with Fluent SDK support
- Admin access to install scoped applications
- Node.js and npm (for development)

### Quick Start

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd cash-loan-application
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Build the Application**
   ```bash
   npm run build
   ```

4. **Deploy to ServiceNow**
   ```bash
   npm run deploy
   ```

### Manual Installation

1. Import the application XML or use ServiceNow Studio
2. Activate the `Cash Loan with Credit Score` application
3. Configure any necessary properties
4. Test the installation using the provided UI

## 🎯 Usage

### **Accessing the Application**

- **Main Interface**: `https://<instance>.service-now.com/x_snc_cash_loan_wi_loan_app.do`
- **Customer Management**: Navigate to Customer table or use the New Customer form
- **Loan Applications**: Access through the main interface or Applications list

### **Workflow Steps**

1. **Customer Onboarding**
   - Register new customers with personal and financial information
   - Email field is optional for flexible data entry
   - Employment status and income verification

2. **Credit Score Entry**
   - Add credit scores from major bureaus (Experian, Equifax, TransUnion)
   - Automatic rating assignment based on score ranges
   - Track verification methods and additional metrics

3. **Loan Application**
   - Select customer and loan product
   - Enter requested amount and terms
   - Automated processing with instant decisions for qualified applications

4. **Application Management**
   - Track application status in real-time
   - View risk categories and approval details
   - Monitor payment schedules and history

### **API Integration**

The application provides REST API access through ServiceNow Table APIs:

```javascript
// Get customers
GET /api/now/table/x_snc_cash_loan_wi_customer

// Create loan application
POST /api/now/table/x_snc_cash_loan_wi_loan_application
```

## 🔧 Configuration

### **Loan Products Setup**

Create loan products with the following parameters:
- Minimum/Maximum amounts
- Credit score requirements
- Base interest rates
- Terms and categories
- Collateral requirements

### **Risk Assessment Rules**

Customize risk assessment in `LoanCalculations.js`:
- Credit score thresholds
- Debt-to-income ratios
- Income verification requirements
- Auto-approval limits

### **Interest Rate Adjustments**

Configure rate adjustments based on credit scores:
- Excellent (750+): -0.5% discount
- Very Good (700-749): Base rate
- Good (650-699): +1% premium
- Fair (600-649): +2.5% premium
- Poor (<600): +4% premium

## 🧪 Testing

### **Sample Data**

The application includes sample data creation utilities:

```javascript
// Create initial loan products
import { createInitialLoanProducts } from './src/server/modules/InitialData.js';

// Create sample customer with credit score
import { createSampleCustomer } from './src/server/modules/InitialData.js';
```

### **Test Scenarios**

1. **Low-Risk Auto-Approval**: Customer with 750+ credit score, <$25K loan
2. **Manual Review**: Customer with 650 credit score, >$25K loan
3. **Rejection**: Customer below minimum credit requirements
4. **Payment Processing**: Test payment schedule generation and status updates

## 📱 Screenshots

*Note: Add actual screenshots of your application interface*

- Dashboard with metrics overview
- Customer registration form
- Loan application interface
- Applications management list

## 🤝 Contributing

### **Development Setup**

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add your feature'`
5. Push to the branch: `git push origin feature/your-feature`
6. Submit a pull request

### **Code Standards**

- Follow ServiceNow Fluent SDK best practices
- Use ESLint configuration provided
- Maintain React component modularity (100 lines max per component)
- Include comprehensive error handling
- Add JSDoc comments for complex functions

### **Testing Guidelines**

- Test all business rules with various scenarios
- Validate UI components across different screen sizes
- Ensure API endpoints handle errors gracefully
- Verify security and data validation

## 📄 License

This project is unlicensed. See the repository owner for usage permissions.

## 🆘 Support

### **Documentation**
- [ServiceNow Fluent SDK Documentation](https://developer.servicenow.com/)
- [React Documentation](https://reactjs.org/docs/)

### **Common Issues**

#### Build Errors
- Ensure all dependencies are installed: `npm install`
- Check ServiceNow instance connectivity
- Verify Fluent SDK version compatibility

#### Application Access
- Confirm user has proper roles assigned
- Check application scope activation
- Verify UI Page endpoints are accessible

#### Data Issues
- Review business rule execution logs
- Check table ACL permissions
- Validate field mappings and data types

### **Getting Help**

1. Check the [Issues](../../issues) section for known problems
2. Review ServiceNow community forums
3. Contact the development team

---

## 📊 Project Statistics

- **Total Files**: 90
- **Components**: 5 React components
- **Tables**: 5 database tables
- **Business Rules**: 4 automated rules
- **Lines of Code**: ~2000+ (estimated)

## 🏆 Acknowledgments

- ServiceNow Platform Team for Fluent SDK
- React team for the excellent framework
- Contributors and testers

---

**Built with ❤️ using ServiceNow Fluent SDK and React**