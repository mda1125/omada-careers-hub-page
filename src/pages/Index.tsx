
import React from 'react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl mx-auto text-center">
          {/* Logo text */}
          <h1 className="text-4xl md:text-5xl font-bold logo-gradient mb-6">
            Omada Health Careers
          </h1>
          
          {/* Message */}
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Join our mission-driven team transforming healthcare through innovative digital care.
          </p>
          
          {/* CTA Button */}
          <a 
            href="https://www.omadahealthcareers.com/careers" 
            className="omada-button inline-block"
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="View open roles at Omada Health"
          >
            View Open Roles
          </a>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm">
        <p>© 2025 TheJobDude</p>
      </footer>
    </div>
  );
};

export default Index;
