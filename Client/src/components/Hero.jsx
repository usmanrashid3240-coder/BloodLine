import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-slate-900">
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Professional Hospital"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto flex items-center px-6 md:px-12">
        <div className="max-w-2xl text-white transition-all duration-700 ease-out">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-snug tracking-tighter uppercase italic">
            Every Drop <br />
            <span className="text-red-500 font-extrabold">
              Saves A Life.
            </span>
          </h2>

          <p className="text-lg sm:text-xl mb-10 opacity-90 font-medium max-w-lg leading-relaxed">
            Pakistan's most trusted emergency blood donation platform.
            Connecting verified heroes with patients in seconds.
          </p>

          <div className="flex gap-4">
            <Link
              to="/search"
              className="bg-red-600 text-white px-10 py-5 rounded-2xl 
                         font-bold uppercase text-xs tracking-widest 
                         shadow-lg transition-transform duration-300 
                         hover:bg-red-700 hover:scale-105 active:scale-95"
            >
              Find A Donor
            </Link>

            <Link
              to="/register"
              className="bg-white/10 backdrop-blur-md border border-white/20 
                         text-white px-10 py-5 rounded-2xl 
                         font-bold uppercase text-xs tracking-widest 
                         transition-transform duration-300 
                         hover:bg-white/20 hover:scale-105 active:scale-95"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
