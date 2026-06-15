// import React, { useState, useEffect } from 'react';
// import { db, auth } from '../firebase';
// import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
// import { useNavigate } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';

// const PostRequest = () => {
//   const [bloodGroup, setBloodGroup] = useState('');
//   const [hospital, setHospital] = useState('');
//   const [phone, setPhone] = useState('');
//   const [description, setDescription] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [currentUser, setCurrentUser] = useState(null);
//   const navigate = useNavigate();

//   // 1. Check if user is logged in
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setCurrentUser(user);
//       } else {
//         alert("Please login first to post a request!");
//         navigate('/login'); // Apne login page ka sahi path check kar lein
//       }
//     });
//     return () => unsubscribe();
//   }, [navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Verification before sending
//     if (!currentUser) {
//       alert("Error: User not found. Please login again.");
//       return;
//     }

//     if (!bloodGroup || !hospital || !phone) {
//       alert("Please fill all required fields! 🩸");
//       return;
//     }

//     setLoading(true);
//     try {
//       // 2. Adding Data to Firestore
//       await addDoc(collection(db, "requests"), {
//         bloodGroup: bloodGroup,
//         hospital: hospital,
//         phone: phone,
//         description: description || "Urgent",
//         userId: currentUser.uid, // Ab 'uid' null nahi hoga
//         userName: currentUser.displayName || "Blood Hero",
//         userEmail: currentUser.email,
//         createdAt: serverTimestamp(),
//       });

//       alert("Request Broadcasted Successfully! 📢");
//       navigate('/dashboard'); // Wapis dashboard par le jaye ga
//     } catch (error) {
//       console.error("Firebase Error Details:", error);
//       alert("Database Error: " + error.message);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="post-container">
//       <style>{`
//         .post-container {
//           margin-top: 80px;
//           min-height: calc(100vh - 80px);
//           background: #f4f7f6;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 20px;
//           font-family: 'Poppins', sans-serif;
//         }
//         .post-card {
//           background: #fff;
//           width: 100%;
//           max-width: 500px;
//           padding: 35px;
//           border-radius: 25px;
//           box-shadow: 0 15px 35px rgba(0,0,0,0.1);
//         }
//         .header { text-align: center; margin-bottom: 30px; }
//         .header h2 { color: #e63946; margin: 0; }
//         .input-group { margin-bottom: 20px; }
//         .input-group label { display: block; margin-bottom: 8px; font-weight: 600; color: #333; }
//         .input-group input, .input-group select, .input-group textarea {
//           width: 100%; padding: 12px; border: 2px solid #eee; border-radius: 12px; outline: none; transition: 0.3s;
//         }
//         .input-group input:focus { border-color: #e63946; }
//         .broadcast-btn {
//           width: 100%; padding: 15px; background: #111; color: #fff; border: none;
//           border-radius: 12px; font-weight: bold; cursor: pointer; transition: 0.3s;
//         }
//         .broadcast-btn:hover { background: #e63946; transform: translateY(-2px); }
//         .broadcast-btn:disabled { background: #ccc; cursor: not-allowed; }
//       `}</style>

//       <div className="post-card">
//         <div className="header">
//           <h2>New Blood Request 🩸</h2>
//           <p style={{color: '#777', fontSize: '14px'}}>Posting as: {currentUser?.email || 'Loading...'}</p>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Blood Group *</label>
//             <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required>
//               <option value="">Select Blood Type</option>
//               {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(g => (
//                 <option key={g} value={g}>{g}</option>
//               ))}
//             </select>
//           </div>

//           <div className="input-group">
//             <label>Hospital & City *</label>
//             <input type="text" placeholder="e.g. Jinnah Hospital, Lahore" value={hospital} onChange={(e) => setHospital(e.target.value)} required />
//           </div>

//           <div className="input-group">
//             <label>Contact Number *</label>
//             <input type="tel" placeholder="03xxxxxxxxx" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//           </div>

