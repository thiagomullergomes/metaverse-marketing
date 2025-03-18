import React from 'react';

export const Button = ({ 
  children, 
  className = '', 
  size = 'default', 
  variant = 'default', 
  ...props 
}) => {
  const sizeClasses = {
    'sm': 'px-3 py-1.5 text-sm',
    'default': 'px-4 py-2',
    'lg': 'px-6 py-3 text-lg',
  };
  
  const variants = {
    'default': 'bg-blue-600 hover:bg-blue-700 text-white',
    'ghost': 'bg-transparent hover:bg-gray-100 text-gray-700',
  };
  
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50';
  
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
