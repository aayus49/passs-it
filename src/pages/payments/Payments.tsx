import React from 'react';
import { CreditCard, Search, Filter, Calendar } from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import Button from '../../components/ui/Button';
import DataTable from '../../components/ui/DataTable';
import { Card, CardContent } from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Badge from '../../components/ui/Badge';

// Mock data for payments
const MOCK_PAYMENTS = [
  {
    id: 'pay-1',
    date: '2024-03-15',
    student: 'Emily Johnson',
    amount: 150,
    type: 'Lesson Package',
    method: 'Credit Card',
    status: 'paid',
    reference: 'INV-2024-001'
  },
  {
    id: 'pay-2',
    date: '2024-03-14',
    student: 'Michael Brown',
    amount: 35,
    type: 'Single Lesson',
    method: 'Bank Transfer',
    status: 'pending',
    reference: 'INV-2024-002'
  },
  {
    id: 'pay-3',
    date: '2024-03-13',
    student: 'Jessica Davis',
    amount: 250,
    type: 'Test Fee',
    method: 'Credit Card',
    status: 'paid',
    reference: 'INV-2024-003'
  },
  {
    id: 'pay-4',
    date: '2024-03-12',
    student: 'Thomas Taylor',
    amount: 500,
    type: 'Lesson Package',
    method: 'Bank Transfer',
    status: 'partial',
    reference: 'INV-2024-004'
  }
];

const Payments = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filterStatus, setFilterStatus] = React.useState('all');
  const [filterType, setFilterType] = React.useState('all');

  // Filter payments based on search query and filters
  const filteredPayments = MOCK_PAYMENTS.filter(payment => {
    const matchesSearch = 
      payment.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.reference.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || payment.status === filterStatus;
    const matchesType = filterType === 'all' || payment.type === filterType;

    return matchesSearch && matchesStatus && matchesType;
  });

  const columns = [
    {
      id: 'date',
      header: 'Date',
      cell: (payment: typeof MOCK_PAYMENTS[0]) => (
        <div className="flex items-center">
          <Calendar size={14} className="mr-2 text-gray-400" />
          {new Date(payment.date).toLocaleDateString('en-GB')}
        </div>
      ),
    },
    {
      id: 'reference',
      header: 'Reference',
      cell: (payment: typeof MOCK_PAYMENTS[0]) => (
        <span className="font-medium text-gray-900">{payment.reference}</span>
      ),
    },
    {
      id: 'student',
      header: 'Student',
      cell: (payment: typeof MOCK_PAYMENTS[0]) => payment.student,
    },
    {
      id: 'type',
      header: 'Payment Type',
      cell: (payment: typeof MOCK_PAYMENTS[0]) => (
        <Badge 
          variant={
            payment.type === 'Lesson Package' ? 'primary' : 
            payment.type === 'Single Lesson' ? 'secondary' : 
            'accent'
          }
        >
          {payment.type}
        </Badge>
      ),
    },
    {
      id: 'amount',
      header: 'Amount',
      cell: (payment: typeof MOCK_PAYMENTS[0]) => (
        <span className="font-medium text-gray-900">£{payment.amount}</span>
      ),
    },
    {
      id: 'method',
      header: 'Payment Method',
      cell: (payment: typeof MOCK_PAYMENTS[0]) => (
        <div className="flex items-center">
          <CreditCard size={14} className="mr-2 text-gray-400" />
          {payment.method}
        </div>
      ),
    },
    {
      id: 'status',
      header: 'Status',
      cell: (payment: typeof MOCK_PAYMENTS[0]) => (
        <Badge 
          variant={
            payment.status === 'paid' ? 'success' : 
            payment.status === 'pending' ? 'warning' : 
            'error'
          }
        >
          {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
        </Badge>
      ),
    },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Payments" 
        description="Track and manage student payments"
        actions={
          <Button icon={<CreditCard size={16} />}>
            Record Payment
          </Button>
        }
      />

      {/* Filters & Search */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Input
              placeholder="Search payments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<Search size={16} className="text-gray-400" />}
            />
            <Select
              options={[
                { value: 'all', label: 'All Statuses' },
                { value: 'paid', label: 'Paid' },
                { value: 'pending', label: 'Pending' },
                { value: 'partial', label: 'Partial' },
              ]}
              value={filterStatus}
              onChange={setFilterStatus}
            />
            <Select
              options={[
                { value: 'all', label: 'All Types' },
                { value: 'Lesson Package', label: 'Lesson Package' },
                { value: 'Single Lesson', label: 'Single Lesson' },
                { value: 'Test Fee', label: 'Test Fee' },
              ]}
              value={filterType}
              onChange={setFilterType}
            />
          </div>
        </CardContent>
      </Card>

      {/* Payments Table */}
      <DataTable 
        data={filteredPayments}
        columns={columns}
        keyExtractor={(payment) => payment.id}
        emptyState={
          <div className="text-center">
            <CreditCard size={48} className="mx-auto text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No payments found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
            <Button className="mt-4" variant="primary">Record Payment</Button>
          </div>
        }
      />
    </div>
  );
};

export default Payments;