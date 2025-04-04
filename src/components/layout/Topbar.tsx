import React from 'react';
import { RiNotification3Line, RiMenuLine } from 'react-icons/ri';
import LogoutButton from "../LogoutButton";

const Topbar: React.FC = () => {
  return (
    <header className="fixed top-0 right-0 left-64 bg-white shadow-sm z-10">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left side - Title and toggle button */}
        <div className="flex items-center">
          <button 
            className="mr-4 p-1 rounded-full hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
          >
            <RiMenuLine className="text-xl text-gray-600" />
          </button>
          
          <h1 className="text-xl font-semibold text-blue-600">
            Hospital Dashboard
          </h1>
        </div>

        {/* Right side - Notifications, Profile, and Logout */}
        <div className="flex items-center space-x-5">
          {/* Notifications */}
          <div className="relative">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <RiNotification3Line className="text-xl text-gray-600" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                4
              </span>
            </button>
          </div>
          
          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:block text-right">
              <p className="text-sm font-medium text-gray-700">Admin User</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            
            <div className="relative">
              <img 
                src="/avatar.jpg" 
                alt="Admin" 
                className="h-10 w-10 rounded-full object-cover border-2 border-blue-100"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff";
                }}
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
            </div>
          </div>
          
          {/* Logout Button */}
          <div className="ml-2">
            <LogoutButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;