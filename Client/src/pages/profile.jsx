// import React, { useState, useEffect } from 'react';
// import { auth, db } from "../firebase";
// import { doc, getDoc, updateDoc } from 'firebase/firestore';
// import { onAuthStateChanged } from 'firebase/auth';

// const Profile = () => {
//   const [userData, setUserData] = useState({ name: '', bloodGroup: '', city: '', phone: '' });
//   const [loading, setLoading] = useState(true);
//   const [updating, setUpdating] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         const userRef = doc(db, "users", user.uid);
//         const userSnap = await getDoc(userRef);
//         if (userSnap.exists()) {
//           setUserData(userSnap.data());
//         }
//       }
//       setLoading(false);
//     });
//     return () => unsubscribe();
//   }, []);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setUpdating(true);
//     try {
//       const userRef = doc(db, "users", auth.currentUser.uid);
//       await updateDoc(userRef, userData);
//       alert("Profile Saved! ✨");
//     } catch (err) {
//       alert("Error: " + err.message);
//     }
//     setUpdating(false);
//   };

//   if (loading) return <div style={loaderStyle}>Loading...</div>;

//   return (
//     <div style={container}>
//       <div style={glassCard}>
//         {/* Profile Header */}
//         <div style={headerSection}>
//           <div style={avatarCircle}>
//             {userData.name?.charAt(0).toUpperCase()}
//             <div style={onlineDot}></div>
//           </div>
//           <h2 style={userName}>{userData.name}</h2>
//           <p style={userEmail}>{auth.currentUser?.email}</p>
//           <div style={bloodTag}>{userData.bloodGroup} Donor</div>
//         </div>

//         {/* Update Form */}
//         <form onSubmit={handleUpdate} style={formStyle}>
//           <div style={inputGrid}>
//             <div style={field}>
//               <label style={label}>Full Name</label>
//               <input type="text" style={input} value={userData.name} 
//                 onChange={(e) => setUserData({...userData, name: e.target.value})} />
//             </div>

//             <div style={field}>
//               <label style={label}>Blood Group</label>
//               <select style={input} value={userData.bloodGroup} 
//                 onChange={(e) => setUserData({...userData, bloodGroup: e.target.value})}>
//                 {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(bg => (
//                   <option key={bg} value={bg}>{bg}</option>
//                 ))}
//               </select>
//             </div>

//             <div style={field}>
//               <label style={label}>Current City</label>
//               <input type="text" style={input} value={userData.city} 
//                 onChange={(e) => setUserData({...userData, city: e.target.value})} />
//             </div>

//             <div style={field}>
//               <label style={label}>Contact Number</label>
//               <input type="tel" style={input} value={userData.phone} 
//                 onChange={(e) => setUserData({...userData, phone: e.target.value})} />
//             </div>
//           </div>

//           <button type="submit" style={saveBtn} disabled={updating}>
//             {updating ? "Saving Changes..." : "Save Profile Details"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// /* ================= MODERN STYLES ================= */

// const container = {
//   minHeight: '100vh',
//   background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   padding: '40px 20px'
// };

// const glassCard = {
//   background: 'rgba(255, 255, 255, 0.95)',
//   backdropFilter: 'blur(10px)',
//   width: '100%',
//   maxSize: '550px',
//   maxWidth: '550px',
//   borderRadius: '40px',
//   padding: '50px',
//   boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
//   border: '1px solid #fff'
// };

// const headerSection = {
//   textAlign: 'center',
//   marginBottom: '40px'
// };

// const avatarCircle = {
//   width: '100px',
//   height: '100px',
//   background: 'linear-gradient(45deg, #e63946, #b91c1c)',
//   color: '#fff',
//   borderRadius: '35px',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   fontSize: '40px',
//   fontWeight: '800',
//   margin: '0 auto',
//   position: 'relative',
//   boxShadow: '0 10px 20px rgba(230, 57, 70, 0.3)'
// };

// const onlineDot = {
//   width: '18px',
//   height: '18px',
//   background: '#22c55e',
//   border: '3px solid #fff',
//   borderRadius: '50%',
//   position: 'absolute',
//   bottom: '-2px',
//   right: '-2px'
// };

// const userName = { margin: '20px 0 5px', fontSize: '28px', color: '#1a1a1a' };
// const userEmail = { color: '#64748b', fontSize: '15px', marginBottom: '15px' };

// const bloodTag = {
//   display: 'inline-block',
//   padding: '6px 16px',
//   background: '#fee2e2',
//   color: '#e63946',
//   borderRadius: '20px',
//   fontSize: '13px',
//   fontWeight: 'bold'
// };

// const formStyle = { display: 'flex', flexDirection: 'column', gap: '25px' };
// const inputGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
// const field = { display: 'flex', flexDirection: 'column', gap: '8px' };
// const label = { fontSize: '13px', fontWeight: '700', color: '#475569', marginLeft: '4px' };

// const input = {
//   padding: '14px 18px',
//   borderRadius: '16px',
//   border: '1px solid #e2e8f0',
//   background: '#f8fafc',
//   fontSize: '15px',
//   outline: 'none',
//   transition: '0.2s',
//   '&:focus': { borderColor: '#e63946', background: '#fff' }
// };

