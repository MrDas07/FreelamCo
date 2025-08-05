import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Search, 
  User, 
  Bell, 
  Menu, 
  X, 
  Star, 
  Heart, 
  MessageCircle, 
  Send,
  Settings,
  BarChart3,
  Users,
  DollarSign,
  TrendingUp,
  Filter,
  ChevronDown,
  Play,
  Shield,
  Clock,
  Award,
  Globe,
  Camera,
  Code,
  PenTool,
  Music,
  Video,
  Briefcase,
  UserPlus,
  LogOut,
  Home,
  Package,
  Mail,
  FileText,
  Plus,
  Eye,
  MessageSquare,
  Minimize2,
  Maximize2
} from 'lucide-react';



const Header = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [isChatOpen, setIsChatOpen] = useState(false);

return(

    <>
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Row */}
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Left Section - Mobile Menu + Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4 min-w-0">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100/80 transition-all duration-200 lg:hidden active:scale-95"
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-6 h-6">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 transform transition-transform duration-200" />
                ) : (
                  <Menu className="w-6 h-6 transform transition-transform duration-200 group-hover:scale-110" />
                )}
              </div>
            </button>
  
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-lg sm:text-xl tracking-tight">F</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight">
                  FreelanCo
                </h1>
                <p className="text-xs text-gray-500 font-medium -mt-1">Professional Services</p>
              </div>
              <div className="sm:hidden">
                <h1 className="text-xl font-bold text-gray-900 tracking-tight">FreelanCo</h1>
              </div>
            </div>
          </div>
  
          {/* Center Section - Desktop Search */}
          <div className="hidden lg:flex items-center flex-1 max-w-xl xl:max-w-2xl mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-200" />
              </div>
              <input
                type="text"
                placeholder="Search for services, freelancers, or projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all duration-200 placeholder-gray-500 text-gray-900"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
            </div>
          </div>
  
          {/* Right Section - Auth & User Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 shrink-0">
            {isAuthenticated ? (
              <>
                {/* Search Icon for Mobile/Tablet */}
                <button 
                  className="group p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100/80 rounded-xl transition-all duration-200 lg:hidden active:scale-95"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </button>
  
                {/* Notifications */}
                <button className="group relative p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100/80 rounded-xl transition-all duration-200 active:scale-95">
                  <Bell className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg animate-pulse">
                    3
                  </span>
                  <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 animate-ping opacity-75"></span>
                </button>
  
                {/* Messages */}
                <button 
                  onClick={() => setIsChatOpen(!isChatOpen)}
                  className="group relative p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100/80 rounded-xl transition-all duration-200 active:scale-95"
                  aria-label="Messages"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg">
                    2
                  </span>
                </button>
  
                {/* Profile Dropdown */}
                <div className="relative">
                  <button className="group flex items-center space-x-3 p-2 pl-3 pr-4 rounded-xl hover:bg-gray-100/80 transition-all duration-200 active:scale-95">
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                        alt="Profile" 
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-gray-200 group-hover:ring-emerald-500 transition-all duration-200"
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white"></div>
                    </div>
                    <div className="hidden sm:block text-left">
                      <p className="text-sm font-semibold text-gray-900">John Doe</p>
                      <p className="text-xs text-gray-500">Pro Member</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-all duration-200 group-hover:rotate-180" />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Search Icon for Non-authenticated Mobile Users */}
                <button 
                  className="group p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100/80 rounded-xl transition-all duration-200 lg:hidden active:scale-95"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </button>
  
                {/* Sign In */}
                <button 
                  onClick={() => {setShowAuthModal(true); setAuthMode('signin');}}
                  className="group px-4 py-2.5 text-gray-700 hover:text-gray-900 font-semibold rounded-xl hover:bg-gray-100/80 transition-all duration-200 active:scale-95"
                >
                  Sign In
                </button>
  
                {/* Join Button */}
                <button 
                  onClick={() => {setShowAuthModal(true); setAuthMode('signup');}}
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
                >
                  <span className="relative z-10">Join Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                </button>
              </div>
            )}
          </div>
        </div>
  
        {/* Mobile/Tablet Search Bar */}
        <div className="lg:hidden pb-4 sm:pb-5">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-200" />
            </div>
            <input
              type="text"
              placeholder="Search services, freelancers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all duration-200 placeholder-gray-500 text-gray-900"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
          </div>
        </div>
      </div>
  
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <nav className="space-y-2">
              {['Browse Services', 'How it Works', 'Become a Seller', 'Success Stories', 'Support'].map((item, index) => (
                <button 
                  key={item}
                  className="group w-full text-left px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50/80 rounded-xl transition-all duration-200 font-medium"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center justify-between">
                    {item}
                    <ChevronDown className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </span>
                </button>
              ))}
            </nav>
            
            {/* Mobile Menu Footer */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-600">All systems operational</span>
                </div>
                <button className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                  Need Help?
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
    
    </>
);
}
export default Header;