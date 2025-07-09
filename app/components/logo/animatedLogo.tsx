import React, { useState, useEffect } from 'react';

export const AnimatedLogo = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Main logo text */}
        <div className="text-3xl font-bold tracking-wider text-gray-900 transition-all duration-500 group-hover:text-violet-600">
          <span className="inline-block transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-2">
            b
          </span>
          <span className="inline-block transition-transform duration-300 delay-75 group-hover:scale-110 group-hover:rotate-2">
            t
          </span>
        </div>
        
        {/* Animated underline */}
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 transition-all duration-500 group-hover:w-full"></div>
        
        {/* Floating dot animation */}
        <div className={`absolute -top-1 -right-1 w-2 h-2 bg-violet-500 rounded-full transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}></div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      </div>
    </div>
  );
};

