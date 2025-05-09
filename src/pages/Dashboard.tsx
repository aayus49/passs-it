import React from 'react';
import { Users, UserCog, Calendar, CreditCard, TrendingUp, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import Button from '../components/ui/Button';
import StatCard from '../components/dashboard/StatCard';
import Badge from '../components/ui/Badge';

const Dashboard = () => {
  // Mock data for upcoming lessons
  const upcomingLessons = [
    { id: '1', student: 'Emily Johnson', instructor: 'David Smith', type: 'Standard', time: '10:00 AM - 11:00 AM', date: 'Today' },
    { id: '2', student: 'Michael Brown', instructor: 'Sarah Wilson', type: 'Introductory', time: '12:30 PM - 1:30 PM', date: 'Today' },
    { id: '3', student: 'Jessica Davis', instructor: 'David Smith', type: 'Pass Plus', time: '3:00 PM - 5:00 PM', date: 'Today' },
    { id: '4', student: 'Thomas Taylor', instructor: 'James Anderson', type: 'Standard', time: '9:00 AM - 10:00 AM', date: 'Tomorrow' },
  ];

  // Mock data for recent activities
  const recentActivities = [
    { id: '1', type: 'New Student', message: 'Alex Thompson registered as a new student', time: '15 minutes ago' },
    { id: '2', type: 'Lesson Booked', message: 'Emily Johnson booked a standard lesson for tomorrow', time: '1 hour ago' },
    { id: '3', type: 'Test Passed', message: 'Michael Brown passed his practical driving test', time: '3 hours ago' },
    { id: '4', type: 'Payment', message: 'Jessica Davis made a payment of £150 for 5 lessons', time: '5 hours ago' },
  ];

  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Dashboard" 
        description="Welcome to Pass IT Driving School management system"
      />

      {/* Stats Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard 
          title="Total Students" 
          value="248" 
          icon={<Users size={24} />} 
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard 
          title="Active Instructors" 
          value="18" 
          icon={<UserCog size={24} />} 
        />
        <StatCard 
          title="Scheduled Lessons" 
          value="156" 
          icon={<Calendar size={24} />} 
          trend={{ value: 8, isPositive: true }}
        />
        <StatCard 
          title="Monthly Revenue" 
          value="£14,250" 
          icon={<CreditCard size={24} />} 
          trend={{ value: 5, isPositive: true }}
        />
      </div>

      {/* Charts Section */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Lesson Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72 w-full bg-gray-100 flex items-center justify-center">
              <TrendingUp size={48} className="text-gray-400" />
              <span className="ml-2 text-gray-500">Booking Trends Chart</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Test Pass Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72 w-full bg-gray-100 flex items-center justify-center">
              <TrendingUp size={48} className="text-gray-400" />
              <span className="ml-2 text-gray-500">Pass Rate Chart</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Lessons Section */}
      <div className="mt-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Today's Lessons</CardTitle>
            <Button variant="outline" size="sm">View All</Button>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Student</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Instructor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {upcomingLessons.map((lesson) => (
                  <tr key={lesson.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">{lesson.student}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{lesson.instructor}</td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      <Badge 
                        variant={
                          lesson.type === 'Standard' ? 'primary' : 
                          lesson.type === 'Introductory' ? 'secondary' : 
                          'accent'
                        }
                      >
                        {lesson.type}
                      </Badge>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {lesson.time}
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      <Badge variant="success">Confirmed</Badge>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">Details</Button>
                        <Button size="sm" variant="ghost">Reschedule</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Recent Activity Section */}
      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex">
                  <div className="mr-4">
                    {activity.type === 'New Student' && (
                      <div className="rounded-full bg-secondary-100 p-2 text-secondary-600">
                        <Users size={16} />
                      </div>
                    )}
                    {activity.type === 'Lesson Booked' && (
                      <div className="rounded-full bg-primary-100 p-2 text-primary-600">
                        <Calendar size={16} />
                      </div>
                    )}
                    {activity.type === 'Test Passed' && (
                      <div className="rounded-full bg-success-100 p-2 text-success-600">
                        <CheckCircle size={16} />
                      </div>
                    )}
                    {activity.type === 'Payment' && (
                      <div className="rounded-full bg-accent-100 p-2 text-accent-600">
                        <CreditCard size={16} />
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;