// import React, { useEffect, useState } from 'react';
// import { db, auth } from '../firebase';
// import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
// import { useNavigate, Link, useLocation } from 'react-router-dom';

// const Dashboard = () => {
//   const [requests, setRequests] = useState([]);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const q = query(collection(db, "requests"), orderBy("createdAt", "desc"), limit(5));
//     const unsubscribe = onSnapshot(q, (snapshot) => {
//       const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setRequests(data);
//     });
//     return () => unsubscribe();
//   }, []);

//   return (
//     <div className="app-container">
//       <style>{`
//         .app-container { display: flex; height: 100vh; background: #f8f9fa; font-family: 'Poppins', sans-serif; overflow: hidden; }
        
//         /* SIDEBAR - Only for Desktop */
//         .desktop-sidebar { 
//           width: 280px; background: #111; color: #fff; display: flex; flex-direction: column; 
//           padding: 30px 20px; box-sizing: border-box; flex-shrink: 0;
//         }
        
//         .nav-links { display: flex; flex-direction: column; gap: 12px; flex: 1; margin-top: 40px; }
//         .nav-item { 
//           text-decoration: none; color: #999; padding: 15px 20px; border-radius: 12px; 
//           display: flex; align-items: center; gap: 12px; transition: 0.3s; 
//         }
//         .nav-item.active { background: #e63946; color: #fff; font-weight: bold; box-shadow: 0 4px 15px rgba(230,57,70,0.3); }
//         .nav-item:hover:not(.active) { background: #222; color: #fff; }

//         /* MAIN CONTENT AREA */
//         .main-wrapper { flex: 1; display: flex; flex-direction: column; overflow-y: auto; height: 100vh; }
//         .top-nav { 
//           background: #fff; padding: 15px 40px; display: flex; justify-content: space-between; 
//           align-items: center; border-bottom: 1px solid #eee; position: sticky; top: 0; z-index: 100;
//         }

//         .dashboard-body { padding: 40px; max-width: 1200px; margin: 0 auto; width: 100%; box-sizing: border-box; }
//         .welcome-banner { 
//           background: linear-gradient(135deg, #e63946 0%, #a3212b 100%); color: #fff; 
//           padding: 40px; border-radius: 30px; margin-bottom: 30px; box-shadow: 0 10px 30px rgba(230,57,70,0.2);
//         }

//         .layout-grid { display: grid; grid-template-columns: 1.8fr 1fr; gap: 30px; }
//         .content-card { background: #fff; padding: 30px; border-radius: 25px; border: 1px solid #eee; box-shadow: 0 5px 15px rgba(0,0,0,0.02); }

//         /* MOBILE BOTTOM NAV - Initially hidden */
//         .mobile-bottom-nav { display: none; }

//         /* RESPONSIVE QUERIES */
//         @media (max-width: 992px) {
//           .layout-grid { grid-template-columns: 1fr; }
//         }

//         @media (max-width: 768px) {
//           .desktop-sidebar { display: none; }
//           .top-nav { padding: 15px 20px; }
//           .dashboard-body { padding: 20px; padding-bottom: 100px; }
//           .welcome-banner { padding: 25px; border-radius: 20px; }
//           .mobile-bottom-nav { 
//             display: flex; position: fixed; bottom: 0; left: 0; right: 0; height: 75px; 
//             background: #111; justify-content: space-around; align-items: center; 
//             z-index: 1000; padding: 0 10px; border-top: 1px solid #333;
//           }
//           .mobile-bottom-nav .nav-item { flex-direction: column; gap: 4px; padding: 10px; font-size: 10px; flex: 1; }
//           .mobile-bottom-nav .nav-item span { font-size: 20px; }
//         }

//         /* Helper Classes */
//         .blood-item { display: flex; align-items: center; gap: 15px; padding: 15px; border-bottom: 1px solid #f9f9f9; transition: 0.2s; }
//         .blood-item:hover { background: #fcfcfc; }
//         .blood-tag { width: 45px; height: 45px; background: #fff0f0; color: #e63946; border-radius: 12px; display: flex; justify-content: center; align-items: center; font-weight: bold; border: 1px solid #f0f0f0; }
//         .call-action-btn { background: #2ecc71; color: #fff; border: none; padding: 10px 18px; border-radius: 10px; cursor: pointer; font-weight: bold; transition: 0.3s; }
//         .call-action-btn:hover { transform: scale(1.05); }
//       `}</style>

