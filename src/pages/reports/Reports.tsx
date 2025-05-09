import React from 'react';
import { BarChart, PieChart, TrendingUp, Download, FileText, Users, Car, Award } from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import Button from '../../components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';

const Reports = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Reports" 
        description="View and generate business insights"
        actions={
          <Button icon={<Download size={16} />}>
            Export Reports
          </Button>
        }
      />

      {/* Quick Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                <Users size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Total Students</p>
                <p className="text-2xl font-semibold text-gray-900">248</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-100 text-secondary-600">
                <Car size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Active Lessons</p>
                <p className="text-2xl font-semibold text-gray-900">156</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-success-100 text-success-600">
                <Award size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Pass Rate</p>
                <p className="text-2xl font-semibold text-gray-900">87%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warning-100 text-warning-600">
                <TrendingUp size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Monthly Revenue</p>
                <p className="text-2xl font-semibold text-gray-900">£14,250</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full flex items-center justify-center bg-gray-50 rounded-lg">
              <BarChart size={48} className="text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Student Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full flex items-center justify-center bg-gray-50 rounded-lg">
              <PieChart size={48} className="text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Available Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Available Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-gray-200 p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center">
                <FileText size={24} className="text-primary-500" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Student Progress Report</h3>
                  <p className="text-sm text-gray-500">Individual student performance analysis</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center">
                <FileText size={24} className="text-secondary-500" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Instructor Performance</h3>
                  <p className="text-sm text-gray-500">Instructor efficiency and ratings</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center">
                <FileText size={24} className="text-success-500" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Financial Summary</h3>
                  <p className="text-sm text-gray-500">Revenue and payment analytics</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center">
                <FileText size={24} className="text-warning-500" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Test Pass Rates</h3>
                  <p className="text-sm text-gray-500">Theory and practical test analysis</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center">
                <FileText size={24} className="text-error-500" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Resource Utilization</h3>
                  <p className="text-sm text-gray-500">Vehicle and instructor scheduling</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center">
                <FileText size={24} className="text-accent-500" />
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-900">Customer Satisfaction</h3>
                  <p className="text-sm text-gray-500">Student feedback and ratings</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;