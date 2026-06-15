// import React, { useState } from 'react';
// import { auth, db } from "../firebase";
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { doc, setDoc } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   // Added city and phone to formData
//   const [formData, setFormData] = useState({ 
//     name: '', email: '', password: '', bloodGroup: '', city: '', phone: '' 
//   });
//   const [showPass, setShowPass] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       // 1. Create User in Firebase Auth
//       const res = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      
//       // 2. Update Profile Name
//       await updateProfile(res.user, { displayName: formData.name });

//       // 3. Save full details to Firestore 'users' collection
//       await setDoc(doc(db, "users", res.user.uid), {
//         name: formData.name,
//         email: formData.email,
//         bloodGroup: formData.bloodGroup,
//         city: formData.city, // Necessary for Find Donor filter
//         phone: formData.phone, // Necessary for Call Now button
//         uid: res.user.uid,
//         role: 'donor', // Default role
//         createdAt: new Date()
//       });

//       alert("Account Created Successfully! ❤️");
//       navigate('/dashboard');
//     } catch (err) {
//       alert("Registration Error: " + err.message);
//     }
//     setLoading(false);
//   };

//   return (
//     <div style={container}>
//       <div style={formCard}>
//         {/* Left Side: Branding */}
//         <div style={leftBox}>
//           <h1 style={{ fontSize: '40px', margin: '0', fontWeight: 'bold' }}>
//             BECOME A <br /> <span style={{ color: '#e63946' }}>HERO</span>
//           </h1>
//           <p style={{ opacity: '0.8', marginTop: '10px' }}>Join BloodLine and save lives in your city.</p>
//         </div>

//         {/* Right Side: Registration Form */}
//         <div style={rightBox}>
//           <h2 style={{ fontStyle: 'italic', marginBottom: '20px', fontWeight: 'bold' }}>
//             USER <span style={{ color: '#e63946' }}>REGISTER</span>
//           </h2>

//           <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//             <input 
//               type="text" placeholder="Full Name" style={inputS} required 
//               onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
//             />
            
//             <input 
//               type="email" placeholder="Email" style={inputS} required 
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
//             />

//             <div style={{ display: 'flex', gap: '10px' }}>
//               <select 
//                 style={{ ...inputS, flex: 1 }} required 
//                 onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
//               >
//                 <option value="">Blood Group</option>
//                 {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(bg => (
//                   <option key={bg} value={bg}>{bg}</option>
//                 ))}
//               </select>

//               <input 
//                 type="text" placeholder="City (e.g. Lahore)" style={{ ...inputS, flex: 1 }} required 
//                 onChange={(e) => setFormData({ ...formData, city: e.target.value })} 
//               />
//             </div>

//             <input 
//               type="tel" placeholder="Phone Number (03xxxxxxxxx)" style={inputS} required 
//               onChange={(e) => setFormData({ ...formData, phone: e.target.value })} 
//             />

//             <div style={{ position: 'relative', width: '100%' }}>
//               <input
//                 type={showPass ? "text" : "password"}
//                 placeholder="Password (Min 6 chars)"
//                 style={{ ...inputS, width: '100%', boxSizing: 'border-box' }}
//                 required
//                 onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               />
//               <div onClick={() => setShowPass(!showPass)} style={toggleTextStyle}>
//                 {showPass ? "HIDE" : "SHOW"}
//               </div>
//             </div>

//             <button type="submit" style={btnS} disabled={loading}>
//               {loading ? "Creating Account..." : "REGISTER NOW"}
//             </button>
//           </form>

//           <p style={{ fontSize: '12px', marginTop: '20px', textAlign: 'center', fontWeight: 'bold' }}>
//             ALREADY A MEMBER? <span onClick={() => navigate('/login')} style={{ color: '#e63946', cursor: 'pointer', textDecoration: 'underline' }}>LOGIN</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Styles (Same as yours, with small tweaks for better layout) ---
// const container = { minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f0f2f5', padding: '20px' };
// const formCard = { display: 'flex', width: '100%', maxWidth: '850px', background: '#fff', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.12)' };
// const leftBox = { flex: '1', background: '#000', color: '#fff', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' };
// const rightBox = { flex: '1.4', padding: '40px' };
// const inputS = { padding: '14px', border: 'none', background: '#f1f3f8', borderRadius: '10px', outline: 'none', fontSize: '14px' };
// const btnS = { padding: '16px', background: '#e63946', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px', marginTop: '10px' };

