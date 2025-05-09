import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, UserCircle, Phone, Mail, MapPin, Calendar, Clock, Car, Award, CreditCard, 
  FileText, BookOpen, CheckCircle, XCircle, AlertCircle, Edit, Trash
} from 'lucide-react';
import Button from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';

// Mock student data
const MOCK_STUDENT = {
  id: '1',
  name: 'Emily Johnson',
  email: 'emily.j@example.com',
  phone: '07700 900123',
  address: '123 High Street, London, SW1A 1AA',
  dateOfBirth: '1995-07-12',
  licenseNumber: 'JOHNS956127EJ9HD',
  courseType: 'Standard',
  instructor: 'David Smith',
  instructorId: 'ins-1',
  lessonsCompleted: 12,
  lessonsRemaining: 8,
  totalLessons: 20,
  status: 'active',
  joinDate: '2023-10-15',
  lastLesson: '2024-03-10',
  nextLesson: '2024-03-17',
  notes: 'Confidence has improved significantly over the last few lessons. Needs more practice on parallel parking.',
  tests: [
    { 
      id: 'test-1', 
      type: 'Theory', 
      date: '2023-12-05', 
      result: 'pass',
      score: '48/50',
      center: 'London Theory Test Centre'
    }
  ],
  upcomingLessons: [
    {
      id: 'lesson-1',
      date: '2024-03-17',
      time: '10:00 - 11:00',
      type: 'Standard',
      instructor: 'David Smith',
      status: 'confirmed',
      focus: 'Roundabouts and lane discipline'
    },
    {
      id: 'lesson-2',
      date: '2024-03-24',
      time: '10:00 - 11:00',
      type: 'Standard',
      instructor: 'David Smith',
      status: 'pending',
      focus: 'Parallel parking'
    }
  ],
  pastLessons: [
    {
      id: 'past-1',
      date: '2024-03-10',
      time: '10:00 - 11:00',
      type: 'Standard',
      instructor: 'David Smith',
      status: 'completed',
      feedback: 'Good progress on highway driving. Needs more practice on reverse parking.',
      rating: 4
    },
    {
      id: 'past-2',
      date: '2024-03-03',
      time: '10:00 - 11:00',
      type: 'Standard',
      instructor: 'David Smith',
      status: 'completed',
      feedback: 'Handled different traffic scenarios well. Improvement needed on observations.',
      rating: 3
    }
  ],
  payments: [
    {
      id: 'payment-1',
      date: '2023-10-15',
      amount: 550,
      method: 'Credit Card',
      description: 'Initial payment for 20 lessons',
      status: 'paid'
    },
    {
      id: 'payment-2',
      date: '2023-12-05',
      amount: 23,
      method: 'Bank Transfer',
      description: 'Theory test fee',
      status: 'paid'
    }
  ],
  skills: [
    { name: 'Vehicle Controls', level: 5 },
    { name: 'Moving Off & Stopping', level: 4 },
    { name: 'Road Positioning', level: 4 },
    { name: 'Junction Awareness', level: 3 },
    { name: 'Roundabouts', level: 3 },
    { name: 'Overtaking', level: 2 },
    { name: 'Dual Carriageways', level: 2 },
    { name: 'Parallel Parking', level: 1 },
    { name: 'Bay Parking', level: 2 },
    { name: 'Emergency Stop', level: 3 },
  ]
};

