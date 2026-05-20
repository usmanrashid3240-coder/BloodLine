import React, { useState } from 'react';

const ModernSearch = ({ onSearchChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={searchWrapper}>
      <div style={{
        ...searchBox,
        width: isFocused ? '600px' : '450px',
        borderColor: isFocused ? '#e63946' : 'rgba(0,0,0,0.1)'
      }}>
        <span style={searchIcon}>🔍</span>
        <input
          type="text"
          placeholder="Search by city, name, or blood group..."
          style={searchInput}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <div style={badge}>
          <span style={keyCap}>ALT</span> + <span style={keyCap}>S</span>
        </div>
      </div>
    </div>
  );
};

const searchWrapper = { display: 'flex', justifyContent: 'center', margin: '40px 0' };
const searchBox = {
  display: 'flex', alignItems: 'center', padding: '12px 25px',
  background: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(10px)',
  borderRadius: '30px', border: '1px solid', transition: 'all 0.4s ease',
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
};
const searchInput = {
  border: 'none', background: 'transparent', width: '100%',
  outline: 'none', fontSize: '16px', fontWeight: '500', padding: '0 15px'
};
const searchIcon = { fontSize: '20px', opacity: 0.5 };
const badge = { display: 'flex', gap: '5px', opacity: 0.4, fontSize: '10px' };
const keyCap = { background: '#eee', padding: '2px 6px', borderRadius: '5px', border: '1px solid #ccc' };

export default ModernSearch;