import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, UserCog, Phone, Mail, MapPin, Calendar, Clock, Car, Award, CreditCard, 
  FileText, BookOpen, CheckCircle, XCircle, AlertCircle, Edit, Trash, Users, Star
} from 'lucide-react';
import Button from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';

// Mock instructor data
const MOCK_INSTRUCTOR = {
  id: 'ins-1',
  name: 'David Smith',
  email: 'david.s@passit.com',
  phone: '07700 900234',
  address: '45 Oak Street, London, E1 6AN',
  type: 'Full-time',
  licenseNumber: 'DSA12345678',
  experience: 7,
  rating: 4.8,
  specializations: ['Manual', 'Automatic', 'Pass Plus', 'Motorway Training'],
  joinDate: '2019-04-10',
  availability: 'high',
  status: 'active',
  bio: 'David is a patient and experienced driving instructor with over 7 years in the industry. He specializes in helping nervous drivers build confidence and has an excellent pass rate.',
  activeStudents: [
    { id: '1', name: 'Emily Johnson', progress: 60, nextLesson: '2024-03-17' },
    { id: '2', name: 'Michael Brown', progress: 90, nextLesson: '2024-03-15' },
    { id: '4', name: 'Thomas Taylor', progress: 20, nextLesson: '2024-03-16' },
    { id: '7', name: 'Sophie Martin', progress: 40, nextLesson: '2024-03-18' },
    { id: '9', name: 'Oliver Lewis', progress: 75, nextLesson: '2024-03-19' },
  ],
  schedule: [
    {
      id: 'sch-1',
      date: '2024-03-15',
      slots: [
        { id: 'slot-1', time: '09:00 - 10:00', student: 'Michael Brown', type: 'Standard' },
        { id: 'slot-2', time: '10:30 - 11:30', student: 'Oliver Lewis', type: 'Standard' },
        { id: 'slot-3', time: '13:00 - 15:00', student: 'Sophie Martin', type: 'Intensive' },
        { id: 'slot-4', time: '16:00 - 17:00', student: null, type: null }
      ]
    },
    {
      id: 'sch-2',
      date: '2024-03-16',
      slots: [
        { id: 'slot-5', time: '09:00 - 10:00', student: 'Thomas Taylor', type: 'Standard' },
        { id: 'slot-6', time: '10:30 - 11:30', student: null, type: null },
        { id: 'slot-7', time: '13:00 - 14:00', student: null, type: null },
        { id: 'slot-8', time: '15:00 - 16:00', student: 'New Inquiry', type: 'Introductory' }
      ]
    },
    {
      id: 'sch-3',
      date: '2024-03-17',
      slots: [
        { id: 'slot-9', time: '10:00 - 11:00', student: 'Emily Johnson', type: 'Standard' },
        { id: 'slot-10', time: '12:00 - 13:00', student: null, type: null },
        { id: 'slot-11', time: '14:00 - 15:00', student: null, type: null },
        { id: 'slot-12', time: '16:00 - 17:00', student: null, type: null }
      ]
    }
  ],
  carDetails: {
    make: 'Ford',
    model: 'Focus',
    year: 2022,
    transmission: 'Manual',
    registrationNumber: 'AB12 CDE',
    lastService: '2023-12-10'
  },
  performance: {
    passRate: 87,
    averageLessonsToPass: 24,
    studentSatisfaction: 94,
    totalTestsPassed: 112
  },
  reviews: [
    {
      id: 'rev-1',
      student: 'Emily Johnson',
      date: '2024-02-10',
      rating: 5,
      comment: 'David is an excellent instructor. Very patient and clearly explains everything.'
    },
    {
      id: 'rev-2',
      student: 'Michael Brown',
      date: '2024-01-28',
      rating: 5,
      comment: 'I passed my test first time thanks to David\'s teaching methods!'
    },
    {
      id: 'rev-3',
      student: 'Jessica Davis',
      date: '2023-12-15',
      rating: 4,
      comment: 'Very professional and knowledgeable instructor. Recommend highly!'
    }
  ]
};

