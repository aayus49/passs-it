import React from 'react';
import { Menu, Bell, Search } from 'lucide-react';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="z-10 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div className="flex items-center gap-4">
        <button 
          onClick={onToggleSidebar}
          className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 md:hidden"
        >
          <Menu size={20} />
        </button>
        
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="h-10 rounded-md border border-gray-300 bg-gray-50 pl-10 pr-4 text-sm text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          <Bell size={20} />
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
        </button>
        
        <div className="h-8 w-px bg-gray-200"></div>
        
        <div className="flex items-center gap-3">
          <span className="hidden text-sm font-medium text-gray-700 md:block">Admin User</span>
          <div className="h-8 w-8 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;