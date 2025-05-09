import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  disabled,
  ...props
}) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        {
          'bg-primary-500 text-white hover:bg-primary-600 focus-visible:ring-primary-500': variant === 'primary',
          'bg-secondary-500 text-white hover:bg-secondary-600 focus-visible:ring-secondary-500': variant === 'secondary',
          'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-500': variant === 'outline',
          'bg-transparent text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500': variant === 'ghost',
          'bg-error-500 text-white hover:bg-error-600 focus-visible:ring-error-500': variant === 'danger',
          'px-2.5 py-1.5 text-xs': size === 'sm',
          'px-4 py-2 text-sm': size === 'md',
          'px-5 py-2.5 text-base': size === 'lg',
          'w-full': fullWidth,
          'gap-2': !!icon,
          'flex-row-reverse': iconPosition === 'right',
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;