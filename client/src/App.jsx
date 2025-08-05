import React, { useState, useEffect, useRef, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import axios from "axios";
import {io} from 'socket.io-client';
import Ficon from "../src/assets/favicon-32x32.png"
import GigSubmissionForm from "./components/GigSubmissionForm";
import GigsPricingPage from "./components/GigsPricingPage ";
import "./App.css";
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
  IndianRupee,
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
  LogIn,
  Home,
  Package,
  Mail,
  FileText,
  Plus,
  Eye,
  MessageSquare,
  Minimize2,
  Maximize2,
} from "lucide-react";
gsap.registerPlugin(ScrollTrigger, useGSAP);

const FreelancerWebsite = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedGig, setSelectedGig] = useState(null);
  const [currentView, setCurrentView] = useState("home");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(false);
  const [activeChat, setActiveChat] = useState(null);
  const [chatMessage, setChatMessage] = useState("");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("signin");
  const [showGigForm, setShowGigForm] = useState(false);
  const [user, setuser] = useState(null);
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    userType: "",
  });
  const mobileSearchRef = useRef(null);
  const desktopSearchRef = useRef(null);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const chatInputRef = useRef(null);


  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsAuthenticated(true);
  //   }
  // }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url =
        authMode === "signup"
          ? `${API_URL}/api/users/register`
          : `${API_URL}/api/users/login`;

      const payload =
        authMode === "signup"
          ? {
              name: form.name,
              email: form.email,
              password: form.password,
              userType: form.userType,
            }
          : {
              email: form.email,
              password: form.password,
            };

      const response = await axios.post(url, payload);
      localStorage.setItem("token", response.data.token);
      setuser(response.data.user);
      setIsAuthenticated(true);
      setShowAuthModal(false);
    } catch (error) {
      alert(error.response?.data?.message || "Authentication failed");
    }
  };


  // gsap animation
  const imagehero = useRef(null);
  const headerh1 = useRef(null);
  const headerp1 = useRef(null);
  const catag = useRef(null);
  const gigslst = useRef(null);
  const feat = useRef(null);

  //lenis animation
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  //frammer motion
  // const scrollXProgress= useScroll().scrollXProgress;

  // useEffect(()=>{
  //   gsap.from(imagehero.current, {

  //     opacity: 50,
  //     scale: 1,
  //     y: -10,
  //     duration: 1,
  //     ease: "in"
  //   });
  // }, []);

  useGSAP(() => {
    gsap.from(imagehero.current, {
      opacity: 0,
      scale: 0.9,
      y: 50,
      duration: 0.9,
      ease: "power1.in",
    });

    gsap.from(headerh1.current, {
      opacity: 0,
      scale: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: "power1.in",
      stagger: 2,
    });
    gsap.from(headerp1.current, {
      opacity: 0,
      scale: 0.9,
      y: 50,
      duration: 1,
      delay: 0.5,
      ease: "power1.in",
      stagger: 2,
      scrollTrigger: {
        trigger: headerh1.current,
        start: "top 25%",
        end: "bottom 35%",
        scrub: 2,
        // markers: true,
      },
    });
    gsap.from(catag.current, {
      opacity: 0,
      scale: 0.9,
      y: 50,
      duration: 1,
      delay: 0.8,
      ease: "power1.in",
      stagger: 2,
      scrollTrigger: {
        trigger: headerp1.current,
        start: "top 25%",
        end: "bottom 35%",
        scrub: 2,
      },
    });
    gsap.from(gigslst.current, {
      opacity: 0,
      scale: 0.9,
      y: 50,
      duration: 1,
      delay: 0.8,
      ease: "expo.out",
      stagger: 5,
      scrollTrigger: {
        trigger: catag.current,
        start: "top 25%",
        end: "bottom 35%",
        scrub: 2,
      },
    });
    gsap.from(feat.current, {
      opacity: 0,
      scale: 0.9,
      y: 50,
      duration: 1,
      delay: 0.8,
      ease: "power1.in",
      stagger: 5,
      scrollTrigger: {
        trigger: gigslst.current,
        start: "top 25%",
        end: "bottom 35%",
        scrub: 2,
      },
    });
  }, []);

  //here i have implemented the socket
  const socket = io(API_URL, {
    transports: ['websocket'],
  });





  const handleViewDetails = (gig) => {
    setSelectedGig(gig);
    setCurrentPage('gigDetails');
  };

  const goHome = () => {
    setCurrentPage('home');
    setSelectedGig(null);
  };

  // Render different components based on currentPage
  if (currentPage === 'gigDetails') {
    return <GigsPricingPage gig={selectedGig} onBack={goHome} />;
  }


  // Mock data
  const categories = [
    {
      id: "graphics",
      name: "Graphics & Design",
      icon: PenTool,
      color: "bg-purple-500",
    },
    {
      id: "digital",
      name: "Digital Marketing",
      icon: TrendingUp,
      color: "bg-green-500",
    },
    {
      id: "writing",
      name: "Writing & Translation",
      icon: FileText,
      color: "bg-blue-500",
    },
    {
      id: "video",
      name: "Video & Animation",
      icon: Video,
      color: "bg-red-500",
    },
    { id: "music", name: "Music & Audio", icon: Music, color: "bg-yellow-500" },
    {
      id: "programming",
      name: "Programming & Tech",
      icon: Code,
      color: "bg-indigo-500",
    },
    {
      id: "photography",
      name: "Photography",
      icon: Camera,
      color: "bg-pink-500",
    },
    { id: "business", name: "Business", icon: Briefcase, color: "bg-gray-500" },
  ];

  const gigs = [
    {
      id: 1,
      title: "I will create a modern logo design for your business",
      seller: "Abhijit Das",
      rating: 4.9,
      reviews: 234,
      price: 2550,
      image:
        "https://i.pinimg.com/736x/8b/59/72/8b59724b848e5c5df93689a287e3be14.jpg",
      category: "graphics",
      isOnline: true,
    },
    {
      id: 2,
      title: "I will build a responsive website using React and Node.js",
      seller: "Sankar Das",
      rating: 4.8,
      reviews: 1898,
      price: 30000,
      image:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/361654051/original/4d346061de746c0945c747204bcf70caf7cf1a0b/create-youtube-thumbnail-in-3-hours.png",
      category: "programming",
      isOnline: true,
    },
    {
      id: 3,
      title: "I will write engaging blog posts and articles",
      seller: "Emon Sarkar",
      rating: 4.7,
      reviews: 312,
      price: 3531,
      image:
        "https://legiit-service.s3.amazonaws.com/012d5d97a8d704545c092081ce5c3c2c/23a032118a2c4a50dce8b8054749adcd.jpg",
      category: "writing",
      isOnline: false,
    },
    {
      id: 4,
      title: "I will create stunning 3D animations for your project",
      seller: "Sandip Roy",
      rating: 4.9,
      reviews: 156,
      price: 2000,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "video",
      isOnline: true,
    },
  ];

  const chats = [
    {
      id: 1,
      user: "Rony Sarkar",
      lastMessage: "Thanks for choosing my service!",
      time: "2 min ago",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      user: "Sankar Das",
      lastMessage: "I can start working on your project tomorrow",
      time: "1 hour ago",
      unread: 0,
      online: false,
    },
    {
      id: 3,
      user: "Raj",
      lastMessage: "Could you provide more details about the content?",
      time: "3 hours ago",
      unread: 1,
      online: true,
    },
  ];

  const filteredGigs = gigs.filter((gig) => {
    const matchesCategory =
      activeCategory === "all" || gig.category === activeCategory;
    const matchesSearch =
      gig.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gig.seller.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const Header = () => (
    <header className="bg-white/92 backdrop-blur-sm shadow-sm border-b border-gray-200/80 sticky top-0 z-50 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Row */}
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Left Section - Mobile Menu + Logo */}
          <div className=" flex items-center">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group p-2 rounded-xl text-gray-500 hover:text-gray-900 hover:bg-gray-100/80 transition-all duration-200 active:scale-95 ml-0 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <div className="relative w-6 h-6">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 transform transition-transform duration-200" />
                ) : (
                  <Menu className="w-6 h-6 transform transition-transform duration-200 group-hover:scale-110 " />
                )}
              </div>
            </button>
          </div>
          {/* Logo */}
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 ">
              <img
                src={Ficon}
                alt="Logo"
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 rounded-full"
              />
            </div>

            <div className=" hidden sm:block">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent tracking-tight">
                FreelanCo
              </h1>
              <p className="text-xs text-gray-500 font-medium -mt-1">
                Professional Services
              </p>
            </div>
          </div>

          {/* Center Section - Desktop Search */}
          <div className="hidden lg:flex items-center flex-1 max-w-xl xl:max-w-2xl mx-8 ">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-200" />
              </div>
              <input
                ref={desktopSearchRef}
                id="search"
                name="search"
                type="text"
                placeholder="Search for services, freelancers, or projects..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  // Keep focus
                  setTimeout(() => {
                    if (desktopSearchRef.current) {
                      desktopSearchRef.current.focus();
                    }
                  }, 0);
                }}
                className="w-full pl-12 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all duration-200 placeholder-gray-500 text-gray-900"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 shrink-0">
            {isAuthenticated ? (
              <>
                <button
                  className="group p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100/80 rounded-xl transition-all duration-200 lg:hidden active:scale-95"
                  aria-label="Search"
                >
                  <Search className=" w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
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
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-200 cursor-pointer" />
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg">
                    2
                  </span>
                </button>

                {/* Profile Dropdown */}
                <div className="relative">
                  <button className="group flex items-center space-x-3 p-2 pl-3 pr-4 rounded-xl hover:bg-gray-100/80 transition-all duration-200 active:scale-95">
                    <div className="relative">
                      <img
                        src="https://media.licdn.com/dms/image/v2/D4D03AQG8EP6RND5mkQ/profile-displayphoto-shrink_400_400/B4DZabtxhlGcAg-/0/1746369191269?e=1757548800&v=beta&t=hejBItHS3cyWIDnoAfLqu07DMGgiso6TqOG5zBaP8WQ"
                        alt="Profile"
                        className="w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-gray-200 group-hover:ring-emerald-500 transition-all duration-200"
                      />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full ring-2 ring-white"></div>
                    </div>
                    <div className="hidden sm:block text-left">
                      <p className="text-sm font-semibold text-gray-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-gray-500">Pro Member</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-all duration-200 group-hover:rotate-180" />
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-2 sm:space-x-3">
                {/* Search Icon for Non-authenticated Mobile Users */}
                {/* <button
                  className="group p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100/80 rounded-xl transition-all duration-200 lg:hidden active:scale-95"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </button> */}

                {/* Sign In */}
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    setAuthMode("signin");
                  }}
                  className="group px-3 py-2 sm:px-4 sm:py-2.5 text-sm sm:text-base text-gray-700 hover:text-gray-900 cursor-pointer font-semibold rounded-xl bg-gray-50 hover:bg-gray-200/80 transition-all duration-200 active:scale-95 flex items-center"
                >
                  Sign In
                  <LogIn size={18} className="ml-1 mt-0.5" />
                </button>

                {/* Join Button */}
                <button
                  onClick={() => {
                    setShowAuthModal(true);
                    setAuthMode("signup");
                  }}
                  className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-xl text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
                >
                  <span className="relative z-10 cursor-pointer">Join Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500 skew-x-12"></div>
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
              ref={mobileSearchRef}
              id="searchD"
              name="searchD"
              type="text"
              placeholder="Search services, freelancers..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                // Keep focus
                setTimeout(() => {
                  if (mobileSearchRef.current) {
                    mobileSearchRef.current.focus();
                  }
                }, 0);
              }}
              className="w-full pl-12 pr-4 py-3 bg-gray-50/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all duration-200 placeholder-gray-500 text-gray-900"
              autoComplete="off"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {/* {isMobileMenuOpen && (
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
            </nav> */}

      {/* Mobile Menu Footer */}
      {/* <div className="mt-6 pt-6 border-t border-gray-200">
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
      )} */}
    </header>
  );
  const AuthModal = () =>
    showAuthModal && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 ">
        <div className="bg-white rounded-xl max-w-md w-full p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold ">
              {authMode === "signin" ? "Sign In" : "Join FreelanCo"}
            </h2>
            <button
              onClick={() => setShowAuthModal(false)}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
  {authMode === "signup" && (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Full Name
      </label>
      <input
        ref={nameInputRef}
        name="name"
        type="text"
        value={form.name}
        onChange={(e) => {
          setform({ ...form, name: e.target.value });
          setTimeout(() => {
            if (nameInputRef.current) {
              nameInputRef.current.focus();
            }
          }, 0);
        }}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
        placeholder="Enter your full name"
      />
    </div>
  )}

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Email
    </label>
    <input
      ref={emailInputRef}
      name="email"
      type="email"
      value={form.email}
      onChange={(e) => {
        setform({ ...form, email: e.target.value });
        setTimeout(() => {
          if (emailInputRef.current) {
            emailInputRef.current.focus();
          }
        }, 0);
      }}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      placeholder="Enter your email"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Password
    </label>
    <input
      ref={passwordInputRef}
      name="password"
      type="password"
      value={form.password}
      onChange={(e) => {
        setform({ ...form, password: e.target.value });
        setTimeout(() => {
          if (passwordInputRef.current) {
            passwordInputRef.current.focus();
          }
        }, 0);
      }}
      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
      placeholder="Enter your password"
    />
  </div>

  {authMode === "signup" && (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        I want to:
      </label>
      <div className="flex space-x-4">
        <label className="flex items-center">
          <input
            type="radio"
            name="userType"
            value="hire"
            checked={form.userType === "hire"}
            onChange={(e) =>
              setform({ ...form, userType: e.target.value })
            }
            className="mr-2 cursor-pointer bg-teal-600"
          />
          <span className="text-sm">Hire freelancers</span>
        </label>
        <label className="flex items-center">
          <input
            type="radio"
            name="userType"
            value="freelance"
            checked={form.userType === "freelance"}
            onChange={(e) =>
              setform({ ...form, userType: e.target.value })
            }
            className="mr-2 cursor-pointer bg-teal-600"
          />
          <span className="text-sm">Work as freelancer</span>
        </label>
      </div>
    </div>
  )}

  <button
    type="submit"
    className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors cursor-pointer"
  >
    {authMode === "signin" ? "Sign In" : "Create Account"}
  </button>