//           <div className="input-group">
//             <label>More Info (Optional)</label>
//             <textarea rows="2" placeholder="Any specific instructions..." value={description} onChange={(e) => setDescription(e.target.value)} />
//           </div>

//           <button type="submit" className="broadcast-btn" disabled={loading}>
//             {loading ? "Connecting to Firebase..." : "📢 Broadcast Request"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PostRequest;
import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

const PostRequest = () => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [hospital, setHospital] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        alert("Please login first to post a request!");
        navigate('/login');
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("Error: User not found. Please login again.");
      return;
    }

    if (!bloodGroup || !hospital || !phone) {
      alert("Please fill all required fields! 🩸");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "requests"), {
        bloodGroup,
        hospital,
        phone,
        description: description || "Urgent",
        userId: currentUser.uid,
        userName: currentUser.displayName || "Blood Hero",
        userEmail: currentUser.email,
        createdAt: serverTimestamp(),
      });

      alert("Request Broadcasted Successfully! 📢");
      navigate('/dashboard');

    } catch (error) {
      console.error(error);
      alert("Database Error: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="post-container">

      <style>{`
        *{
          box-sizing:border-box;
        }

        .post-container{
          margin-top:80px;
          min-height:calc(100vh - 80px);
          background:#f4f7f6;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:20px;
          font-family:'Poppins',sans-serif;
        }

        .post-card{
          background:#fff;
          width:100%;
          max-width:500px;
          padding:35px;
          border-radius:25px;
          box-shadow:0 15px 35px rgba(0,0,0,0.1);
        }

        .header{
          text-align:center;
          margin-bottom:30px;
        }

        .header h2{
          color:#e63946;
          margin:0;
        }

        .input-group{
          margin-bottom:20px;
        }

        .input-group label{
          display:block;
          margin-bottom:8px;
          font-weight:600;
          color:#333;
        }

        .input-group input,
        .input-group select,
        .input-group textarea{
          width:100%;
          padding:12px;
          border:2px solid #eee;
          border-radius:12px;
          outline:none;
          transition:0.3s;
          font-size:14px;
        }

        .input-group input:focus,
        .input-group select:focus,
        .input-group textarea:focus{
          border-color:#e63946;
        }

        .broadcast-btn{
          width:100%;
          padding:15px;
          background:#111;
          color:#fff;
          border:none;
          border-radius:12px;
          font-weight:bold;
          cursor:pointer;
          transition:0.3s;
        }

        .broadcast-btn:hover{
          background:#e63946;
          transform:translateY(-2px);
        }

        .broadcast-btn:disabled{
          background:#ccc;
          cursor:not-allowed;
        }

        /* TABLET */
        @media (max-width: 992px){
          .post-card{
            max-width:450px;
            padding:30px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px){
          .post-container{
            margin-top:60px;
            padding:15px;
          }

          .post-card{
            padding:25px;
            border-radius:18px;
          }

          .header h2{
            font-size:20px;
          }

          .input-group input,
          .input-group select,
          .input-group textarea{
            font-size:13px;
            padding:10px;
          }

          .broadcast-btn{
            padding:14px;
            font-size:14px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px){
          .post-card{
            padding:20px;
          }

          .header p{
            font-size:12px;
          }
        }
      `}</style>

      <div className="post-card">

        <div className="header">
          <h2>New Blood Request 🩸</h2>
          <p style={{ color:'#777', fontSize:'14px' }}>
            Posting as: {currentUser?.email || 'Loading...'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Blood Group *</label>
            <select value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} required>
              <option value="">Select Blood Type</option>
              {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Hospital & City *</label>
            <input
              type="text"
              placeholder="e.g. Jinnah Hospital, Lahore"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Contact Number *</label>
            <input
              type="tel"
              placeholder="03xxxxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>More Info (Optional)</label>
            <textarea
              rows="2"
              placeholder="Any specific instructions..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="broadcast-btn"
            disabled={loading}
          >
            {loading ? "Connecting to Firebase..." : "📢 Broadcast Request"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default PostRequest;