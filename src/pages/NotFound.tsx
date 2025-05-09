import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-error-100">
        <AlertCircle size={48} className="text-error-600" />
      </div>
      <h1 className="mb-2 text-4xl font-bold text-gray-900">404 - Page Not Found</h1>
      <p className="mb-8 max-w-md text-gray-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button icon={<Home size={16} />}>Back to Dashboard</Button>
      </Link>
    </div>
  );
};

export default NotFound;