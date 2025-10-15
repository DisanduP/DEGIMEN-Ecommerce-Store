import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import CategoryNavigation from './components/CategoryNavigation';
import Breadcrumb from './components/Breadcrumb';
import ProductGrid from './components/ProductGrid';
import SearchResults from './components/SearchResults';
import ProductDetail from './components/ProductDetail';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Toast from './components/Toast';
import { CartProvider, useCart } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { products, getProductsByCategory, getCategoryById } from './data/mockData';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </AuthProvider>
  );
}

const AppContent: React.FC = () => {
  const { toastMessage, hideToast } = useCart();
  const { isAuthenticated, isLoading } = useAuth();

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // Redirect to registration if not authenticated
  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
      </Router>
    );
  }

  // Authenticated user - show full app
  return (
    <Router>
      <div className="App">
        <CategoryNavigation />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Breadcrumb />
                <ProductGrid
                  products={products}
                  categoryName="All Products"
                />
              </>
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <>
                <Breadcrumb />
                <CategoryPage />
              </>
            }
          />
          <Route
            path="/search"
            element={
              <>
                <Breadcrumb />
                <SearchResults />
              </>
            }
          />
          <Route
            path="/product/:productId"
            element={
              <>
                <Breadcrumb />
                <ProductDetail />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Breadcrumb />
                <About />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Breadcrumb />
                <Contact />
              </>
            }
          />
          <Route
            path="/register"
            element={<Navigate to="/" replace />}
          />
          <Route
            path="/login"
            element={<Navigate to="/" replace />}
          />
        </Routes>

        <Toast
          message={toastMessage || ''}
          isVisible={!!toastMessage}
          onClose={hideToast}
        />
      </div>
    </Router>
  );
};

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const category = getCategoryById(categoryId || '');
  const categoryProducts = getProductsByCategory(categoryId || '');

  if (!category) {
    return (
      <div className="error-container">
        <h1>Category Not Found</h1>
        <p>The category you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <ProductGrid
      products={categoryProducts}
      categoryName={category.name}
    />
  );
};

export default App;