// const saveBtn = {
//   marginTop: '10px',
//   padding: '18px',
//   background: '#1a1a1a',
//   color: '#fff',
//   border: 'none',
//   borderRadius: '18px',
//   fontWeight: '700',
//   fontSize: '16px',
//   cursor: 'pointer',
//   transition: '0.3s'
// };

// const loaderStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '20px', fontWeight: 'bold' };

// export default Profile;

import React, { useState, useEffect } from 'react';
import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const Profile = () => {
  const [userData, setUserData] = useState({ name: '', bloodGroup: '', city: '', phone: '' });
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      const userRef = doc(db, "users", auth.currentUser.uid);
      await updateDoc(userRef, userData);
      alert("Profile Saved! ✨");
    } catch (err) {
      alert("Error: " + err.message);
    }

    setUpdating(false);
  };

  if (loading) return <div style={loaderStyle}>Loading...</div>;

  return (
    <div style={container}>

      <style>{`
        *{
          box-sizing:border-box;
        }

        .profile-card{
          background:rgba(255,255,255,0.95);
          backdrop-filter:blur(10px);
          width:100%;
          max-width:550px;
          border-radius:40px;
          padding:50px;
          box-shadow:0 25px 50px -12px rgba(0,0,0,0.08);
          border:1px solid #fff;
        }

        .input-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:20px;
        }

        input, select{
          padding:14px 18px;
          border-radius:16px;
          border:1px solid #e2e8f0;
          background:#f8fafc;
          font-size:15px;
          outline:none;
          width:100%;
        }

        button{
          width:100%;
          padding:18px;
          background:#1a1a1a;
          color:#fff;
          border:none;
          border-radius:18px;
          font-weight:700;
          font-size:16px;
          cursor:pointer;
        }

        /* TABLET */
        @media (max-width: 992px){
          .profile-card{
            padding:40px;
            border-radius:30px;
          }

          .input-grid{
            gap:15px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px){
          .profile-card{
            padding:25px;
            border-radius:25px;
          }

          .input-grid{
            grid-template-columns:1fr;
          }

          .user-name{
            font-size:22px !important;
          }

          .avatar{
            width:80px !important;
            height:80px !important;
            font-size:32px !important;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px){
          .profile-card{
            padding:20px;
          }
        }
      `}</style>

      <div style={container}>

        <div className="profile-card">

          {/* HEADER */}
          <div style={{ textAlign:'center', marginBottom:'40px' }}>

            <div style={avatarCircle} className="avatar">
              {userData.name?.charAt(0).toUpperCase()}
              <div style={onlineDot}></div>
            </div>

            <h2 style={userName} className="user-name">
              {userData.name}
            </h2>

            <p style={userEmail}>
              {auth.currentUser?.email}
            </p>

            <div style={bloodTag}>
              {userData.bloodGroup} Donor
            </div>

          </div>

          {/* FORM */}
          <form onSubmit={handleUpdate} style={{ display:'flex', flexDirection:'column', gap:'25px' }}>

            <div className="input-grid">

              <div style={field}>
                <label style={label}>Full Name</label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                />
              </div>

              <div style={field}>
                <label style={label}>Blood Group</label>
                <select
                  value={userData.bloodGroup}
                  onChange={(e) => setUserData({ ...userData, bloodGroup: e.target.value })}
                >
                  {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(bg => (
                    <option key={bg} value={bg}>{bg}</option>
                  ))}
                </select>
              </div>

              <div style={field}>
                <label style={label}>City</label>
                <input
                  type="text"
                  value={userData.city}
                  onChange={(e) => setUserData({ ...userData, city: e.target.value })}
                />
              </div>

              <div style={field}>
                <label style={label}>Phone</label>
                <input
                  type="tel"
                  value={userData.phone}
                  onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                />
              </div>

            </div>

            <button type="submit" disabled={updating}>
              {updating ? "Saving Changes..." : "Save Profile Details"}
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

/* ORIGINAL STYLES (UNCHANGED) */
const container = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px 20px'
};

const avatarCircle = {
  width: '100px',
  height: '100px',
  background: 'linear-gradient(45deg, #e63946, #b91c1c)',
  color: '#fff',
  borderRadius: '35px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '40px',
  fontWeight: '800',
  margin: '0 auto',
  position: 'relative'
};

const onlineDot = {
  width: '18px',
  height: '18px',
  background: '#22c55e',
  border: '3px solid #fff',
  borderRadius: '50%',
  position: 'absolute',
  bottom: '-2px',
  right: '-2px'
};

const userName = { margin: '20px 0 5px', fontSize: '28px', color: '#1a1a1a' };
const userEmail = { color: '#64748b', fontSize: '15px', marginBottom: '15px' };

const bloodTag = {
  display: 'inline-block',
  padding: '6px 16px',
  background: '#fee2e2',
  color: '#e63946',
  borderRadius: '20px',
  fontSize: '13px',
  fontWeight: 'bold'
};

const field = { display: 'flex', flexDirection: 'column', gap: '8px' };
const label = { fontSize: '13px', fontWeight: '700', color: '#475569', marginLeft: '4px' };

const loaderStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontSize: '20px',
  fontWeight: 'bold'
};

export default Profile;