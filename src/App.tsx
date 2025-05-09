import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layouts
import DashboardLayout from './layouts/DashboardLayout';

// Pages
import Dashboard from './pages/Dashboard';
import Students from './pages/students/Students';
import StudentDetail from './pages/students/StudentDetail';
import Instructors from './pages/instructors/Instructors';
import InstructorDetail from './pages/instructors/InstructorDetail';
import Lessons from './pages/lessons/Lessons';
import Calendar from './pages/calendar/Calendar';
import Payments from './pages/payments/Payments';
import Tests from './pages/tests/Tests';
import Reports from './pages/reports/Reports';
import Settings from './pages/settings/Settings';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="students" element={<Students />} />
          <Route path="students/:id" element={<StudentDetail />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="instructors/:id" element={<InstructorDetail />} />
          <Route path="lessons" element={<Lessons />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="payments" element={<Payments />} />
          <Route path="tests" element={<Tests />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;