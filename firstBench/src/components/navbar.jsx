import React, { useState } from 'react';
import { Home, Users, MessageSquare, Zap, BarChart2, PenTool, Bell, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-teal-400 text-2xl sm:text-3xl font-bold">Firstbench</span>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-5">
            <NavItem icon={<Home size={18} />} text="Dashboard" />
            <NavItem icon={<Users size={18} />} text="FirstGuru" />
            <NavItem icon={<MessageSquare size={18} />} text="TownHall" />
            <NavItem icon={<Zap size={18} />} text="AI Evaluation" />
            <NavItem icon={<BarChart2 size={18} />} text="Performance" />
            <NavItem icon={<PenTool size={18} />} text="Mock Test" active />
          </div>

          {/* Desktop Profile Section */}
          <div className="hidden lg:flex items-center space-x-4">
            <Bell size={18} className="cursor-pointer hover:text-white" />
            <div className="flex items-center space-x-2 bg-pink-100 text-pink-800 px-3 py-1 rounded-md cursor-pointer">
              <span className="font-medium">P</span>
              <span>Profile</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-700">
            <MobileNavItem icon={<Home size={18} />} text="Dashboard" />
            <MobileNavItem icon={<Users size={18} />} text="FirstGuru" />
            <MobileNavItem icon={<MessageSquare size={18} />} text="TownHall" />
            <MobileNavItem icon={<Zap size={18} />} text="AI Evaluation" />
            <MobileNavItem icon={<BarChart2 size={18} />} text="Performance" />
            <MobileNavItem icon={<PenTool size={18} />} text="Mock Test" active />
            
            {/* Mobile Profile Section */}
            <div className="pt-4 flex items-center justify-between">
              <Bell size={18} className="cursor-pointer hover:text-white" />
              <div className="flex items-center space-x-2 bg-pink-100 text-pink-800 px-3 py-1 rounded-md cursor-pointer">
                <span className="font-medium">P</span>
                <span>Profile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, text, active = false }) => {
  return (
    <div className={`flex items-center space-x-2 cursor-pointer hover:text-white transition-colors ${
      active ? 'text-teal-400' : ''
    }`}>
      {icon}
      <span className="text-sm">{text}</span>
    </div>
  );
};

const MobileNavItem = ({ icon, text, active = false }) => {
  return (
    <div className={`flex items-center space-x-2 py-2 cursor-pointer hover:text-white transition-colors ${
      active ? 'text-teal-400' : ''
    }`}>
      {icon}
      <span className="text-base">{text}</span>
    </div>
  );
};

export default Navbar;