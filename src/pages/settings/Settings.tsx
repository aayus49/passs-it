import React from 'react';
import { Settings as SettingsIcon, User, Bell, Shield, CreditCard, Palette, Globe, HelpCircle } from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/Card';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Button from '../../components/ui/Button';

const Settings = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader 
        title="Settings" 
        description="Manage your application preferences"
      />

      <div className="grid grid-cols-12 gap-6">
        {/* Settings Navigation */}
        <div className="col-span-12 lg:col-span-3">
          <Card>
            <CardContent className="p-2">
              <nav className="space-y-1">
                <a
                  href="#profile"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary-50 text-primary-700"
                >
                  <User size={16} className="mr-3" />
                  Profile
                </a>
                <a
                  href="#notifications"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <Bell size={16} className="mr-3" />
                  Notifications
                </a>
                <a
                  href="#security"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <Shield size={16} className="mr-3" />
                  Security
                </a>
                <a
                  href="#billing"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <CreditCard size={16} className="mr-3" />
                  Billing
                </a>
                <a
                  href="#appearance"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <Palette size={16} className="mr-3" />
                  Appearance
                </a>
                <a
                  href="#localization"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <Globe size={16} className="mr-3" />
                  Localization
                </a>
                <a
                  href="#help"
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50"
                >
                  <HelpCircle size={16} className="mr-3" />
                  Help & Support
                </a>
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="col-span-12 space-y-6 lg:col-span-9">
          {/* Profile Settings */}
          <Card id="profile">
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  label="School Name"
                  defaultValue="Pass IT Driving School"
                />
                <Input
                  label="Email Address"
                  defaultValue="admin@passit.com"
                  type="email"
                />
                <Input
                  label="Phone Number"
                  defaultValue="+44 20 7123 4567"
                />
                <Input
                  label="Website"
                  defaultValue="https://www.passit.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Business Address
                </label>
                <div className="mt-1 grid grid-cols-1 gap-3">
                  <Input placeholder="Street Address" />
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="City" />
                    <Input placeholder="Postal Code" />
                  </div>
                </div>
              </div>

              <div>
                <Button>Save Changes</Button>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card id="notifications">
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="email-notifications"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      defaultChecked
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="email-notifications" className="text-sm font-medium text-gray-700">
                      Email Notifications
                    </label>
                    <p className="text-sm text-gray-500">
                      Receive email notifications about new bookings, cancellations, and important updates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="sms-notifications"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="sms-notifications" className="text-sm font-medium text-gray-700">
                      SMS Notifications
                    </label>
                    <p className="text-sm text-gray-500">
                      Receive text messages for urgent updates and reminders.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card id="security">
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700">Change Password</h3>
                <div className="mt-2 space-y-3">
                  <Input
                    type="password"
                    placeholder="Current Password"
                  />
                  <Input
                    type="password"
                    placeholder="New Password"
                  />
                  <Input
                    type="password"
                    placeholder="Confirm New Password"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700">Two-Factor Authentication</h3>
                <div className="mt-2">
                  <Button variant="outline">Enable 2FA</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Appearance Settings */}
          <Card id="appearance">
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Theme
                  </label>
                  <Select
                    options={[
                      { value: 'light', label: 'Light' },
                      { value: 'dark', label: 'Dark' },
                      { value: 'system', label: 'System' },
                    ]}
                    value="light"
                    onChange={() => {}}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Accent Color
                  </label>
                  <Select
                    options={[
                      { value: 'blue', label: 'Blue' },
                      { value: 'green', label: 'Green' },
                      { value: 'purple', label: 'Purple' },
                    ]}
                    value="blue"
                    onChange={() => {}}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Localization Settings */}
          <Card id="localization">
            <CardHeader>
              <CardTitle>Localization Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Language
                  </label>
                  <Select
                    options={[
                      { value: 'en', label: 'English' },
                      { value: 'fr', label: 'French' },
                      { value: 'de', label: 'German' },
                    ]}
                    value="en"
                    onChange={() => {}}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Time Zone
                  </label>
                  <Select
                    options={[
                      { value: 'GMT', label: 'GMT (London)' },
                      { value: 'EST', label: 'EST (New York)' },
                      { value: 'PST', label: 'PST (Los Angeles)' },
                    ]}
                    value="GMT"
                    onChange={() => {}}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date Format
                  </label>
                  <Select
                    options={[
                      { value: 'DD/MM/YYYY', label: 'DD/MM/YYYY' },
                      { value: 'MM/DD/YYYY', label: 'MM/DD/YYYY' },
                      { value: 'YYYY-MM-DD', label: 'YYYY-MM-DD' },
                    ]}
                    value="DD/MM/YYYY"
                    onChange={() => {}}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Currency
                  </label>
                  <Select
                    options={[
                      { value: 'GBP', label: 'British Pound (£)' },
                      { value: 'USD', label: 'US Dollar ($)' },
                      { value: 'EUR', label: 'Euro (€)' },
                    ]}
                    value="GBP"
                    onChange={() => {}}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;