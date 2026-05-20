import React from 'react';
import { useNavigate } from 'react-router-dom'; // Navigation ke liye

const Footer = () => {
  const navigate = useNavigate(); // Navigation function

  return (
    <footer className="relative bg-[#0B0C0E] text-white pt-24 pb-12 px-10 border-t border-white/5 overflow-hidden font-sans">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* 1. Brand & Newsletter */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-8 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-2xl">❤️</span>
              </div>
              <h2 className="text-3xl font-[1000] tracking-tighter uppercase italic">
                Blood<span className="text-red-500">Line</span>
              </h2>
            </div>
            <p className="text-white text-lg mb-8 leading-relaxed">
              Every drop counts. Join our mission to make Pakistan blood-sufficient.
            </p>
            {/* Minimal Newsletter */}
            <div className="relative max-w-sm">
              <input 
                type="email" 
                placeholder="Update and Type E-mail" 
                className="w-full bg-white/5 border border-white/10 py-4 px-6 rounded-2xl outline-none focus:border-red-600 transition-all text-sm"
              />
              <button 
                onClick={() => alert("Subscribed to Newsletter!")}
                className="absolute right-2 top-2 bottom-2 bg-red-600 px-4 rounded-xl hover:bg-red-700 transition-colors text-xs font-black uppercase"
              >
                Join
              </button>
            </div>
          </div>

          {/* 2. Quick Links & Hours */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-red-500 mb-8">Navigation</h4>
              <ul className="space-y-4">
                <li 
                  onClick={() => navigate('/search')}
                  className="flex items-center gap-3 text-white font-bold text-sm hover:text-red-500 transition-all cursor-pointer group"
                >
                  <span className="text-[10px]">🔴</span> Find a Donor
                </li>
                <li 
                  onClick={() => navigate('/register')}
                  className="flex items-center gap-3 text-white font-bold text-sm hover:text-red-500 transition-all cursor-pointer group"
                >
                  <span className="text-[10px]">⚪</span> Register as Donor
                </li>
                <li 
                  onClick={() => navigate('/blood-banks')}
                  className="flex items-center gap-3 text-white font-bold text-sm hover:text-red-500 transition-all cursor-pointer group"
                >
                  <span className="text-[10px]">⚪</span> Blood Banks List
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-red-500 mb-8">Availability</h4>
              <ul className="space-y-4 text-white font-bold text-sm">
                <li className="flex justify-between"><span>Mon - Sun</span> <span className="text-green-500">24 Hours</span></li>
                <li className="flex justify-between"><span>Support</span> <span className="text-white">Active</span></li>
                <li className="mt-6 flex items-center gap-2 text-white">
                    📍 <span className="text-xs uppercase tracking-widest">Lahore, Pakistan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Massive Action Card */}
          <div className="lg:col-span-3">
             <div className="bg-gradient-to-br from-[#1A1F26] to-[#0B0C0E] border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative group">
                <h4 className="text-[10px] font-black uppercase tracking-widest mb-4 text-slate-500">Emergency Line</h4>
                <a href="tel:080078601" className="text-white text-3xl font-[1000] tracking-tighter mb-6 group-hover:text-red-500 transition-colors block">0800-78601</a>
                <div className="flex gap-3">
                  <div onClick={() => window.open('https://facebook.com', '_blank')} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">📘</div>
                  <div onClick={() => window.open('https://instagram.com', '_blank')} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">📸</div>
                  <div onClick={() => window.open('https://twitter.com', '_blank')} className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-sky-500 transition-colors cursor-pointer">🐦</div>
                </div>
             </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-ping "></div>
             <p className="text-white text-[10px] font-black uppercase tracking-[0.4em] ">All Systems Operational</p>
          </div>
          <div className="flex gap-8 text-slate-500 text-[9px] font-black uppercase tracking-widest">
            <span onClick={() => navigate('/privacy')} className="text-white cursor-pointer hover:text-red-500 transition-all tracking-[0.3em]">Privacy</span>
            <span onClick={() => navigate('/terms')} className="text-white cursor-pointer hover:text-red-500 transition-all">Terms</span>
            <span onClick={() => navigate('/cookies')} className="text-white cursor-pointer hover:text-red-500 transition-all">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;