//       {/* --- DESKTOP SIDEBAR --- */}
//       <aside className="desktop-sidebar">
//         <h2 style={{color: '#e63946', letterSpacing: '1px'}}>BLOOD<span style={{color: '#fff'}}>LINE</span></h2>
//         <div className="nav-links">
//           <Link to="/dashboard" className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}><span>📊</span> Dashboard</Link>
//           <Link to="/search" className={`nav-item ${location.pathname === '/search' ? 'active' : ''}`}><span>🔍</span> Donor Search</Link>
//           <Link to="/post-request" className={`nav-item ${location.pathname === '/post-request' ? 'active' : ''}`}><span>📢</span> Request Blood</Link>
//           <Link to="/profile" className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}><span>👤</span> My Profile</Link>
//         </div>
//         <button onClick={() => auth.signOut()} style={{background: 'none', border: '1px solid #e63946', color: '#e63946', padding: '12px', borderRadius: '12px', cursor: 'pointer', marginTop: '20px'}}>Sign Out</button>
//       </aside>

//       {/* --- MAIN CONTENT --- */}
//       <main className="main-wrapper">
//         <header className="top-nav">
//           <h3 style={{margin: 0, color: '#333'}}>Overview</h3>
//           <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
//             <div style={{textAlign: 'right', display: window.innerWidth > 768 ? 'block' : 'none'}}>
//               <div style={{fontWeight: 'bold', fontSize: '14px'}}>{auth.currentUser?.displayName || "Hero"}</div>
//               <div style={{fontSize: '11px', color: '#999'}}>{auth.currentUser?.email}</div>
//             </div>
//             <div style={{width: '40px', height: '40px', background: '#111', color: '#fff', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold'}}>
//               {auth.currentUser?.displayName?.charAt(0) || "U"}
//             </div>
//           </div>
//         </header>

//         <div className="dashboard-body">
//           <section className="welcome-banner">
//             <h1 style={{margin: 0, fontSize: 'clamp(24px, 4vw, 36px)'}}>Hi, {auth.currentUser?.displayName || "Hero"}! 👋</h1>
//             <p style={{marginTop: '10px', opacity: 0.9, fontSize: '1.1rem'}}>Saving lives starts with a small gesture.</p>
//             <div style={{marginTop: '20px', display: 'inline-flex', background: 'rgba(255,255,255,0.2)', padding: '8px 20px', borderRadius: '12px', fontSize: '14px'}}>
//               Blood Group: {auth.currentUser?.bloodGroup || "O+"}
//             </div>
//           </section>

//           <div className="layout-grid">
//             {/* Live Feed Card */}
//             <div className="content-card">
//               <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '25px'}}>
//                 <h3 style={{margin: 0}}>Urgent Requests 🚨</h3>
//                 <span style={{color: '#e63946', fontWeight: 'bold', fontSize: '12px', letterSpacing: '1px'}}>LIVE FEED</span>
//               </div>
              
//               {requests.length > 0 ? requests.map(req => (
//                 <div key={req.id} className="blood-item">
//                   <div className="blood-tag">{req.bloodGroup}</div>
//                   <div style={{flex: 1}}>
//                     <h4 style={{margin: 0, fontSize: '15px'}}>{req.hospital}</h4>
//                     <p style={{margin: '3px 0 0', fontSize: '12px', color: '#777'}}>Contact: {req.phone}</p>
//                   </div>
//                   <button className="call-action-btn" onClick={() => window.location.href=`tel:${req.phone}`}>Call</button>
//                 </div>
//               )) : <p style={{textAlign: 'center', color: '#999', padding: '40px 0'}}>No live blood requests found.</p>}
//             </div>

