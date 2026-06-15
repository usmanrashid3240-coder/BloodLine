// import React from "react";
// import { Link } from "react-router-dom";

// const Hero = () => {
//   return (
//     <section className="relative h-[600px] w-full overflow-hidden bg-slate-900">
//       {/* Background Image */}
//       <img
//         src="https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=1600"
//         alt="Professional Hospital"
//         className="absolute inset-0 w-full h-full object-cover opacity-70"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

//       {/* Content */}
//       <div className="relative z-10 h-full max-w-7xl mx-auto flex items-center px-6 md:px-12">
//         <div className="max-w-2xl text-white transition-all duration-700 ease-out">
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-snug tracking-tighter uppercase italic">
//             Every Drop <br />
//             <span className="text-red-500 font-extrabold">
//               Saves A Life.
//             </span>
//           </h2>

//           <p className="text-lg sm:text-xl mb-10 opacity-90 font-medium max-w-lg leading-relaxed">
//             Pakistan's most trusted emergency blood donation platform.
//             Connecting verified heroes with patients in seconds.
//           </p>

//           <div className="flex gap-4">
//             <Link
//               to="/search"
//               className="bg-red-600 text-white px-10 py-5 rounded-2xl 
//                          font-bold uppercase text-xs tracking-widest 
//                          shadow-lg transition-transform duration-300 
//                          hover:bg-red-700 hover:scale-105 active:scale-95"
//             >
//               Find A Donor
//             </Link>

//             <Link
//               to="/register"
//               className="bg-white/10 backdrop-blur-md border border-white/20 
//                          text-white px-10 py-5 rounded-2xl 
//                          font-bold uppercase text-xs tracking-widest 
//                          transition-transform duration-300 
//                          hover:bg-white/20 hover:scale-105 active:scale-95"
//             >
//               Register Now
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">

      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Professional Hospital"
        className="hero-img"
      />

      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="content-wrapper">
        <div className="content">

          <h2>
            Every Drop <br />
            <span> Saves A Life.</span>
          </h2>

          <p>
            Pakistan's most trusted emergency blood donation platform.
            Connecting verified heroes with patients in seconds.
          </p>

          <div className="btn-group">
            <Link to="/search" className="btn primary">
              Find A Donor
            </Link>

            <Link to="/register" className="btn secondary">
              Register Now
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        *{
          box-sizing:border-box;
        }

        .hero{
          position:relative;
          height:600px;
          width:100%;
          overflow:hidden;
          background:#0f172a;
        }

        .hero-img{
          position:absolute;
          inset:0;
          width:100%;
          height:100%;
          object-fit:cover;
          opacity:0.7;
        }

        .overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.5), transparent);
        }

        .content-wrapper{
          position:relative;
          z-index:10;
          height:100%;
          max-width:1200px;
          margin:0 auto;
          display:flex;
          align-items:center;
          padding:0 60px;
        }

        .content{
          max-width:600px;
          color:#fff;
        }

        h2{
          font-size:56px;
          font-weight:900;
          margin-bottom:20px;
          line-height:1.1;
          text-transform:uppercase;
          font-style:italic;
        }

        h2 span{
          color:#ef4444;
        }

        p{
          font-size:18px;
          margin-bottom:35px;
          opacity:0.9;
          line-height:1.6;
        }

        .btn-group{
          display:flex;
          gap:15px;
        }

        .btn{
          padding:16px 28px;
          border-radius:16px;
          font-weight:800;
          text-transform:uppercase;
          font-size:11px;
          letter-spacing:1px;
          transition:0.3s;
          text-decoration:none;
          display:inline-block;
        }

        .primary{
          background:#ef4444;
          color:#fff;
        }

        .primary:hover{
          background:#dc2626;
          transform:scale(1.05);
        }

        .secondary{
          background:rgba(255,255,255,0.1);
          border:1px solid rgba(255,255,255,0.2);
          color:#fff;
        }

        .secondary:hover{
          background:rgba(255,255,255,0.2);
          transform:scale(1.05);
        }

        /* TABLET */
        @media (max-width: 992px){
          .content-wrapper{
            padding:0 40px;
          }

          h2{
            font-size:44px;
          }

          p{
            font-size:16px;
          }
        }

        /* MOBILE */
        @media (max-width: 768px){
          .hero{
            height:520px;
          }

          .content-wrapper{
            padding:0 20px;
            justify-content:center;
            text-align:center;
          }

          h2{
            font-size:34px;
          }

          p{
            font-size:15px;
          }

          .btn-group{
            flex-direction:column;
            width:100%;
          }

          .btn{
            width:100%;
            text-align:center;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 480px){
          .hero{
            height:480px;
          }

          h2{
            font-size:28px;
          }

          p{
            font-size:14px;
          }
        }
      `}</style>

    </section>
  );
};

export default Hero;