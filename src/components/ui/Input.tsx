import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  error?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  icon,
  error,
  className,
  fullWidth = true,
  id,
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={cn('form-control', fullWidth && 'w-full')}>
      {label && (
        <label htmlFor={inputId} className="label">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          className={cn(
            'input',
            icon && 'pl-10',
            error && 'border-error-500 focus:border-error-500 focus:ring-error-500',
            fullWidth && 'w-full',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-sm text-error-500">{error}</p>}
    </div>
  );
};

export default Input;