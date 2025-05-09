import React from 'react';
import { cn } from '../../utils/cn';
import { Card } from '../ui/Card';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, trend, className }) => {
  return (
    <Card className={cn('overflow-hidden', className)}>
      <div className="flex items-center p-6">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
          {trend && (
            <div className="mt-1 flex items-center text-sm">
              <span
                className={cn(
                  'font-medium',
                  trend.isPositive ? 'text-success-600' : 'text-error-600'
                )}
              >
                {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
              </span>
              <span className="ml-1 text-gray-500">from last month</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;