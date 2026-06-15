// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 w-full z-[100] bg-black shadow-2xl px-10 py-5">
//       {/* 3-Column Grid for Perfect Alignment */}
//       <div className="max-w-[1800px] mx-auto grid grid-cols-3 items-center">
        
//         {/* 1. LEFT: Logo */}
//         <div className="justify-self-start">
//           <Link to="/" className="text-3xl font-[1000] italic uppercase tracking-tighter text-white">
//             Blood<span className="text-red-600 drop-shadow-sm">Line❤️</span>
//           </Link>
//         </div>

//         {/* 2. MIDDLE: Navigation Links with Hover Line */}
//         <div className="justify-self-center hidden lg:flex gap-10 font-black uppercase text-[11px] tracking-[0.3em] text-white/80">
//           {[
//             { name: 'Home', path: '/' },
//             { name: 'Find Donor', path: '/search' },
//             { name: 'About Us', path: '/aboutus' },
//           ].map((item) => (
//             <Link 
//               key={item.name} 
//               to={item.path} 
//               className="relative group py-2"
//             >
//               <span className="group-hover:text-red-500 transition-colors duration-300">
//                 {item.name}
//               </span>
              
//               {/* Red Underline Animation */}
//               <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
//             </Link>
//           ))}
//         </div>

//         {/* 3. RIGHT: Login & Join Now Button */}
//         <div className="justify-self-end flex items-center gap-8">
//           <Link 
//             to="/login" 
//             className="text-white text-[11px] font-black uppercase tracking-[0.2em] hover:text-red-500 transition-all duration-300"
//           >
//             Login
//           </Link>
          
//           <Link 
//             to="/register" 
//             className="bg-red-600 text-white px-8 py-3 rounded-xl font-[1000] uppercase text-[10px] tracking-widest hover:bg-white hover:text-red-600 transition-all shadow-[0_0_25px_rgba(220,38,38,0.4)] active:scale-95"
//           >
//             Join Now
//           </Link>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="container">

        {/* LEFT: Logo */}
        <div className="left">
          <Link to="/" className="logo">
            Blood<span>Line❤️</span>
          </Link>
        </div>

        {/* MIDDLE: Links */}
        <div className="middle">
          {[
            { name: 'Home', path: '/' },
            { name: 'Find Donor', path: '/search' },
            { name: 'About Us', path: '/aboutus' },
          ].map((item) => (
            <Link key={item.name} to={item.path} className="nav-link">
              <span>{item.name}</span>
              <span className="underline"></span>
            </Link>
          ))}
        </div>

        {/* RIGHT: Auth */}
        <div className="right">
          <Link to="/login" className="login">Login</Link>

          <Link to="/register" className="join">
            Join Now
          </Link>
        </div>

      </div>

      <style>{`
        *{ box-sizing:border-box; }

        .navbar{
          position:fixed;
          top:0;
          width:100%;
          z-index:100;
          background:#000;
          padding:18px 20px;
          box-shadow:0 10px 30px rgba(0,0,0,0.4);
        }

        .container{
          max-width:1800px;
          margin:0 auto;
          display:grid;
          grid-template-columns:1fr 2fr 1fr;
          align-items:center;
        }

        /* LEFT */
        .logo{
          font-size:28px;
          font-weight:900;
          font-style:italic;
          text-transform:uppercase;
          color:#fff;
          text-decoration:none;
        }

        .logo span{
          color:#dc2626;
        }

        /* MIDDLE */
        .middle{
          display:flex;
          justify-content:center;
          gap:40px;
          font-size:11px;
          font-weight:900;
          letter-spacing:0.3em;
          text-transform:uppercase;
        }

        .nav-link{
          position:relative;
          color:rgba(255,255,255,0.8);
          text-decoration:none;
          padding:6px 0;
        }

        .nav-link:hover span{
          color:#ef4444;
        }

        .underline{
          position:absolute;
          bottom:0;
          left:0;
          width:100%;
          height:2px;
          background:#ef4444;
          transform:scaleX(0);
          transform-origin:left;
          transition:0.3s;
        }

        .nav-link:hover .underline{
          transform:scaleX(1);
        }

        /* RIGHT */
        .right{
          display:flex;
          justify-content:flex-end;
          align-items:center;
          gap:25px;
        }

        .login{
          font-size:11px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:0.2em;
          color:#fff;
          text-decoration:none;
        }

        .login:hover{
          color:#ef4444;
        }

        .join{
          background:#dc2626;
          color:#fff;
          padding:10px 18px;
          border-radius:12px;
          font-size:10px;
          font-weight:900;
          text-transform:uppercase;
          letter-spacing:0.2em;
          text-decoration:none;
          transition:0.3s;
        }

        .join:hover{
          background:#fff;
          color:#dc2626;
        }

        /* TABLET */
        @media (max-width: 992px){
          .container{
            grid-template-columns:1fr 1fr;
          }

          .middle{
            display:none;
          }
        }

        /* MOBILE */
        @media (max-width: 768px){
          .navbar{
            padding:14px 15px;
          }

          .logo{
            font-size:22px;
          }

          .right{
            gap:15px;
          }

          .join{
            padding:8px 14px;
            font-size:9px;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px){
          .logo{
            font-size:18px;
          }

          .right{
            gap:10px;
          }

          .login{
            font-size:10px;
          }
        }
      `}</style>

    </nav>
  );
};

export default Navbar;