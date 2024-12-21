import React from 'react';
import logo from "../logo/logo.png";
import { ChevronDown, Home, Code, Cloud, Book, Settings, Phone, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={logo}
              alt="CodeAnt AI"
              className="w-6 h-6"
            />
            <span className="text-xl text-gray-800">CodeAnt AI</span>
          </div>

          {/* Account Selector */}
          <button className="flex items-center justify-between w-full px-3 py-2 rounded-md bg-gray-50 text-gray-600 hover:bg-gray-100">
            <span className="text-sm truncate">UtkarshDhairyaPa...</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex-grow px-3">
          <div className="space-y-1">
            <button className="flex items-center gap-3 w-full px-3 py-2 rounded-md bg-blue-500 text-white">
              <Home className="h-5 w-5" />
              <span className="text-sm">Repositories</span>
            </button>

            <button className="flex items-center gap-3 w-full px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              <Code className="h-5 w-5" />
              <span className="text-sm">AI Code Review</span>
            </button>

            <button className="flex items-center gap-3 w-full px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              <Cloud className="h-5 w-5" />
              <span className="text-sm">Cloud Security</span>
            </button>

            <button className="flex items-center gap-3 w-full px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              <Book className="h-5 w-5" />
              <span className="text-sm">How to Use</span>
            </button>

            <button className="flex items-center gap-3 w-full px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              <Settings className="h-5 w-5" />
              <span className="text-sm">Settings</span>
            </button>
          </div>
        </nav>

        {/* Footer Navigation */}
        <div className="px-3 pb-4 relative top-52">
          <div className="space-y-1">
            <button className="flex items-center gap-3 w-full px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              <Phone className="h-5 w-5" />
              <span className="text-sm">Support</span>
            </button>

            <button className="flex items-center gap-3 w-full px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
              <LogOut className="h-5 w-5" />
              <span className="text-sm">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
