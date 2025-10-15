import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { categories } from '../data/mockData';
import SearchBar from './SearchBar';
import CartIcon from './CartIcon';
import CartSidebar from './CartSidebar';
import { useAuth } from '../context/AuthContext';
import Modal from './Modal';
import './CategoryNavigation.css';

const CategoryNavigation: React.FC = () => {
  const location = useLocation();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { logout } = useAuth();

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = () => {
    logout();
    setShowLogoutModal(false);
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  return (
    <>
      <nav className="category-navigation">
        <div className="category-nav-container">
          <div className="store-brand">
            <Link to="/" className="store-name">
              DEGIMEN
            </Link>
          </div>
          <SearchBar />
          <div className="nav-links">
            <Link to="/" className="category-nav-item home-link">
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.id}`}
                className={`category-nav-item ${
                  location.pathname === `/category/${category.id}` ? 'active' : ''
                }`}
              >
                {category.name}
              </Link>
            ))}
            <Link to="/about" className={`category-nav-item ${
              location.pathname === '/about' ? 'active' : ''
            }`}>
              About
            </Link>
            <Link to="/contact" className={`category-nav-item ${
              location.pathname === '/contact' ? 'active' : ''
            }`}>
              Contact
            </Link>
            <div className="user-section">
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
            <CartIcon onClick={handleCartClick} />
          </div>
        </div>
      </nav>

      <CartSidebar isOpen={isCartOpen} onClose={handleCartClose} />

      <Modal
        isOpen={showLogoutModal}
        onClose={handleCancelLogout}
        onConfirm={handleConfirmLogout}
        title="Confirm Logout"
        message="Are you sure you want to logout? You'll need to sign in again to access your account."
        confirmText="Logout"
        cancelText="Cancel"
      />
    </>
  );
};

export default CategoryNavigation;
