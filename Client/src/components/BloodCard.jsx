import React from 'react';

const BloodCard = ({ donor }) => {
  return (
    <div className="bg-white border border-gray-100 p-6 rounded-3xl hover:shadow-2xl transition-all group">
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-red-200">
          {donor.group}
        </div>
        <span className="flex items-center gap-1 text-green-500 text-[10px] font-black uppercase bg-green-50 px-2 py-1 rounded-md">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span> Available
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-1">{donor.name}</h3>
      
      <div className="space-y-2 mb-6 text-sm text-gray-500">
        <div className="flex items-center gap-2">
          {/* Location Pin Icon */}
          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          {donor.location}
        </div>
        <div className="flex items-center gap-2">
          {/* Phone Icon */}
          <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1v3.5c0 .35-.08.7-.24 1.02l-2.2 2.2z"/></svg>
          {donor.phone}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2">
        <a href={`tel:${donor.phone}`} className="bg-red-600 text-white text-center py-3 rounded-xl font-bold hover:bg-black transition-all">
          Call Now
        </a>
      </div>
    </div>
  );
};

export default BloodCard;