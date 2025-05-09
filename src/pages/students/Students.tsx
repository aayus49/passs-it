import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Search, Filter, Users, Phone, Mail, Calendar, Clock } from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import Button from '../../components/ui/Button';
import DataTable from '../../components/ui/DataTable';
import { Card, CardContent } from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Badge from '../../components/ui/Badge';

// Mock data for students
const MOCK_STUDENTS = [
  { 
    id: '1', 
    name: 'Emily Johnson', 
    email: 'emily.j@example.com', 
    phone: '07700 900123', 
    courseType: 'Standard', 
    instructor: 'David Smith', 
    lessonsCompleted: 12,
    lessonsRemaining: 8,
    status: 'active',
    joinDate: '2023-10-15'
  },
  { 
    id: '2', 
    name: 'Michael Brown', 
    email: 'michael.b@example.com', 
    phone: '07700 900124', 
    courseType: 'Intensive', 
    instructor: 'Sarah Wilson', 
    lessonsCompleted: 18,
    lessonsRemaining: 2,
    status: 'active',
    joinDate: '2023-09-05'
  },
  { 
    id: '3', 
    name: 'Jessica Davis', 
    email: 'jessica.d@example.com', 
    phone: '07700 900125', 
    courseType: 'Pass Plus', 
    instructor: 'James Anderson', 
    lessonsCompleted: 28,
    lessonsRemaining: 0,
    status: 'completed',
    joinDate: '2023-08-20'
  },
  { 
    id: '4', 
    name: 'Thomas Taylor', 
    email: 'thomas.t@example.com', 
    phone: '07700 900126', 
    courseType: 'Standard', 
    instructor: 'David Smith', 
    lessonsCompleted: 4,
    lessonsRemaining: 16,
    status: 'active',
    joinDate: '2023-11-10'
  },
  { 
    id: '5', 
    name: 'Olivia Wilson', 
    email: 'olivia.w@example.com', 
    phone: '07700 900127', 
    courseType: 'Introductory', 
    instructor: 'Sarah Wilson', 
    lessonsCompleted: 2,
    lessonsRemaining: 0,
    status: 'inactive',
    joinDate: '2023-11-28'
  },
];

const Students = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCourse, setFilterCourse] = useState('all');

  // Filter students based on search query and filters
  const filteredStudents = MOCK_STUDENTS.filter(student => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.phone.includes(searchQuery);
    
    const matchesStatus = filterStatus === 'all' || student.status === filterStatus;
    const matchesCourse = filterCourse === 'all' || student.courseType === filterCourse;

    return matchesSearch && matchesStatus && matchesCourse;
  });

  const handleRowClick = (student: typeof MOCK_STUDENTS[0]) => {
    navigate(`/students/${student.id}`);
  };

  const columns = [
    {
      id: 'name',
      header: 'Student Name',
      cell: (student: typeof MOCK_STUDENTS[0]) => (
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200 flex items-center justify-center">
            <Users size={16} className="text-gray-500" />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">{student.name}</div>
            <div className="text-xs text-gray-500">ID: {student.id}</div>
          </div>
        </div>
      ),
    },
    {
      id: 'contact',
      header: 'Contact Information',
      cell: (student: typeof MOCK_STUDENTS[0]) => (
        <div>
          <div className="flex items-center text-sm text-gray-500">
            <Phone size={14} className="mr-1 text-gray-400" />
            {student.phone}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Mail size={14} className="mr-1 text-gray-400" />
            {student.email}
          </div>
        </div>
      ),
    },
    {
      id: 'courseType',
      header: 'Course Type',
      cell: (student: typeof MOCK_STUDENTS[0]) => (
        <Badge 
          variant={
            student.courseType === 'Standard' ? 'primary' : 
            student.courseType === 'Intensive' ? 'secondary' : 
            student.courseType === 'Pass Plus' ? 'success' : 
            'accent'
          }
        >
          {student.courseType}
        </Badge>
      ),
    },
    {
      id: 'instructor',
      header: 'Instructor',
      cell: (student: typeof MOCK_STUDENTS[0]) => student.instructor,
    },
    {
      id: 'progress',
      header: 'Lesson Progress',
      cell: (student: typeof MOCK_STUDENTS[0]) => (
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-500">
              {student.lessonsCompleted} of {student.lessonsCompleted + student.lessonsRemaining} lessons
            </span>
            <span className="text-xs font-medium text-primary-600">
              {Math.round(student.lessonsCompleted / (student.lessonsCompleted + student.lessonsRemaining) * 100)}%
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200">
            <div 
              className="h-2 rounded-full bg-primary-500" 
              style={{ 
                width: `${Math.round(student.lessonsCompleted / (student.lessonsCompleted + student.lessonsRemaining) * 100)}%` 
              }}
            ></div>
          </div>
        </div>
      ),
    },
    {
      id: 'status',
      header: 'Status',
      cell: (student: typeof MOCK_STUDENTS[0]) => (
        <Badge 
          variant={
            student.status === 'active' ? 'success' : 
            student.status === 'completed' ? 'primary' : 
            'warning'
          }
        >
          {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
        </Badge>
      ),
    },
    {
      id: 'joinDate',
      header: 'Join Date',
      cell: (student: typeof MOCK_STUDENTS[0]) => (
        <div className="flex items-center">
          <Calendar size={14} className="mr-1 text-gray-400" />
          {new Date(student.joinDate).toLocaleDateString('en-GB')}
        </div>
      ),
    },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Students" 
        description="Manage student profiles and their learning progress"
        actions={
          <Button icon={<Plus size={16} />}>
            Add New Student
          </Button>
        }
      />

      {/* Filters & Search */}
      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Input
              placeholder="Search students..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              icon={<Search size={16} className="text-gray-400" />}
            />
            <Select
              options={[
                { value: 'all', label: 'All Statuses' },
                { value: 'active', label: 'Active' },
                { value: 'completed', label: 'Completed' },
                { value: 'inactive', label: 'Inactive' },
              ]}
              value={filterStatus}
              onChange={setFilterStatus}
            />
            <Select
              options={[
                { value: 'all', label: 'All Course Types' },
                { value: 'Standard', label: 'Standard' },
                { value: 'Intensive', label: 'Intensive' },
                { value: 'Introductory', label: 'Introductory' },
                { value: 'Pass Plus', label: 'Pass Plus' },
              ]}
              value={filterCourse}
              onChange={setFilterCourse}
            />
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <DataTable 
        data={filteredStudents}
        columns={columns}
        keyExtractor={(student) => student.id}
        onRowClick={handleRowClick}
        emptyState={
          <div className="text-center">
            <Users size={48} className="mx-auto text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No students found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
            <Button className="mt-4" variant="primary">Add New Student</Button>
          </div>
        }
      />
    </div>
  );
};

export default Students;