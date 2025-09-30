import React, { useState, useEffect } from 'react';

const Preloader = ({ isVisible }) => {
  const [loadingText, setLoadingText] = useState('Powering Electrical Infrastructure...');

  const loadingMessages = [
    'Powering Electrical Infrastructure...',
    'Engineering Power Solutions...',
    'Building Smart Grid Systems...',
    'Designing Renewable Energy...'
  ];

  useEffect(() => {
    if (!isVisible) return;
    
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % loadingMessages.length;
      setLoadingText(loadingMessages[index]);
    }, 750); // Change message every 750ms

    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 animate-pulse"></div>
      
      {/* Main logo container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Logo with zoom-in animation */}
        <div className="animate-zoom-in">
          <img 
            src="/logos/logo.svg" 
            alt="Blue Stud Engineering Limited" 
            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-2xl"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
            style={{ 
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              WebkitUserDrag: 'none'
            }}
          />
        </div>
        
        {/* Loading text with fade animation */}
        <div className="mt-8 animate-pulse">
          <p className="text-lg sm:text-xl font-semibold text-blue-900 text-center">
            Blue Stud Engineering Limited
          </p>
          <p className="text-sm text-gray-500 text-center mt-2">
            {loadingText}
          </p>
        </div>
        
        {/* Loading dots */}
        <div className="flex space-x-1 mt-6">
          <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-2 h-2 bg-blue-900 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;