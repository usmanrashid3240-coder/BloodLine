import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-black shadow-2xl px-10 py-5">
      {/* 3-Column Grid for Perfect Alignment */}
      <div className="max-w-[1800px] mx-auto grid grid-cols-3 items-center">
        
        {/* 1. LEFT: Logo */}
        <div className="justify-self-start">
          <Link to="/" className="text-3xl font-[1000] italic uppercase tracking-tighter text-white">
            Blood<span className="text-red-600 drop-shadow-sm">Line❤️</span>
          </Link>
        </div>

        {/* 2. MIDDLE: Navigation Links with Hover Line */}
        <div className="justify-self-center hidden lg:flex gap-10 font-black uppercase text-[11px] tracking-[0.3em] text-white/80">
          {[
            { name: 'Home', path: '/' },
            { name: 'Find Donor', path: '/search' },
            { name: 'About Us', path: '/aboutus' },
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="relative group py-2"
            >
              <span className="group-hover:text-red-500 transition-colors duration-300">
                {item.name}
              </span>
              
              {/* Red Underline Animation */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </div>

        {/* 3. RIGHT: Login & Join Now Button */}
        <div className="justify-self-end flex items-center gap-8">
          <Link 
            to="/login" 
            className="text-white text-[11px] font-black uppercase tracking-[0.2em] hover:text-red-500 transition-all duration-300"
          >
            Login
          </Link>
          
          <Link 
            to="/register" 
            className="bg-red-600 text-white px-8 py-3 rounded-xl font-[1000] uppercase text-[10px] tracking-widest hover:bg-white hover:text-red-600 transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)] active:scale-95"
          >
            Join Now
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;