const StudentDetail = () => {
  const { id } = useParams<{ id: string }>();
  // In a real app, this would fetch the student data
  const student = MOCK_STUDENT;

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div className="animate-fade-in">
      {/* Page Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/students" className="mr-4 flex h-8 w-8 items-center justify-center rounded-md bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{student.name}</h1>
            <p className="text-sm text-gray-500">Student ID: {student.id}</p>
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
            Delete
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left column - Student Information */}
        <div className="space-y-6 lg:col-span-1">
          {/* Profile Card */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-center">
                <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <UserCircle size={64} className="text-gray-400" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-gray-500" />
                  <span className="text-sm text-gray-700">{student.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-gray-500" />
                  <span className="text-sm text-gray-700">{student.email}</span>
                </div>
                <div className="flex items-start">
                  <MapPin size={16} className="mr-2 mt-0.5 text-gray-500" />
                  <span className="text-sm text-gray-700">{student.address}</span>
                </div>
                <div className="flex items-center">
                  <Calendar size={16} className="mr-2 text-gray-500" />
                  <span className="text-sm text-gray-700">
                    DOB: {new Date(student.dateOfBirth).toLocaleDateString('en-GB')}
                  </span>
                </div>
                <div className="flex items-center">
                  <FileText size={16} className="mr-2 text-gray-500" />
                  <span className="text-sm text-gray-700">
                    License: {student.licenseNumber}
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Course Progress</span>
                  <span className="text-sm font-medium text-primary-600">
                    {Math.round((student.lessonsCompleted / student.totalLessons) * 100)}%
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200">
                  <div 
                    className="h-2 rounded-full bg-primary-500" 
                    style={{ width: `${(student.lessonsCompleted / student.totalLessons) * 100}%` }}
                  ></div>
                </div>
                <div className="mt-1 flex justify-between text-xs text-gray-500">
                  <span>{student.lessonsCompleted} Completed</span>
                  <span>{student.lessonsRemaining} Remaining</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t border-gray-200 bg-gray-50">
              <div className="flex w-full flex-col space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Status</span>
                  <Badge 
                    variant={
                      student.status === 'active' ? 'success' : 
                      student.status === 'completed' ? 'primary' : 
                      'warning'
                    }
                  >
                    {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Course Type</span>
                  <Badge variant="primary">{student.courseType}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Join Date</span>
                  <span className="text-sm text-gray-700">
                    {new Date(student.joinDate).toLocaleDateString('en-GB')}
                  </span>
                </div>
              </div>
            </CardFooter>
          </Card>

          {/* Instructor Card */}
          <Card>
            <CardHeader>
              <CardTitle>Assigned Instructor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <div className="mr-4 h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                  <UserCircle size={32} className="text-gray-400" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900">{student.instructor}</h4>
                  <p className="text-sm text-gray-500">Instructor ID: {student.instructorId}</p>
                  <Link to={`/instructors/${student.instructorId}`} className="mt-1 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700">
                    View Profile
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Test History */}
          <Card>
            <CardHeader>
              <CardTitle>Test History</CardTitle>
            </CardHeader>
            <CardContent>
              {student.tests.length > 0 ? (
                <div className="space-y-4">
                  {student.tests.map(test => (
                    <div key={test.id} className="rounded-md border border-gray-200 p-4">
                      <div className="flex items-center justify-between">
                        <Badge 
                          variant={test.type === 'Theory' ? 'secondary' : 'primary'}
                          className="mb-2"
                        >
                          {test.type} Test
                        </Badge>
                        <Badge 
                          variant={test.result === 'pass' ? 'success' : 'error'}
                        >
                          {test.result.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1 text-gray-500" />
                          {new Date(test.date).toLocaleDateString('en-GB')}
                        </div>
                        {test.score && (
                          <div className="flex items-center">
                            <Award size={14} className="mr-1 text-gray-500" />
                            Score: {test.score}
                          </div>
                        )}
                        {test.center && (
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1 text-gray-500" />
                            {test.center}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full">
                    Schedule New Test
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-6">
                  <Award size={48} className="mb-2 text-gray-400" />
                  <p className="mb-4 text-center text-sm text-gray-500">
                    No tests scheduled or taken yet
                  </p>
                  <Button variant="outline">Schedule First Test</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right columns - Lessons & Progress */}
        <div className="space-y-6 lg:col-span-2">
          {/* Quick Actions */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Button 
              className="h-full w-full flex-col py-6" 
              icon={<Clock size={24} />}
              variant="outline"
            >
              <span className="mt-2">Book Lesson</span>
            </Button>
            <Button 
              className="h-full w-full flex-col py-6" 
              icon={<CreditCard size={24} />}
              variant="outline"
            >
              <span className="mt-2">Record Payment</span>
            </Button>
            <Button 
              className="h-full w-full flex-col py-6" 
              icon={<Award size={24} />}
              variant="outline"
            >
              <span className="mt-2">Schedule Test</span>
            </Button>
          </div>

          {/* Notes */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Notes</CardTitle>
              <Button variant="ghost" size="sm" icon={<Edit size={14} />}>
                Edit
              </Button>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{student.notes}</p>
            </CardContent>
          </Card>

          {/* Upcoming Lessons */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Upcoming Lessons</CardTitle>
              <Button variant="outline" size="sm">Book New</Button>
            </CardHeader>
            <CardContent>
              {student.upcomingLessons.length > 0 ? (
                <div className="space-y-4">
                  {student.upcomingLessons.map(lesson => (
                    <div key={lesson.id} className="rounded-md border border-gray-200 p-4">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1 text-gray-500" />
                            <span className="font-medium text-gray-900">{lesson.date}</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <Clock size={16} className="mr-1 text-gray-500" />
                            <span className="text-gray-700">{lesson.time}</span>
                          </div>
                          <div className="mt-2 flex items-center">
                            <Badge 
                              variant={
                                lesson.type === 'Standard' ? 'primary' : 
                                lesson.type === 'Introductory' ? 'secondary' : 
                                'accent'
                              }
                              size="sm"
                              className="mr-2"
                            >
                              {lesson.type}
                            </Badge>
                            <span className="text-sm text-gray-500">with {lesson.instructor}</span>
                          </div>
                          {lesson.focus && (
                            <div className="mt-1 text-sm text-gray-700">
                              <span className="font-medium">Focus:</span> {lesson.focus}
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col items-end">
                          <Badge 
                            variant={
                              lesson.status === 'confirmed' ? 'success' : 
                              lesson.status === 'pending' ? 'warning' : 
                              'error'
                            }
                          >
                            {lesson.status.charAt(0).toUpperCase() + lesson.status.slice(1)}
                          </Badge>
                          <div className="mt-2 flex space-x-2">
                            <Button size="sm" variant="outline">Reschedule</Button>
                            <Button size="sm" variant="ghost">Cancel</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-6">
                  <Calendar size={48} className="mb-2 text-gray-400" />
                  <p className="mb-4 text-center text-sm text-gray-500">
                    No upcoming lessons scheduled
                  </p>
                  <Button>Book New Lesson</Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Skill Progress */}
          <Card>
            <CardHeader>
              <CardTitle>Driving Skills Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {student.skills.map(skill => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}/5</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200">
                      <div 
                        className={`h-2 rounded-full ${
                          skill.level >= 4 ? 'bg-success-500' : 
                          skill.level >= 2 ? 'bg-warning-500' : 
                          'bg-error-500'
                        }`}
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment History */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Payment History</CardTitle>
              <Button variant="outline" size="sm" icon={<CreditCard size={14} />}>
                New Payment
              </Button>
            </CardHeader>
            <div className="overflow-x-auto">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Method</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {student.payments.map(payment => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {new Date(payment.date).toLocaleDateString('en-GB')}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {payment.description}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        £{payment.amount.toFixed(2)}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {payment.method}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <Badge 
                          variant={
                            payment.status === 'paid' ? 'success' : 
                            payment.status === 'pending' ? 'warning' : 
                            'error'
                          }
                        >
                          {payment.status.toUpperCase()}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Lesson History */}
          <Card>
            <CardHeader>
              <CardTitle>Past Lessons</CardTitle>
            </CardHeader>
            <CardContent>
              {student.pastLessons.length > 0 ? (
                <div className="space-y-4">
                  {student.pastLessons.map(lesson => (
                    <div key={lesson.id} className="rounded-md border border-gray-200 p-4">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <div className="flex items-center">
                            <Calendar size={16} className="mr-1 text-gray-500" />
                            <span className="font-medium text-gray-900">{lesson.date}</span>
                            <span className="mx-2 text-gray-400">|</span>
                            <Clock size={16} className="mr-1 text-gray-500" />
                            <span className="text-gray-700">{lesson.time}</span>
                          </div>
                          <div className="mt-1 flex items-center">
                            <Badge 
                              variant={
                                lesson.type === 'Standard' ? 'primary' : 
                                lesson.type === 'Introductory' ? 'secondary' : 
                                'accent'
                              }
                              size="sm"
                              className="mr-2"
                            >
                              {lesson.type}
                            </Badge>
                            <span className="text-sm text-gray-500">with {lesson.instructor}</span>
                          </div>
                          {lesson.feedback && (
                            <div className="mt-2">
                              <p className="text-sm text-gray-700">
                                <span className="font-medium">Feedback:</span> {lesson.feedback}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col items-end">
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg 
                                key={i}
                                xmlns="http://www.w3.org/2000/svg" 
                                className={`h-4 w-4 ${i < lesson.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <Button size="sm" variant="ghost" className="mt-2">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-6">
                  <BookOpen size={48} className="mb-2 text-gray-400" />
                  <p className="text-center text-sm text-gray-500">
                    No past lessons recorded yet
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;