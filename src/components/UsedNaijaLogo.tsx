import React from 'react';

interface UsedNaijaLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const UsedNaijaLogo: React.FC<UsedNaijaLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light'
}) => {
  const sizeClasses = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-10',
    lg: 'h-10 sm:h-12',
  };

  return (
    <div className={`inline-flex items-center shrink-0 select-none ${className}`}>
      <img
        src="/usednaija-logo.svg"
        alt="UsedNaija Logo"
        className={`${sizeClasses[size]} w-auto object-contain ${
          variant === 'dark' ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
  );
};

