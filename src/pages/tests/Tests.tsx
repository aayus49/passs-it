import React from 'react';
import { ClipboardCheck, Search, Filter, Calendar, CheckCircle, XCircle } from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import Button from '../../components/ui/Button';
import DataTable from '../../components/ui/DataTable';
import { Card, CardContent } from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Badge from '../../components/ui/Badge';

// Mock data for tests
const MOCK_TESTS = [
  {
    id: 'test-1',
    student: 'Emily Johnson',
    type: 'Theory',
    date: '2024-03-20',
    time: '10:00 AM',
    center: 'London Theory Test Centre',
    instructor: 'David Smith',
    status: 'scheduled',
    previousAttempts: 0
  },
  {
    id: 'test-2',
    student: 'Michael Brown',
    type: 'Practical',
    date: '2024-03-18',
    time: '2:00 PM',
    center: 'Croydon Test Centre',
    instructor: 'Sarah Wilson',
    status: 'passed',
    previousAttempts: 1
  },
  {
    id: 'test-3',
    student: 'Jessica Davis',
    type: 'Theory',
    date: '2024-03-15',
    time: '11:30 AM',
    center: 'Birmingham Theory Test Centre',
    instructor: 'James Anderson',
    status: 'failed',
    previousAttempts: 2
  }
];

const Tests = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filterType, setFilterType] = React.useState('all');
  const [filterStatus, setFilterStatus] = React.useState('all');

  // Filter tests based on search query and filters
  const filteredTests = MOCK_TESTS.filter(test => {
    const matchesSearch = 
      test.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
      test.center.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = filterType === 'all' || test.type === filterType;
    const matchesStatus = filterStatus === 'all' || test.status === filterStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  const columns = [
    {
      id: 'student',
      header: 'Student',
      cell: (test: typeof MOCK_TESTS[0]) => (
        <div className="font-medium text-gray-900">{test.student}</div>
      ),
    },
    {
      id: 'type',
      header: 'Test Type',
      cell: (test: typeof MOCK_TESTS[0]) => (
        <Badge 
          variant={test.type === 'Theory' ? 'secondary' : 'primary'}
        >
          {test.type}
        </Badge>
      ),
    },
    {
      id: 'datetime',
      header: 'Date & Time',
      cell: (test: typeof MOCK_TESTS[0]) => (
        <div className="space-y-1">
          <div className="flex items-center">
            <Calendar size={14} className="mr-1 text-gray-400" />
            {new Date(test.date).toLocaleDateString('en-GB')}
          </div>
          <div className="text-sm text-gray-500">{test.time}</div>
        </div>
      ),
    },
    {
      id: 'center',
      header: 'Test Centre',
      cell: (test: typeof MOCK_TESTS[0]) => test.center,
    },
    {
      id: 'instructor',
      header: 'Instructor',
      cell: (test: typeof MOCK_TESTS[0]) => test.instructor,
    },
    {
      id: 'attempts',
      header: 'Previous Attempts',
      cell: (test: typeof MOCK_TESTS[0]) => (
        <Badge variant={test.previousAttempts === 0 ? 'success' : 'warning'}>
          {test.previousAttempts}
        </Badge>
      ),
    },
    {
      id: 'status',
      header: 'Status',
      cell: (test: typeof MOCK_TESTS[0]) => (
        <div className="flex items-center">
          {test.status === 'passed' && (
            <Badge variant="success" className="flex items-center">
              <CheckCircle size={14} className="mr-1" />
              Passed
            </Badge>
          )}
          {test.status === 'failed' && (
            <Badge variant="error" className="flex items-center">
              <XCircle size={14} className="mr-1" />
              Failed
            </Badge>
          )}
          {test.status === 'scheduled' && (
            <Badge variant="warning" className="flex items-center">
              <Calendar size={14} className="mr-1" />
              Scheduled
            </Badge>
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Tests" 
        description="Manage student theory and practical tests"
        actions={
          <Button icon={<ClipboardCheck size={16} />}>
            Schedule Test
          </Button>
        }
      />

      {/* Filters & Search */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Input
              placeholder="Search tests..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<Search size={16} className="text-gray-400" />}
            />
            <Select
              options={[
                { value: 'all', label: 'All Types' },
                { value: 'Theory', label: 'Theory Test' },
                { value: 'Practical', label: 'Practical Test' },
              ]}
              value={filterType}
              onChange={setFilterType}
            />
            <Select
              options={[
                { value: 'all', label: 'All Statuses' },
                { value: 'scheduled', label: 'Scheduled' },
                { value: 'passed', label: 'Passed' },
                { value: 'failed', label: 'Failed' },
              ]}
              value={filterStatus}
              onChange={setFilterStatus}
            />
          </div>
        </CardContent>
      </Card>

      {/* Tests Table */}
      <DataTable 
        data={filteredTests}
        columns={columns}
        keyExtractor={(test) => test.id}
        emptyState={
          <div className="text-center">
            <ClipboardCheck size={48} className="mx-auto text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No tests found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
            <Button className="mt-4" variant="primary">Schedule Test</Button>
          </div>
        }
      />
    </div>
  );
};

export default Tests;