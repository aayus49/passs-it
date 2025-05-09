import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import { Calendar as CalendarIcon } from 'lucide-react';

export default function Calendar() {
  return (
    <div className="p-6">
      <PageHeader
        title="Calendar"
        description="View and manage your schedule"
        icon={CalendarIcon}
      />
      
      <div className="mt-6">
        {/* Calendar content will be implemented later */}
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-500">Calendar view coming soon...</p>
        </div>
      </div>
    </div>
  );
}