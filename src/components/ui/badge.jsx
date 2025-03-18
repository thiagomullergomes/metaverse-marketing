import React from 'react';

export const Badge = ({ 
  children, 
  className = '', 
  variant = 'default', 
  ...props 
}) => {
  const variants = {
    'default': 'bg-blue-100 text-blue-800',
    'secondary': 'bg-gray-100 text-gray-800',
    'success': 'bg-green-100 text-green-800',
    'destructive': 'bg-red-100 text-red-800',
    'purple': 'bg-purple-100 text-purple-800',
  };
  
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