const InstructorDetail = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, this would fetch the instructor data
  const instructor = MOCK_INSTRUCTOR;

  if (!instructor) {
    return <div>Instructor not found</div>;
  }

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/instructors" className="mr-4 flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{instructor.name}</h1>
            <p className="text-sm text-gray-500">Instructor ID: {instructor.id}</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            icon={<Edit size={16} />}
          >
            Edit Profile
          </Button>
          <Button 
            variant="danger" 
            icon={<Trash size={16} />}
          >
            Remove
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left column - Instructor Information */}
        <div className="space-y-6 lg:col-span-1">
          {/* Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <div className="h-24 w-24 rounded-full bg-secondary-100 flex items-center justify-center">
                  <UserCog size={48} className="text-secondary-600" />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < Math.floor(instructor.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700">{instructor.rating} / 5</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-gray-500" />
                  <span className="text-sm text-gray-700">{instructor.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-gray-500" />
                  <span className="text-sm text-gray-700">{instructor.email}</span>
                </div>
                <div className="flex items-start">
                  <MapPin size={16} className="mr-2 mt-0.5 text-gray-500" />
                  <span className="text-sm text-gray-700">{instructor.address}</span>
                </div>
                <div className="flex items-center">
                  <FileText size={16} className="mr-2 text-gray-500" />
                  <span className="text-sm text-gray-700">
                    License: {instructor.licenseNumber}
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2 text-gray-500" />
                  <span className="text-sm text-gray-700">
                    Joined: {new Date(instructor.joinDate).toLocaleDateString('en-GB')}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-gray-200 bg-gray-50">
              <div className="flex w-full flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Type</span>
                  <Badge variant="primary">{instructor.type}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Experience</span>
                  <span className="text-sm font-medium text-gray-900">{instructor.experience} years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Availability</span>
                  <Badge 
                    variant={
                      instructor.availability === 'high' ? 'success' : 
                      instructor.availability === 'medium' ? 'warning' : 
                      'error'
                    }
                  >
                    {instructor.availability.charAt(0).toUpperCase() + instructor.availability.slice(1)}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Status</span>
                  <Badge variant={instructor.status === 'active' ? 'success' : 'warning'}>
                    {instructor.status === 'active' ? 'Active' : 'On Leave'}
                  </Badge>
                </div>
              </div>
            </CardFooter>
          </Card>

          {/* Car Details */}
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-center">
                <Car size={48} className="text-gray-400" />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Make & Model:</span>
                  <span className="text-gray-900">{instructor.carDetails.make} {instructor.carDetails.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Year:</span>
                  <span className="text-gray-900">{instructor.carDetails.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Transmission:</span>
                  <span className="text-gray-900">{instructor.carDetails.transmission}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Registration:</span>
                  <span className="text-gray-900">{instructor.carDetails.registrationNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700">Last Service:</span>
                  <span className="text-gray-900">{new Date(instructor.carDetails.lastService).toLocaleDateString('en-GB')}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md bg-gray-50 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Pass Rate</span>
                  <span className="text-sm font-semibold text-success-600">{instructor.performance.passRate}%</span>
                </div>
                <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
                  <div 
                    className="h-2 rounded-full bg-success-500" 
                    style={{ width: `${instructor.performance.passRate}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-md bg-gray-50 p-3">
                  <div className="text-xs text-gray-500">Avg. Lessons to Pass</div>
                  <div className="mt-1 text-xl font-semibold text-gray-900">{instructor.performance.averageLessonsToPass}</div>
                </div>
                <div className="rounded-md bg-gray-50 p-3">
                  <div className="text-xs text-gray-500">Student Satisfaction</div>
                  <div className="mt-1 text-xl font-semibold text-success-600">{instructor.performance.studentSatisfaction}%</div>
                </div>
                <div className="col-span-2 rounded-md bg-gray-50 p-3">
                  <div className="text-xs text-gray-500">Total Tests Passed</div>
                  <div className="mt-1 text-xl font-semibold text-gray-900">{instructor.performance.totalTestsPassed}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right columns - Students & Schedule */}
        <div className="space-y-6 lg:col-span-2">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Button 
              className="h-full w-full flex-col py-6" 
              icon={<Users size={24} />}
              variant="outline"
            >
              <span className="mt-2">Assign Student</span>
            </Button>
            <Button 
              className="h-full w-full flex-col py-6" 
              icon={<Calendar size={24} />}
              variant="outline"
            >
              <span className="mt-2">Update Schedule</span>
            </Button>
            <Button 
              className="h-full w-full flex-col py-6" 
              icon={<CreditCard size={24} />}
              variant="outline"
            >
              <span className="mt-2">Process Payment</span>
            </Button>
          </div>

          {/* Bio */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>About</CardTitle>
              <Button variant="ghost" size="sm" icon={<Edit size={14} />}>
                Edit
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{instructor.bio}</p>
              
              <div className="mt-4">
                <h4 className="mb-2 text-sm font-medium text-gray-900">Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {instructor.specializations.map(spec => (
                    <Badge key={spec} variant="secondary">{spec}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Schedule */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Upcoming Schedule</CardTitle>
              <Button variant="outline" size="sm">View Full Calendar</Button>
            </CardHeader>
            <div className="overflow-x-auto">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Time Slot</th>
                    {instructor.schedule.map(day => (
                      <th key={day.id} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                        {new Date(day.date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {[0, 1, 2, 3].map(slotIndex => (
                    <tr key={slotIndex} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {instructor.schedule[0].slots[slotIndex].time}
                      </td>
                      {instructor.schedule.map(day => {
                        const slot = day.slots[slotIndex];
                        return (
                          <td key={`${day.id}-${slotIndex}`} className="px-6 py-4">
                            {slot.student ? (
                              <div>
                                <div className="font-medium text-gray-900">{slot.student}</div>
                                <div className="flex items-center space-x-2">
                                  <Badge 
                                    variant={
                                      slot.type === 'Standard' ? 'primary' : 
                                      slot.type === 'Intensive' ? 'accent' : 
                                      'secondary'
                                    }
                                    size="sm"
                                  >
                                    {slot.type}
                                  </Badge>
                                  <Button size="sm" variant="ghost">Details</Button>
                                </div>
                              </div>
                            ) : (
                              <Button size="sm" variant="outline" className="w-full">Available</Button>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Active Students */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Active Students ({instructor.activeStudents.length})</CardTitle>
              <Button variant="outline" size="sm">Assign New Student</Button>
            </CardHeader>
            <div className="overflow-x-auto">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Student</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Progress</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Next Lesson</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {instructor.activeStudents.map(student => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        <Link to={`/students/${student.id}`} className="hover:text-primary-600">
                          {student.name}
                        </Link>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-500">
                            Progress
                          </span>
                          <span className="text-xs font-medium text-primary-600">
                            {student.progress}%
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-gray-200">
                          <div 
                            className="h-2 rounded-full bg-primary-500" 
                            style={{ width: `${student.progress}%` }}
                          ></div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1 text-gray-400" />
                          {new Date(student.nextLesson).toLocaleDateString('en-GB')}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">View Progress</Button>
                          <Button size="sm" variant="ghost">Book Lesson</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Reviews */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Student Reviews</CardTitle>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < Math.floor(instructor.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                    />
                  ))}
                </div>
                <span className="mr-2 text-sm font-medium">{instructor.rating} / 5</span>
                <span className="text-sm text-gray-500">({instructor.reviews.length} reviews)</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {instructor.reviews.map(review => (
                  <div key={review.id} className="rounded-md border border-gray-200 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-gray-900">{review.student}</div>
                      <div className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString('en-GB')}</div>
                    </div>
                    <div className="flex mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetail;