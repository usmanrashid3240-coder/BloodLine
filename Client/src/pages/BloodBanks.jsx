// import React, { useState } from 'react';

// const BloodBanks = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const banks = [
//     { name: "Sundas Foundation", city: "Lahore", phone: "042-37422131", address: "Shadman, Lahore", status: "Open 24/7" },
//     { name: "Fatimid Foundation", city: "Karachi", phone: "021-32225284", address: "Garden West, Karachi", status: "Open 24/7" },
//     { name: "Red Crescent (Hilal-e-Ahmar)", city: "Islamabad", phone: "051-9250404", address: "H-8, Islamabad", status: "Open 24/7" },
//     { name: "Shaukat Khanum Blood Bank", city: "Lahore", phone: "042-35905000", address: "Johar Town, Lahore", status: "Limited Hours" },
//     { name: "Indus Hospital Blood Center", city: "Karachi", phone: "021-35112709", address: "Korangi, Karachi", status: "Open 24/7" },
//   ];

//   const filteredBanks = banks.filter(bank => 
//     bank.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     bank.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div style={pageWrapper}>
//       {/* 1. Header Section */}
//       <div style={headerSection}>
//         <div style={pill}>🏥 Certified Network</div>
//         <h1 style={mainTitle}>Blood Banks <span style={{color: '#e63946'}}>Directory</span></h1>
//         <p style={subTitle}>Access the list of verified blood banks across Pakistan for urgent needs.</p>
        
//         {/* Modern Search Bar */}
//         <div style={searchBarWrapper}>
//           <input 
//             type="text" 
//             placeholder="Search by city or bank name..." 
//             style={searchField}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* 2. Content Grid */}
//       <div style={gridContainer}>
//         {filteredBanks.length > 0 ? (
//           filteredBanks.map((bank, index) => (
//             <div key={index} style={bankCard}>
//               <div style={cardHeader}>
//                 <span style={statusTag}>{bank.status}</span>
//                 <div style={iconCircle}>🏢</div>
//               </div>
//               <h3 style={bankTitle}>{bank.name}</h3>
//               <div style={detailRow}>📍 <span>{bank.address}</span></div>
//               <div style={detailRow}>📞 <span>{bank.phone}</span></div>
              
//               <button 
//                 onClick={() => window.location.href = `tel:${bank.phone}`}
//                 style={actionBtn}
//               >
//                 Contact Now
//               </button>
//             </div>
//           ))
//         ) : (
//           <div style={{textAlign: 'center', width: '100%', color: '#999'}}>No banks found in this city.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// /* ================= PREMIMUM STYLES ================= */

// const pageWrapper = {
//   minHeight: '100vh',
//   padding: '120px 20px 60px',
//   background: '#fcfcfc',
//   fontFamily: "'Inter', sans-serif"
// };

// const headerSection = {
//   textAlign: 'center',
//   maxWidth: '800px',
//   margin: '0 auto 60px'
// };

// const pill = {
//   display: 'inline-block',
//   padding: '6px 16px',
//   background: '#fee2e2',
//   color: '#e63946',
//   borderRadius: '20px',
//   fontSize: '12px',
//   fontWeight: 'bold',
//   marginBottom: '20px',
//   textTransform: 'uppercase'
// };

// const mainTitle = {
//   fontSize: '48px',
//   fontWeight: '900',
//   color: '#111',
//   margin: '0 0 15px',
//   letterSpacing: '-1.5px'
// };

// const subTitle = {
//   color: '#64748b',
//   fontSize: '18px',
//   lineHeight: '1.6'
// };

// const searchBarWrapper = {
//   marginTop: '30px',
//   display: 'flex',
//   justifyContent: 'center'
// };

// const searchField = {
//   width: '100%',
//   maxWidth: '500px',
//   padding: '18px 25px',
//   borderRadius: '20px',
//   border: '1px solid #e2e8f0',
//   background: '#fff',
//   boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
//   outline: 'none',
//   fontSize: '16px'
// };

// const gridContainer = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
//   gap: '30px',
//   maxWidth: '1200px',
//   margin: '0 auto'
// };

// const bankCard = {
//   background: '#fff',
//   padding: '35px',
//   borderRadius: '35px',
//   border: '1px solid #f1f5f9',
//   boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
//   transition: 'transform 0.3s ease',
//   cursor: 'default',
//   ':hover': { transform: 'translateY(-10px)' }
// };

// const cardHeader = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'flex-start',
//   marginBottom: '20px'
// };

// const statusTag = {
//   fontSize: '11px',
//   fontWeight: 'bold',
//   color: '#22c55e',
//   background: '#f0fdf4',
//   padding: '4px 10px',
//   borderRadius: '10px'
// };

// const iconCircle = {
//   width: '50px',
//   height: '50px',
//   background: '#f8fafc',
//   borderRadius: '15px',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: '24px'
// };

// const bankTitle = { fontSize: '22px', fontWeight: '800', margin: '0 0 15px', color: '#1e293b' };

