'use client';
import React from 'react';

interface CheckBoxProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  id?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
}

const CheckBox: React.FC<CheckBoxProps> = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  className = '',
  size = 'md',
  variant = 'primary'
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange && !disabled) {
      onChange(e.target.checked);
    }
  };

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const variants = {
    primary: 'text-blue-600 focus:ring-blue-500',
    secondary: 'text-gray-600 focus:ring-gray-500',
    success: 'text-green-600 focus:ring-green-500',
    warning: 'text-yellow-600 focus:ring-yellow-500',
    danger: 'text-red-600 focus:ring-red-500'
  };

  const labelSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className={`
          ${sizes[size]}
          ${variants[variant]}
          bg-gray-100
          border-gray-300
          rounded
          focus:ring-2
          focus:ring-opacity-50
          transition-all
          duration-200
          ease-in-out
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50'}
        `.trim().replace(/\s+/g, ' ')}
      />
      {label && (
        <label
          htmlFor={id}
          className={`
            ml-2
            ${labelSizes[size]}
            text-gray-700
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `.trim().replace(/\s+/g, ' ')}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckBox;