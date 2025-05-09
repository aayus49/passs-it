import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Users, UserCog, Calendar, Clock, CreditCard, ClipboardCheck, 
  BarChart, Settings, ChevronLeft, ChevronRight, GraduationCap
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

interface NavItem {
  name: string;
  to: string;
  icon: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onToggle }) => {
  const navItems: NavItem[] = [
    { name: 'Dashboard', to: '/', icon: <Home size={20} /> },
    { name: 'Students', to: '/students', icon: <Users size={20} /> },
    { name: 'Instructors', to: '/instructors', icon: <UserCog size={20} /> },
    { name: 'Lessons', to: '/lessons', icon: <Clock size={20} /> },
    { name: 'Calendar', to: '/calendar', icon: <Calendar size={20} /> },
    { name: 'Payments', to: '/payments', icon: <CreditCard size={20} /> },
    { name: 'Tests', to: '/tests', icon: <ClipboardCheck size={20} /> },
    { name: 'Reports', to: '/reports', icon: <BarChart size={20} /> },
    { name: 'Settings', to: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside 
      className={cn(
        'fixed inset-y-0 z-50 flex flex-col border-r border-gray-200 bg-white transition-all duration-300 md:relative',
        open ? 'w-64' : 'w-20'
      )}
    >
      {/* Logo */}
      <div className={cn(
        'flex h-16 items-center gap-3 border-b border-gray-200 px-4',
        open ? 'justify-between' : 'justify-center'
      )}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-500 text-white">
            <GraduationCap size={24} />
          </div>
          {open && (
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900">Pass IT</span>
              <span className="text-xs text-gray-500">Driving School</span>
            </div>
          )}
        </div>
        <button 
          onClick={onToggle}
          className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 md:flex"
        >
          {open ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.to}
                className={({ isActive }) => cn(
                  'flex items-center gap-3 rounded-md px-3 py-2 transition-colors',
                  isActive 
                    ? 'bg-primary-50 text-primary-600' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900',
                  !open && 'justify-center'
                )}
                end={item.to === '/'}
              >
                {item.icon}
                {open && <span>{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className={cn(
        'flex items-center gap-3 border-t border-gray-200 p-4',
        !open && 'justify-center'
      )}>
        <div className="h-8 w-8 rounded-full bg-gray-200"></div>
        {open && (
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900">Admin User</span>
            <span className="text-xs text-gray-500">admin@passit.com</span>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;