// const toggleTextStyle = { 
//   position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', 
//   cursor: 'pointer', fontSize: '10px', fontWeight: 'bold', color: '#e63946' 
// };

// export default Register;
import React, { useState } from 'react';
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', bloodGroup: '', city: '', phone: ''
  });

  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      await updateProfile(res.user, { displayName: formData.name });

      await setDoc(doc(db, "users", res.user.uid), {
        name: formData.name,
        email: formData.email,
        bloodGroup: formData.bloodGroup,
        city: formData.city,
        phone: formData.phone,
        uid: res.user.uid,
        role: 'donor',
        createdAt: new Date()
      });

      alert("Account Created Successfully! ❤️");
      navigate('/dashboard');

    } catch (err) {
      alert("Registration Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div style={container}>

      <style>{`
        *{
          box-sizing:border-box;
        }

        .form-card{
          display:flex;
          width:100%;
          max-width:850px;
          background:#fff;
          border-radius:25px;
          overflow:hidden;
          box-shadow:0 15px 40px rgba(0,0,0,0.12);
        }

        .left-box{
          flex:1;
          background:#000;
          color:#fff;
          padding:40px;
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        .right-box{
          flex:1.4;
          padding:40px;
        }

        input, select{
          width:100%;
          padding:14px;
          border:none;
          background:#f1f3f8;
          border-radius:10px;
          outline:none;
          font-size:14px;
        }

        button{
          width:100%;
          padding:16px;
          background:#e63946;
          color:#fff;
          border:none;
          border-radius:10px;
          font-weight:bold;
          cursor:pointer;
          font-size:16px;
          margin-top:10px;
        }

        /* TABLET */
        @media (max-width: 992px){
          .left-box{
            padding:30px;
          }

          .right-box{
            padding:30px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px){
          .form-card{
            flex-direction:column;
            border-radius:20px;
          }

          .left-box{
            padding:25px;
            text-align:center;
          }

          .right-box{
            padding:25px;
          }

          h1{
            font-size:28px !important;
          }

          .row-flex{
            flex-direction:column !important;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px){
          .left-box,
          .right-box{
            padding:20px;
          }
        }
      `}</style>

      <div style={container}>

        <div className="form-card">

          {/* LEFT SIDE */}
          <div className="left-box">
            <h1 style={{ fontSize: '40px', margin: '0', fontWeight: 'bold' }}>
              BECOME A <br /> <span style={{ color: '#e63946' }}>HERO</span>
            </h1>

            <p style={{ opacity: '0.8', marginTop: '10px' }}>
              Join BloodLine and save lives in your city.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="right-box">

            <h2 style={{ fontStyle: 'italic', marginBottom: '20px', fontWeight: 'bold' }}>
              USER <span style={{ color: '#e63946' }}>REGISTER</span>
            </h2>

            <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

              <input
                type="text"
                placeholder="Full Name"
                required
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />

              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              {/* ROW */}
              <div
                className="row-flex"
                style={{ display: 'flex', gap: '10px' }}
              >

                <select
                  required
                  onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                >
                  <option value="">Blood Group</option>
                  {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(bg => (
                    <option key={bg} value={bg}>{bg}</option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="City (e.g. Lahore)"
                  required
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />

              </div>

              <input
                type="tel"
                placeholder="Phone Number (03xxxxxxxxx)"
                required
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />

              {/* PASSWORD */}
              <div style={{ position: 'relative', width: '100%' }}>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Password (Min 6 chars)"
                  required
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />

                <div
                  onClick={() => setShowPass(!showPass)}
                  style={{
                    position: 'absolute',
                    right: '15px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    fontSize: '10px',
                    fontWeight: 'bold',
                    color: '#e63946'
                  }}
                >
                  {showPass ? "HIDE" : "SHOW"}
                </div>

              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Creating Account..." : "REGISTER NOW"}
              </button>

            </form>

            <p style={{
              fontSize: '12px',
              marginTop: '20px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              ALREADY A MEMBER?
              <span
                onClick={() => navigate('/login')}
                style={{
                  color: '#e63946',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  marginLeft: '5px'
                }}
              >
                LOGIN
              </span>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

const container = {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#f0f2f5',
  padding: '20px'
};

export default Register;