//             {/* Quick Actions Card */}
//             <div className="content-card" style={{height: 'fit-content'}}>
//               <h3 style={{margin: '0 0 20px 0'}}>Insights</h3>
//               <div style={{display: 'flex', gap: '15px', marginBottom: '25px'}}>
//                 <div style={{flex: 1, background: '#f8f9fa', padding: '15px', borderRadius: '20px', textAlign: 'center'}}>
//                   <span style={{fontSize: '20px', fontWeight: 'bold'}}>24/7</span><br/><small style={{color: '#888'}}>Support</small>
//                 </div>
//                 <div style={{flex: 1, background: '#f8f9fa', padding: '15px', borderRadius: '20px', textAlign: 'center'}}>
//                   <span style={{fontSize: '20px', fontWeight: 'bold'}}>100%</span><br/><small style={{color: '#888'}}>Secure</small>
//                 </div>
//               </div>
//               <button onClick={() => navigate('/post-request')} style={{width: '100%', background: '#111', color: '#fff', border: 'none', padding: '16px', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer', fontSize: '15px'}}>
//                 📢 Post New Request
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* --- MOBILE BOTTOM NAVIGATION --- */}
//       <nav className="mobile-bottom-nav">
//         <Link to="/dashboard" className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}><span>📊</span>Home</Link>
//         <Link to="/search" className={`nav-item ${location.pathname === '/search' ? 'active' : ''}`}><span>🔍</span>Search</Link>
//         <Link to="/post-request" className={`nav-item ${location.pathname === '/post-request' ? 'active' : ''}`}><span>📢</span>Request</Link>
//         <Link to="/profile" className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}><span>👤</span>Profile</Link>
//       </nav>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { useNavigate, Link, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const q = query(collection(db, "requests"), orderBy("createdAt", "desc"), limit(5));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setRequests(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="app-container">

      <style>{`
        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          padding:0;
        }

        .app-container{
          display:flex;
          min-height:100vh;
          background:#f8f9fa;
          font-family:'Poppins',sans-serif;
          overflow-x:hidden;
        }

        /* DESKTOP SIDEBAR */
        .desktop-sidebar{
          width:280px;
          background:#111;
          color:#fff;
          display:flex;
          flex-direction:column;
          padding:30px 20px;
          flex-shrink:0;
        }

        .nav-links{
          display:flex;
          flex-direction:column;
          gap:12px;
          flex:1;
          margin-top:40px;
        }

        .nav-item{
          text-decoration:none;
          color:#999;
          padding:15px 20px;
          border-radius:12px;
          display:flex;
          align-items:center;
          gap:12px;
          transition:0.3s;
        }

        .nav-item.active{
          background:#e63946;
          color:#fff;
          font-weight:bold;
          box-shadow:0 4px 15px rgba(230,57,70,0.3);
        }

        .nav-item:hover:not(.active){
          background:#222;
          color:#fff;
        }

        /* MAIN CONTENT */
        .main-wrapper{
          flex:1;
          display:flex;
          flex-direction:column;
          width:100%;
          min-height:100vh;
        }

        .top-nav{
          background:#fff;
          padding:15px 40px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          border-bottom:1px solid #eee;
          position:sticky;
          top:0;
          z-index:100;
        }

        .dashboard-body{
          padding:40px;
          width:100%;
        }

        .welcome-banner{
          background:linear-gradient(135deg,#e63946 0%,#a3212b 100%);
          color:#fff;
          padding:40px;
          border-radius:30px;
          margin-bottom:30px;
          box-shadow:0 10px 30px rgba(230,57,70,0.2);
        }

        .layout-grid{
          display:grid;
          grid-template-columns:1.8fr 1fr;
          gap:30px;
          width:100%;
        }

        .content-card{
          background:#fff;
          padding:30px;
          border-radius:25px;
          border:1px solid #eee;
          box-shadow:0 5px 15px rgba(0,0,0,0.02);
        }

        .mobile-bottom-nav{
          display:none;
        }

        /* HELPER */
        .blood-item{
          display:flex;
          align-items:center;
          gap:15px;
          padding:15px;
          border-bottom:1px solid #f2f2f2;
          transition:0.2s;
        }

        .blood-item:hover{
          background:#fcfcfc;
        }

        .blood-tag{
          width:45px;
          height:45px;
          background:#fff0f0;
          color:#e63946;
          border-radius:12px;
          display:flex;
          justify-content:center;
          align-items:center;
          font-weight:bold;
          border:1px solid #f0f0f0;
          flex-shrink:0;
        }

        .call-action-btn{
          background:#2ecc71;
          color:#fff;
          border:none;
          padding:10px 18px;
          border-radius:10px;
          cursor:pointer;
          font-weight:bold;
          transition:0.3s;
          white-space:nowrap;
        }

        .call-action-btn:hover{
          transform:scale(1.05);
        }

        button{
          max-width:100%;
        }

        .user-details{
          text-align:right;
        }

        /* TABLET */
        @media (max-width:992px){

          .layout-grid{
            grid-template-columns:1fr;
          }

        }

        /* MOBILE */
        @media (max-width:768px){

          .desktop-sidebar{
            display:none;
          }

          .top-nav{
            padding:15px 20px;
          }

          .dashboard-body{
            padding:20px;
            padding-bottom:100px;
          }

          .welcome-banner{
            padding:25px;
            border-radius:20px;
          }

          .content-card{
            padding:20px;
            border-radius:20px;
          }

          .blood-item{
            flex-direction:column;
            align-items:flex-start;
          }

          .call-action-btn{
            width:100%;
          }

          .user-details{
            display:none;
          }

          .mobile-bottom-nav{
            display:flex;
            position:fixed;
            bottom:0;
            left:0;
            right:0;
            height:75px;
            background:#111;
            justify-content:space-around;
            align-items:center;
            z-index:1000;
            padding:0 10px;
            border-top:1px solid #333;
          }

          .mobile-bottom-nav .nav-item{
            flex-direction:column;
            gap:4px;
            padding:10px;
            font-size:10px;
            flex:1;
            justify-content:center;
            align-items:center;
          }

          .mobile-bottom-nav .nav-item span{
            font-size:20px;
          }

          .top-nav h3{
            font-size:18px;
          }

          .welcome-banner p{
            font-size:14px;
          }

        }
      `}</style>

      {/* DESKTOP SIDEBAR */}
      <aside className="desktop-sidebar">

        <h2 style={{ color:'#e63946', letterSpacing:'1px' }}>
          BLOOD<span style={{ color:'#fff' }}>LINE</span>
        </h2>

        <div className="nav-links">

          <Link
            to="/dashboard"
            className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
          >
            <span>📊</span>
            Dashboard
          </Link>

          <Link
            to="/search"
            className={`nav-item ${location.pathname === '/search' ? 'active' : ''}`}
          >
            <span>🔍</span>
            Donor Search
          </Link>

          <Link
            to="/post-request"
            className={`nav-item ${location.pathname === '/post-request' ? 'active' : ''}`}
          >
            <span>📢</span>
            Request Blood
          </Link>

          <Link
            to="/profile"
            className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            <span>👤</span>
            My Profile
          </Link>

        </div>

        <button
          onClick={() => auth.signOut()}
          style={{
            background:'none',
            border:'1px solid #e63946',
            color:'#e63946',
            padding:'12px',
            borderRadius:'12px',
            cursor:'pointer',
            marginTop:'20px'
          }}
        >
          Sign Out
        </button>

      </aside>

      {/* MAIN CONTENT */}
      <main className="main-wrapper">

        <header className="top-nav">

          <h3 style={{ margin:0, color:'#333' }}>
            Overview
          </h3>

          <div style={{
            display:'flex',
            alignItems:'center',
            gap:'12px'
          }}>

            <div className="user-details">

              <div style={{
                fontWeight:'bold',
                fontSize:'14px'
              }}>
                {auth.currentUser?.displayName || "Hero"}
              </div>

              <div style={{
                fontSize:'11px',
                color:'#999'
              }}>
                {auth.currentUser?.email}
              </div>

            </div>

            <div style={{
              width:'40px',
              height:'40px',
              background:'#111',
              color:'#fff',
              borderRadius:'12px',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              fontWeight:'bold'
            }}>
              {auth.currentUser?.displayName?.charAt(0) || "U"}
            </div>

          </div>

        </header>

        <div className="dashboard-body">

          <section className="welcome-banner">

            <h1 style={{
              margin:0,
              fontSize:'clamp(24px, 4vw, 36px)'
            }}>
              Hi, {auth.currentUser?.displayName || "Hero"}! 👋
            </h1>

            <p style={{
              marginTop:'10px',
              opacity:0.9,
              fontSize:'1.1rem'
            }}>
              Saving lives starts with a small gesture.
            </p>

            <div style={{
              marginTop:'20px',
              display:'inline-flex',
              background:'rgba(255,255,255,0.2)',
              padding:'8px 20px',
              borderRadius:'12px',
              fontSize:'14px'
            }}>
              Blood Group: {auth.currentUser?.bloodGroup || "O+"}
            </div>

          </section>

          <div className="layout-grid">

            {/* LIVE FEED */}
            <div className="content-card">

              <div style={{
                display:'flex',
                justifyContent:'space-between',
                marginBottom:'25px'
              }}>

                <h3 style={{ margin:0 }}>
                  Urgent Requests 🚨
                </h3>

                <span style={{
                  color:'#e63946',
                  fontWeight:'bold',
                  fontSize:'12px',
                  letterSpacing:'1px'
                }}>
                  LIVE FEED
                </span>

              </div>

              {requests.length > 0 ? (

                requests.map(req => (

                  <div
                    key={req.id}
                    className="blood-item"
                  >

                    <div className="blood-tag">
                      {req.bloodGroup}
                    </div>

                    <div style={{ flex:1 }}>

                      <h4 style={{
                        margin:0,
                        fontSize:'15px'
                      }}>
                        {req.hospital}
                      </h4>

                      <p style={{
                        margin:'3px 0 0',
                        fontSize:'12px',
                        color:'#777'
                      }}>
                        Contact: {req.phone}
                      </p>

                    </div>

                    <button
                      className="call-action-btn"
                      onClick={() => window.location.href=`tel:${req.phone}`}
                    >
                      Call
                    </button>

                  </div>

                ))

              ) : (

                <p style={{
                  textAlign:'center',
                  color:'#999',
                  padding:'40px 0'
                }}>
                  No live blood requests found.
                </p>

              )}

            </div>

            {/* INSIGHTS */}
            <div
              className="content-card"
              style={{ height:'fit-content' }}
            >

              <h3 style={{
                margin:'0 0 20px 0'
              }}>
                Insights
              </h3>

              <div style={{
                display:'flex',
                gap:'15px',
                marginBottom:'25px'
              }}>

                <div style={{
                  flex:1,
                  background:'#f8f9fa',
                  padding:'15px',
                  borderRadius:'20px',
                  textAlign:'center'
                }}>

                  <span style={{
                    fontSize:'20px',
                    fontWeight:'bold'
                  }}>
                    24/7
                  </span>

                  <br />

                  <small style={{ color:'#888' }}>
                    Support
                  </small>

                </div>

                <div style={{
                  flex:1,
                  background:'#f8f9fa',
                  padding:'15px',
                  borderRadius:'20px',
                  textAlign:'center'
                }}>

                  <span style={{
                    fontSize:'20px',
                    fontWeight:'bold'
                  }}>
                    100%
                  </span>

                  <br />

                  <small style={{ color:'#888' }}>
                    Secure
                  </small>

                </div>

              </div>

              <button
                onClick={() => navigate('/post-request')}
                style={{
                  width:'100%',
                  background:'#111',
                  color:'#fff',
                  border:'none',
                  padding:'16px',
                  borderRadius:'15px',
                  fontWeight:'bold',
                  cursor:'pointer',
                  fontSize:'15px'
                }}
              >
                📢 Post New Request
              </button>

            </div>

          </div>

        </div>

      </main>

      {/* MOBILE NAVIGATION */}
      <nav className="mobile-bottom-nav">

        <Link
          to="/dashboard"
          className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
        >
          <span>📊</span>
          Home
        </Link>

        <Link
          to="/search"
          className={`nav-item ${location.pathname === '/search' ? 'active' : ''}`}
        >
          <span>🔍</span>
          Search
        </Link>

        <Link
          to="/post-request"
          className={`nav-item ${location.pathname === '/post-request' ? 'active' : ''}`}
        >
          <span>📢</span>
          Request
        </Link>

        <Link
          to="/profile"
          className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}
        >
          <span>👤</span>
          Profile
        </Link>

      </nav>

    </div>
  );
};

export default Dashboard;