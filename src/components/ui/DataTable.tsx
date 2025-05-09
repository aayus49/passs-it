import React from 'react';
import { cn } from '../../utils/cn';

interface Column<T> {
  id: string;
  header: React.ReactNode;
  cell: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  keyExtractor: (item: T) => string;
  onRowClick?: (item: T) => void;
  isLoading?: boolean;
  emptyState?: React.ReactNode;
}

function DataTable<T>({
  data,
  columns,
  keyExtractor,
  onRowClick,
  isLoading = false,
  emptyState,
}: DataTableProps<T>) {
  if (isLoading) {
    return (
      <div className="table-container">
        <div className="flex h-64 items-center justify-center">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-primary-500"></div>
            <p className="mt-2 text-sm text-gray-500">Loading data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (data.length === 0 && emptyState) {
    return (
      <div className="table-container">
        <div className="flex h-64 items-center justify-center">
          {emptyState}
        </div>
      </div>
    );
  }

  return (
    <div className="table-container overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.id}
                  className={cn(
                    'px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500',
                    column.className
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((item) => (
              <tr
                key={keyExtractor(item)}
                className={cn('hover:bg-gray-50', onRowClick && 'cursor-pointer')}
                onClick={() => onRowClick && onRowClick(item)}
              >
                {columns.map((column) => (
                  <td
                    key={`${keyExtractor(item)}-${column.id}`}
                    className={cn('px-6 py-4 text-sm text-gray-700', column.className)}
                  >
                    {column.cell(item)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;