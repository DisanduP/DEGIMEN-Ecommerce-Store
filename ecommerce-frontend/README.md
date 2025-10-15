# E-Commerce Store Frontend

A modern, responsive e-commerce store built with React 18, TypeScript, and Material Design 3.

## Features

- 🛍️ Product browsing and search
- 📱 Responsive design with Material Design 3
- 🔐 User authentication (registration/login)
- 🛒 Shopping cart with persistent storage
- 🎨 Professional UI with custom modals
- 🚀 Optimized for Azure Static Web Apps deployment

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Routing**: React Router DOM
- **UI**: Material Design 3 with custom theme
- **State Management**: React Context API
- **Styling**: CSS Modules
- **Build Tool**: Webpack
- **Deployment**: Azure Static Web Apps

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Azure Deployment

### Prerequisites

- Azure account with active subscription
- GitHub repository

### Deployment Steps

1. **Create Azure Static Web App**
   - Go to [Azure Portal](https://portal.azure.com)
   - Search for "Static Web Apps"
   - Click "Create"
   - Fill in the details:
     - **Subscription**: Your Azure subscription
     - **Resource Group**: Create new or select existing
     - **Name**: Choose a unique name for your app
     - **Plan**: Free tier is fine for demo
     - **Region**: Select closest region
     - **Deployment Source**: GitHub
     - **Organization**: Your GitHub username/org
     - **Repository**: Your repository name
     - **Branch**: `main`
     - **Build Presets**: Custom
     - **App location**: `/ecommerce-frontend`
     - **API location**: Leave empty
     - **Output location**: `build`

2. **Configure GitHub Secrets**
   - After creating the Static Web App, Azure will provide an API token
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add a new repository secret:
     - **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
     - **Value**: The API token from Azure

3. **Deploy**
   - Push this code to your GitHub repository's `main` branch
   - Azure will automatically build and deploy your app
   - Check the Actions tab in GitHub to monitor deployment

4. **Access Your App**
   - Once deployed, you'll get a URL like: `https://[your-app-name].azurestaticapps.net`
   - The app will be live and accessible worldwide!

## Project Structure

```
ecommerce-frontend/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── CategoryNavigation.tsx
│   │   ├── ProductGrid.tsx
│   │   ├── ProductDetail.tsx
│   │   ├── CartSidebar.tsx
│   │   ├── Modal.tsx
│   │   └── Auth/
│   ├── contexts/
│   │   ├── AuthContext.tsx
│   │   └── CartContext.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── ProductDetailPage.tsx
│   ├── styles/
│   │   └── theme.css
│   ├── App.tsx
│   └── index.tsx
├── build/ (generated)
├── staticwebapp.config.json
└── .github/workflows/
    └── azure-static-web-apps.yml
```

## Features Overview

### Authentication
- User registration with form validation
- Login/logout functionality
- Persistent sessions using localStorage

### Shopping Cart
- Add/remove products
- Persistent cart across sessions
- Empty cart confirmation modal

### UI/UX
- Material Design 3 components
- Custom blue/orange color scheme
- Responsive design for all devices
- Custom confirmation modals instead of browser alerts

## Development Notes

- All authentication is demo-only (stored in localStorage)
- Product data is hardcoded for demonstration
- Ready for integration with real backend APIs
- Fully optimized for production deployment