// const detailRow = {
//   display: 'flex',
//   gap: '10px',
//   color: '#64748b',
//   fontSize: '14px',
//   marginBottom: '8px'
// };

// const actionBtn = {
//   width: '100%',
//   marginTop: '20px',
//   padding: '16px',
//   background: '#111',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '16px',
//   fontWeight: 'bold',
//   cursor: 'pointer',
//   transition: '0.3s'
// };

// export default BloodBanks;
import React, { useState } from 'react';

const BloodBanks = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const banks = [
    { name: "Sundas Foundation", city: "Lahore", phone: "042-37422131", address: "Shadman, Lahore", status: "Open 24/7" },
    { name: "Fatimid Foundation", city: "Karachi", phone: "021-32225284", address: "Garden West, Karachi", status: "Open 24/7" },
    { name: "Red Crescent (Hilal-e-Ahmar)", city: "Islamabad", phone: "051-9250404", address: "H-8, Islamabad", status: "Open 24/7" },
    { name: "Shaukat Khanum Blood Bank", city: "Lahore", phone: "042-35905000", address: "Johar Town, Lahore", status: "Limited Hours" },
    { name: "Indus Hospital Blood Center", city: "Karachi", phone: "021-35112709", address: "Korangi, Karachi", status: "Open 24/7" },
  ];

  const filteredBanks = banks.filter(bank =>
    bank.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    bank.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.pageWrapper}>

      {/* HEADER */}
      <div style={styles.headerSection}>
        <div style={styles.pill}>🏥 Certified Network</div>

        <h1 style={styles.mainTitle}>
          Blood Banks <span style={styles.red}>Directory</span>
        </h1>

        <p style={styles.subTitle}>
          Access verified blood banks across Pakistan.
        </p>

        {/* SEARCH */}
        <div style={styles.searchBarWrapper}>
          <input
            type="text"
            placeholder="Search by city or bank name..."
            style={styles.searchField}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* GRID */}
      <div style={styles.gridContainer}>
        {filteredBanks.length > 0 ? (
          filteredBanks.map((bank, index) => (
            <div key={index} style={styles.bankCard}>

              <div style={styles.cardHeader}>
                <span style={styles.statusTag}>{bank.status}</span>
                <div style={styles.iconCircle}>🏢</div>
              </div>

              <h3 style={styles.bankTitle}>{bank.name}</h3>

              <div style={styles.detailRow}>📍 <span>{bank.address}</span></div>
              <div style={styles.detailRow}>📞 <span>{bank.phone}</span></div>

              <button
                onClick={() => window.location.href = `tel:${bank.phone}`}
                style={styles.actionBtn}
              >
                Contact Now
              </button>

            </div>
          ))
        ) : (
          <div style={styles.noData}>No banks found.</div>
        )}
      </div>

    </div>
  );
};

/* ================= RESPONSIVE STYLES ================= */

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    padding: '80px 16px',
    background: '#fcfcfc',
    fontFamily: "'Inter', sans-serif",
    overflowX: 'hidden'
  },

  headerSection: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 40px'
  },

  pill: {
    display: 'inline-block',
    padding: '6px 14px',
    background: '#fee2e2',
    color: '#e63946',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: 'bold',
    marginBottom: '16px',
    textTransform: 'uppercase'
  },

  mainTitle: {
    fontSize: 'clamp(26px, 5vw, 48px)',
    fontWeight: '900',
    color: '#111',
    marginBottom: '12px'
  },

  red: {
    color: '#e63946'
  },

  subTitle: {
    color: '#64748b',
    fontSize: '16px',
    lineHeight: '1.6'
  },

  searchBarWrapper: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'center'
  },

  searchField: {
    width: '100%',
    maxWidth: '500px',
    padding: '14px 18px',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    fontSize: '15px'
  },

  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '18px',
    maxWidth: '1200px',
    margin: '0 auto'
  },

  bankCard: {
    background: '#fff',
    padding: '22px',
    borderRadius: '24px',
    border: '1px solid #f1f5f9',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
  },

  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px'
  },

  statusTag: {
    fontSize: '10px',
    fontWeight: 'bold',
    color: '#22c55e',
    background: '#f0fdf4',
    padding: '4px 8px',
    borderRadius: '8px'
  },

  iconCircle: {
    width: '40px',
    height: '40px',
    background: '#f8fafc',
    borderRadius: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px'
  },

  bankTitle: {
    fontSize: '18px',
    fontWeight: '800',
    marginBottom: '10px',
    color: '#1e293b'
  },

  detailRow: {
    fontSize: '13px',
    color: '#64748b',
    marginBottom: '6px'
  },

  actionBtn: {
    width: '100%',
    marginTop: '14px',
    padding: '12px',
    background: '#111',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontWeight: 'bold',
    fontSize: '13px'
  },

  noData: {
    textAlign: 'center',
    color: '#999',
    width: '100%'
  }
};

export default BloodBanks;