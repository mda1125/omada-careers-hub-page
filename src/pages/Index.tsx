
import React from 'react';

const Index = () => {
  return (
    <div 
      style={{
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        fontFamily: 'Inter, sans-serif', 
        textAlign: 'center', 
        padding: '20px'
      }}
    >
      <h1 
        style={{
          background: 'linear-gradient(to right, hsl(221, 83%, 53%), hsl(173, 80%, 40%))', 
          WebkitBackgroundClip: 'text', 
          color: 'transparent', 
          fontSize: '3rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem'
        }}
      >
        Omada Health Careers
      </h1>
      
      <p 
        style={{
          color: '#4a5568', 
          fontSize: '1.25rem', 
          maxWidth: '600px', 
          marginBottom: '2rem'
        }}
      >
        Join our mission-driven team transforming healthcare through innovative digital care.
      </p>
      
      <a 
        href="https://www.omadahealthcareers.com/careers" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          backgroundColor: 'hsl(221, 83%, 53%)', 
          color: 'white', 
          padding: '12px 32px', 
          borderRadius: '6px', 
          textDecoration: 'none', 
          fontWeight: '500', 
          transition: 'background-color 0.3s, transform 0.2s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'hsl(221, 83%, 60%)';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'hsl(221, 83%, 53%)';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        View Open Roles
      </a>
      
      <footer 
        style={{
          position: 'absolute', 
          bottom: '20px', 
          color: '#718096', 
          fontSize: '0.875rem'
        }}
      >
        © 2025 TheJobDude
      </footer>
    </div>
  );
};

export default Index;
