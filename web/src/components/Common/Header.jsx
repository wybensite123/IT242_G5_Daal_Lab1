import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../../services/authService';

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = authService.isAuthenticated();
  const user = authService.getCurrentUser();

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">
          IT342 Auth System
        </Link>
        
        <div className="nav-links">
          {isAuthenticated ? (
            <>
              <span>Welcome, {user?.firstName}!</span>
              <Link to="/dashboard" className="link">Dashboard</Link>
              <button onClick={handleLogout} className="btn btn-logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="link">Login</Link>
              <Link to="/register" className="link">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;