</form>
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              {authMode === "signin"
                ? "Don't have an account? "
                : "Already have an account? "}
            </span>
            <button
              onClick={() =>
                setAuthMode(authMode === "signin" ? "signup" : "signin")
              }
              className="text-sm text-teal-600 hover:text-teal-700 font-medium cursor-pointer"
            >
              {authMode === "signin" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    );

  const HeroSection = () => (
    <section
      data-scroll-container
      ref={scroll}
      className="bg-teal-50 h-auto py-20 pt-1 w-full"
    >
      <img
        ref={imagehero}
        className="w-full max-w-xl mx-auto h-auto"
        src="https://file.aiquickdraw.com/imgcompressed/img/compressed_4d5cb4e065b8777b40bcfe365f344f79.webp"
        alt="img"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 ref={headerh1} className="text-4xl md:text-6xl font-bold mb-6">
            Find the right <span className="text-teal-700">freelance</span>{" "}
            service, right away
          </h1>
          <p ref={headerp1} className="text-xl md:text-2xl mb-8 text-black">
            Millions of people use FreelanCo to turn their ideas into reality
          </p>
          <div className="flex justify-center">
            <div className="relative max-w-2xl w-full border-10-black">
              <input
                type="text"
                placeholder="Try 'building mobile app'"
                className="w-full px-6 py-4 text-lg text-gray-900 rounded-l-lg focus:outline-none"
              />
              <button className="absolute right-0 top-0 h-full bg-teal-500 hover:bg-teal-600 text-white px-8 rounded-r-lg transition-colors cursor-pointer">
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Categories = () => (
    <section ref={catag} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Browse Services by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 ">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-xl hover:shadow-lg hover:drop-shadow-[4px_14px_12px ] transition-all duration-600 cursor-pointer hover:scale-110 ${
                  activeCategory === category.id ? "ring-2 ring-teal-500" : ""
                }`}
                style={{ backgroundColor: category.color + "20" }}
              >
                <div
                  className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-center">{category.name}</h3>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );

  const GigCard = ({ gig, onViewDetails }) => (
    
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={gig.image}
          alt={gig.title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart size={16} className="text-gray-600" />
        </button>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-3">
          <img
            src={`https://images.unsplash.com/photo-${
              gig.id === 1
                ? "1494790108755-2616c4b6b0a8"
                : "1507003211169-0a1dd7228f2d"
            }?w=40&h=40&fit=crop&crop=face`}
            alt={gig.seller}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div>
            <p className="font-medium text-sm">{gig.seller}</p>
            <div className="flex items-center">
              <div
                className={`w-2 h-2 rounded-full ${
                  gig.isOnline ? "bg-green-500" : "bg-gray-400"
                } mr-2`}
              ></div>
              <span className="text-xs text-gray-500">
                {gig.isOnline ? "Online" : "Offline"}
              </span>
            </div>
          </div>
        </div>

        <h3 className="font-semibold mb-3 text-gray-800 overflow-hidden">
          {gig.title}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="ml-1 text-sm font-medium">{gig.rating}</span>
            <span className="ml-1 text-sm text-gray-500">({gig.reviews})</span>
          </div>
          <div className="text-right">
            <span className="text-sm text-gray-500">Starting From</span>
            <p className="font-bold text-lg flex">
              <IndianRupee size={15} className="mt-1.5"></IndianRupee>
              {gig.price}
            </p>
          </div>
        </div>

        <button 
        onClick={() => onViewDetails(gig)}
        className="w-full mt-4 bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  );

  const GigsList = () => (
    <section ref={gigslst} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h2 className="text-3xl font-bold mb-4 md:mb-0">
            {activeCategory === "all"
              ? "Popular Services"
              : `${
                  categories.find((c) => c.id === activeCategory)?.name ||
                  "Services"
                }`}
          </h2>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
              <Filter size={16} />
              <span>Filter</span>
            </button>
            <button
              onClick={() => setActiveCategory("all")}
              className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
            >
              Show All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredGigs.map((gig) => (
            <GigCard key={gig.id} gig={gig} onViewDetails={handleViewDetails} />
          ))}
        </div>
      </div>
    </section>
  );

  const ChatWindow = () =>
    isChatOpen && (
      <div
        className={`fixed bottom-0 right-4 md:w-120 bg-white rounded-t-xl shadow-2xl border-none z-50 ${
          isChatMinimized ? "h-20" : "h-[70vh] w-[80vw]"
        }`}
      >
        <div className="bg-teal-600 text-white p-4 rounded-t-xl flex justify-between items-center ">
          <div className="flex items-center space-x-2">
            <MessageCircle size={20} />
            <span className="font-medium">Messages</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsChatMinimized(!isChatMinimized)}
              className="hover:bg-teal-700 p-1 rounded"
            >
              {isChatMinimized ? (
                <Maximize2 size={16} />
              ) : (
                <Minimize2 size={16} />
              )}
            </button>
            <button
              onClick={() => setIsChatOpen(false)}
              className="hover:bg-green-700 p-1 rounded"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {!isChatMinimized && (
          <div className="flex h-80">
            <div className="w-1/3 border-r border-gray-200">
              <div className="p-3 border-b border-gray-200">
                <input
                  type="text"
                  placeholder="Search chats..."
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="overflow-y-auto h-full">
                {chats.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setActiveChat(chat)}
                    className={`w-full p-3 text-left hover:bg-gray-50 border-b border-gray-100 ${
                      activeChat?.id === chat.id ? "bg-green-50" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="relative">
                          <img
                            src={`https://images.unsplash.com/photo-${
                              chat.id === 1
                                ? "1494790108755-2616c4b6b0a8"
                                : "1507003211169-0a1dd7228f2d"
                            }?w=32&h=32&fit=crop&crop=face`}
                            alt={chat.user}
                            className="w-8 h-8 rounded-full"
                          />
                          {chat.online && (
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {chat.user}
                          </p>
                          <p className="text-xs text-gray-500 truncate">
                            {chat.lastMessage}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xs text-gray-500">
                          {chat.time}
                        </span>
                        {chat.unread > 0 && (
                          <span className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {chat.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              {activeChat ? (
                <>
                  <div className="p-3 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                      <img
                        src={`https://images.unsplash.com/photo-${
                          activeChat.id === 1
                            ? "1494790108755-2616c4b6b0a8"
                            : "1507003211169-0a1dd7228f2d"
                        }?w=32&h=32&fit=crop&crop=face`}
                        alt={activeChat.user}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <p className="font-medium text-sm">{activeChat.user}</p>
                        <p className="text-xs text-gray-500">
                          {activeChat.online ? "Online" : "Offline"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 p-3 overflow-y-auto flex-wrap">
                    <div className="space-y-3">
                      <div className="flex justify-start">
                        <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-xs">
                          <p className="text-xs">{activeChat.lastMessage}</p>
                        </div>
                      </div>
                      <div className="flex justify-end ">
                        <div className="bg-teal-500 text-white rounded-lg px-3 py-2 max-w-xs">
                          <p className="text-sm">
                            That sounds great! When can you start?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <input
                      ref={chatInputRef}
                        type="text"
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                      <button
                        onClick={() => setChatMessage("")}
                        className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700 cursor-pointer"
                      >
                        <Send size={16} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <MessageSquare
                      size={48}
                      className="mx-auto mb-4 text-gray-300"
                    />
                    <p>Select a chat to start messaging</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );

  const AdminDashboard = () => (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
          </div>
          <nav className="mt-6">
            <div className="px-6 py-3 text-gray-600 hover:bg-gray-100 cursor-pointer flex items-center">
              <BarChart3 size={20} className="mr-3" />
              Dashboard
            </div>
            <div className="px-6 py-3 text-gray-600 hover:bg-gray-100 cursor-pointer flex items-center">
              <Users size={20} className="mr-3" />
              Users
            </div>
            <div className="px-6 py-3 text-gray-600 hover:bg-gray-100 cursor-pointer flex items-center">
              <Package size={20} className="mr-3" />
              Gigs
            </div>
            <div className="px-6 py-3 text-gray-600 hover:bg-gray-100 cursor-pointer flex items-center">
              <IndianRupee size={20} className="mr-3" />
              Earnings
            </div>
            <div className="px-6 py-3 text-gray-600 hover:bg-gray-100 cursor-pointer flex items-center">
              <Settings size={20} className="mr-3" />
              Settings
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Dashboard Overview
            </h1>
            <p className="text-gray-600">Welcome back, Admin!</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-2xl font-bold text-gray-800">12,345</p>
                </div>
                <Users size={32} className="text-blue-500" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Active Gigs</p>
                  <p className="text-2xl font-bold text-gray-800">1,234</p>
                </div>
                <Package size={32} className="text-green-500" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Earnings</p>
                  <p className="text-2xl font-bold text-gray-800">$45,678</p>
                </div>
                <IndianRupee size={32} className="text-yellow-500" />
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Growth Rate</p>
                  <p className="text-2xl font-bold text-gray-800">+12%</p>
                </div>
                <TrendingUp size={32} className="text-purple-500" />
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Recent Users</h3>
              <div className="space-y-3">
                {[
                  {
                    name: "Sankar Das",
                    email: "das@gmail.com",
                    joined: "2 hours ago",
                  },
                  {
                    name: "Hasanur",
                    email: "hasa@gmailcom",
                    joined: "4 hours ago",
                  },
                  { name: "Raj", email: "raj@gmail.com", joined: "1 day ago" },
                ].map((user, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2 border-b border-gray-100"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={`https://images.unsplash.com/photo-${
                          index === 0
                            ? "1472099645785-5658abf4ff4e"
                            : index === 1
                            ? "1494790108755-2616c4b6b0a8"
                            : "1507003211169-0a1dd7228f2d"
                        }?w=40&h=40&fit=crop&crop=face`}
                        alt={user.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{user.joined}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">Recent Gigs</h3>
              <div className="space-y-3">
                {gigs.slice(0, 3).map((gig) => (
                  <div
                    key={gig.id}
                    className="flex items-center justify-between py-2 border-b border-gray-100"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={gig.image}
                        alt={gig.title}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div>
                        <p className="font-medium overflow-hidden">
                          {gig.title}
                        </p>
                        <p className="text-sm text-gray-500">by {gig.seller}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-green-600">
                      ${gig.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Sidebar Component
  const Sidebar = () => (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      }  transition duration-200 ease-in-out z-30 w-64 bg-white shadow-lg`}
    >
      <div className="p-6"></div>
      <nav className="mt-25 sm:mt-12">
        <button
          onClick={() => {
            setCurrentView("home");
            setIsMobileMenuOpen(false);
          }}
          className={`w-full px-6 py-3 text-left hover:bg-gray-100 flex items-center cursor-pointer ${
            currentView === "home"
              ? "bg-green-50 text-green-700"
              : "text-gray-600"
          }`}
        >
          <Home size={20} className="mr-3 text-teal-700" />
          Home
        </button>
        {isAuthenticated && (
          <>
            <button
              onClick={() => {
                setCurrentView("dashboard");
                setIsMobileMenuOpen(false);
              }}
              className={`w-full px-6 py-3 text-left hover:bg-gray-100 flex items-center cursor-pointer ${
                currentView === "dashboard"
                  ? "bg-green-50 text-teal-700"
                  : "text-gray-600"
              }`}
            >
              <BarChart3 size={20} className="mr-3 text-teal-700" />
              Dashboard
            </button>
            <button
              onClick={() => {
                setCurrentView("messages");
                setIsMobileMenuOpen(false);
              }}
              className={`w-full px-6 py-3 text-left hover:bg-gray-100 flex items-center cursor-pointer ${
                currentView === "messages"
                  ? "bg-green-50 text-teal-600"
                  : "text-gray-600"
              }`}
            >
              <Mail size={20} className="mr-3 text-teal-700" />
              Messages
            </button>
            {isAdmin && (
              <button
                onClick={() => {
                  setCurrentView("admin");
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full px-6 py-3 text-left hover:bg-gray-100 flex items-center ${
                  currentView === "admin"
                    ? "bg-green-50 text-teal-600"
                    : "text-gray-600"
                }`}
              >
                <Settings size={20} className="mr-3 text-teal-700" />
                Admin Panel
              </button>
            )}
            <button
              onClick={() => {
                setIsAuthenticated(false);
                setCurrentView("home");
                setIsMobileMenuOpen(false);
              }}
              className="w-full px-6 py-3 text-left hover:bg-gray-100 flex items-center text-gray-600 cursor-pointer"
            >
              <LogOut size={20} className="mr-3 text-teal-700" />
              Sign Out
            </button>
            <button
              onClick={() => {
                setIsAuthenticated(true);
                setCurrentView("home");
                setIsMobileMenuOpen(true);
                setShowGigForm(true);
              }}
              className="w-full px-6 py-3 text-left hover:bg-gray-100 flex items-center text-gray-600 cursor-pointer"
            >
              <Plus size={20} className="mr-3 text-teal-700" />
            Add You as a Gig
            </button>
     
          </>
        )}
      </nav>
    </div>
  );

  const HomeContent = () => (
    <>
      <HeroSection />
      <Categories />
      <GigsList />
      {showGigForm && <GigSubmissionForm />}

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why choose FreelanCo?</h2>
            <p className="text-xl text-gray-600">The best for every budget</p>
          </div>

          <div ref={feat} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure payments</h3>
              <p className="text-gray-600">
                Your payment is held securely until you approve the work
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 support</h3>
              <p className="text-gray-600">
                Our team is available around the clock to help you
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality guaranteed</h3>
              <p className="text-gray-600">
                Find the right freelancer for your project every time
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderContent = () => {
    switch (currentView) {
      case "admin":
        return isAdmin ? <AdminDashboard /> : <HomeContent />;
      case "dashboard":
        return isAuthenticated ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">My Gigs</h3>
                <p className="text-2xl font-bold text-teal-600">5</p>
                <p className="text-sm text-gray-500">Active gigs</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Total Earnings</h3>
                <p className="text-2xl font-bold text-teal-600">
                  {" "}
                  <IndianRupee
                    size={22}
                    className="inline-block mb-1"
                  ></IndianRupee>{" "}
                  2,450
                </p>
                <p className="text-sm text-gray-500">This month</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Orders</h3>
                <p className="text-2xl font-bold text-teal-600">23</p>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
            </div>
          </div>
        ) : (
          <HomeContent />
        );
      case "messages":
        return isAuthenticated ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold mb-8">Messages</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-500">Your messages will appear here.</p>
            </div>
          </div>
        ) : (
          <HomeContent />
        );
      default:
        return <HomeContent />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <AuthModal />

      <div className="flex">
        <Sidebar />
        <div className="flex-1 ">{renderContent()}</div>
      </div>

      <ChatWindow />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">FreelanCo</h3>
              <p className="text-gray-400">
                The world's marketplace for creative and professional services.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Graphics & Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Programming & Tech
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Writing & Translation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Digital Marketing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Trust & Safety
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Globe
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <MessageCircle
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
                <Mail
                  size={20}
                  className="text-gray-400 hover:text-white cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 FreelanCo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FreelancerWebsite;
