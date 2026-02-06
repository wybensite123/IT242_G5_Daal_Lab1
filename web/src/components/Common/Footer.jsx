import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p>&copy; {currentYear} IT342 User Authentication System. All rights reserved.</p>
      <p>Lab 2: User Registration and Authentication</p>
    </footer>
  );
};

export default Footer;