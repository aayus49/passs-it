import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import { DataTable } from '../../components/ui/DataTable';

const Lessons = () => {
  return (
    <div className="p-6">
      <PageHeader 
        title="Lessons" 
        description="Manage and schedule lessons"
      />
      
      <div className="mt-6">
        <DataTable 
          columns={[
            { header: 'Date', accessorKey: 'date' },
            { header: 'Time', accessorKey: 'time' },
            { header: 'Student', accessorKey: 'student' },
            { header: 'Instructor', accessorKey: 'instructor' },
            { header: 'Status', accessorKey: 'status' }
          ]}
          data={[]}
        />
      </div>
    </div>
  );
};

export default Lessons;