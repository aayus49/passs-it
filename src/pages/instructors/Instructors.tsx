import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, UserCog, Phone, Mail, Calendar, Clock, Star } from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import Button from '../../components/ui/Button';
import DataTable from '../../components/ui/DataTable';
import { Card, CardContent } from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Badge from '../../components/ui/Badge';

// Mock data for instructors
const MOCK_INSTRUCTORS = [
  { 
    id: 'ins-1', 
    name: 'David Smith', 
    email: 'david.s@passit.com', 
    phone: '07700 900234', 
    type: 'Full-time',
    experience: 7,
    rating: 4.8,
    activeStudents: 28,
    availability: 'high',
    status: 'active',
    joinDate: '2019-04-10'
  },
  { 
    id: 'ins-2', 
    name: 'Sarah Wilson', 
    email: 'sarah.w@passit.com', 
    phone: '07700 900235', 
    type: 'Full-time',
    experience: 5,
    rating: 4.7,
    activeStudents: 22,
    availability: 'medium',
    status: 'active',
    joinDate: '2020-06-15'
  },
  { 
    id: 'ins-3', 
    name: 'James Anderson', 
    email: 'james.a@passit.com', 
    phone: '07700 900236', 
    type: 'Part-time',
    experience: 9,
    rating: 4.9,
    activeStudents: 14,
    availability: 'low',
    status: 'active',
    joinDate: '2018-01-20'
  },
  { 
    id: 'ins-4', 
    name: 'Elizabeth Taylor', 
    email: 'elizabeth.t@passit.com', 
    phone: '07700 900237', 
    type: 'Part-time',
    experience: 3,
    rating: 4.5,
    activeStudents: 10,
    availability: 'medium',
    status: 'active',
    joinDate: '2022-03-05'
  },
  { 
    id: 'ins-5', 
    name: 'Richard Davies', 
    email: 'richard.d@passit.com', 
    phone: '07700 900238', 
    type: 'Full-time',
    experience: 6,
    rating: 4.6,
    activeStudents: 25,
    availability: 'high',
    status: 'on leave',
    joinDate: '2020-09-12'
  },
];

const Instructors = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterAvailability, setFilterAvailability] = useState('all');

  // Filter instructors based on search query and filters
  const filteredInstructors = MOCK_INSTRUCTORS.filter(instructor => {
    const matchesSearch = 
      instructor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      instructor.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      instructor.phone.includes(searchQuery);
    
    const matchesType = filterType === 'all' || instructor.type === filterType;
    const matchesAvailability = filterAvailability === 'all' || instructor.availability === filterAvailability;

    return matchesSearch && matchesType && matchesAvailability;
  });

  const handleRowClick = (instructor: typeof MOCK_INSTRUCTORS[0]) => {
    navigate(`/instructors/${instructor.id}`);
  };

  const columns = [
    {
      id: 'name',
      header: 'Instructor Name',
      cell: (instructor: typeof MOCK_INSTRUCTORS[0]) => (
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-secondary-100 flex items-center justify-center">
            <UserCog size={16} className="text-secondary-600" />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">{instructor.name}</div>
            <div className="text-xs text-gray-500">ID: {instructor.id}</div>
          </div>
        </div>
      ),
    },
    {
      id: 'contact',
      header: 'Contact Information',
      cell: (instructor: typeof MOCK_INSTRUCTORS[0]) => (
        <div>
          <div className="flex items-center text-sm text-gray-500">
            <Phone size={14} className="mr-1 text-gray-400" />
            {instructor.phone}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Mail size={14} className="mr-1 text-gray-400" />
            {instructor.email}
          </div>
        </div>
      ),
    },
    {
      id: 'type',
      header: 'Type',
      cell: (instructor: typeof MOCK_INSTRUCTORS[0]) => (
        <Badge 
          variant={instructor.type === 'Full-time' ? 'primary' : 'secondary'}
        >
          {instructor.type}
        </Badge>
      ),
    },
    {
      id: 'experience',
      header: 'Experience',
      cell: (instructor: typeof MOCK_INSTRUCTORS[0]) => (
        <div className="flex items-center">
          <span className="font-medium text-gray-900">{instructor.experience}</span>
          <span className="ml-1 text-gray-500">years</span>
        </div>
      ),
    },
    {
      id: 'rating',
      header: 'Rating',
      cell: (instructor: typeof MOCK_INSTRUCTORS[0]) => (
        <div className="flex items-center">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                size={14} 
                className={i < Math.floor(instructor.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
              />
            ))}
          </div>
          <span className="ml-2 text-sm font-medium text-gray-700">{instructor.rating}</span>
        </div>
      ),
    },
    {
      id: 'students',
      header: 'Active Students',
      cell: (instructor: typeof MOCK_INSTRUCTORS[0]) => (
        <div className="font-medium text-gray-900">{instructor.activeStudents}</div>
      ),
    },
    {
      id: 'availability',
      header: 'Availability',
      cell: (instructor: typeof MOCK_INSTRUCTORS[0]) => (
        <Badge 
          variant={
            instructor.availability === 'high' ? 'success' : 
            instructor.availability === 'medium' ? 'warning' : 
            'error'
          }
        >
          {instructor.availability.charAt(0).toUpperCase() + instructor.availability.slice(1)}
        </Badge>
      ),
    },
    {
      id: 'status',
      header: 'Status',
      cell: (instructor: typeof MOCK_INSTRUCTORS[0]) => (
        <Badge 
          variant={instructor.status === 'active' ? 'success' : 'warning'}
        >
          {instructor.status === 'active' ? 'Active' : 'On Leave'}
        </Badge>
      ),
    },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Instructors" 
        description="Manage your driving instructors and their assignments"
        actions={
          <Button icon={<Plus size={16} />}>
            Add New Instructor
          </Button>
        }
      />

      {/* Filters & Search */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Input
              placeholder="Search instructors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<Search size={16} className="text-gray-400" />}
            />
            <Select
              options={[
                { value: 'all', label: 'All Types' },
                { value: 'Full-time', label: 'Full-time' },
                { value: 'Part-time', label: 'Part-time' },
              ]}
              value={filterType}
              onChange={setFilterType}
            />
            <Select
              options={[
                { value: 'all', label: 'All Availability' },
                { value: 'high', label: 'High Availability' },
                { value: 'medium', label: 'Medium Availability' },
                { value: 'low', label: 'Low Availability' },
              ]}
              value={filterAvailability}
              onChange={setFilterAvailability}
            />
          </div>
        </CardContent>
      </Card>

      {/* Instructors Table */}
      <DataTable 
        data={filteredInstructors}
        columns={columns}
        keyExtractor={(instructor) => instructor.id}
        onRowClick={handleRowClick}
        emptyState={
          <div className="text-center">
            <UserCog size={48} className="mx-auto text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No instructors found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
            <Button className="mt-4" variant="primary">Add New Instructor</Button>
          </div>
        }
      />
    </div>
  );
};

export default Instructors;