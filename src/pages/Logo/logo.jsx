import React, { useEffect } from 'react';
import './logo.css'; 

const LogoPage = ({ onLogoComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLogoComplete(); 
    }, 3000);  
    return () => clearTimeout(timer);
  }, [onLogoComplete]);

  return (
    <div className="logo-screen">
      <h1>QQ</h1> 
    </div>
  );
};

export default LogoPage;

