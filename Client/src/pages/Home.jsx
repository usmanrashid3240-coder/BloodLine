// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Hero from "../components/Hero";

// const Home = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const navigate = useNavigate();

//   const faqs = [
//     { q: "Who can donate blood?", a: "Anyone between 18-65 years, weighing over 50kg, and in good health can generally donate blood." },
//     { q: "How often can I donate?", a: "You can safely donate blood every 3 months (90 days). This allows your body to fully replenish its iron levels." },
//     { q: "Is blood donation safe?", a: "Absolutely. We use sterile, disposable equipment for every donor, so there is no risk of catching any infection." },
//     { q: "How long does it take?", a: "The actual donation takes only 8-10 minutes, but the whole process (registration + rest) takes about 30-45 minutes." }
//   ];

//   const whyDonate = [
//     { title: "Save 3 Lives", icon: "🩸" },
//     { title: "Health Check", icon: "🛡️" },
//     { title: "Heart Health", icon: "🩺" },
//     { title: "Iron Balance", icon: "⚖️" }
//   ];
// a
//   const healthTips = [
//     { title: "Eat Healthy", desc: "Have an iron-rich meal like spinach or red meat before donating.", icon: "🥗" },
//     { title: "Stay Hydrated", desc: "Drink plenty of water before your appointment.", icon: "💧" },
//     { title: "Rest Well", desc: "Make sure to get at least 7-8 hours of sleep the night before.", icon: "😴" }
//   ];

//   const steps = [
//     { step: "01", title: "Register", desc: "Create your profile with blood group and location." },
//     { step: "02", title: "Get Alert", desc: "Receive SMS or call when there's an emergency nearby." },
//     { step: "03", title: "Donate", desc: "Reach the hospital and save someone's life." }
//   ];

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-x-hidden">

//       {/* HERO */}
//       <Hero />

//       {/* MODERN PROFESSIONAL CTA SECTION */}
//       <section className="py-20 px-6 bg-gradient-to-r from-white to-slate-50">
//         <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white/80 backdrop-blur-md p-16 rounded-3xl shadow-xl border border-slate-200 transition-all hover:shadow-2xl">
          
//           {/* Text Content */}
//           <div className="md:w-2/3 text-center md:text-left mb-8 md:mb-0">
//             <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a237e] uppercase tracking-tight leading-snug mb-4">
//               Make an <span className="text-red-600">Impact Today</span>
//             </h2>
//             <p className="text-slate-700 text-lg md:text-xl font-medium mb-6">
//               Join Pakistan's trusted network of blood donors and help save lives in your community. Every donation counts.
//             </p>
//             <button
//               onClick={() => navigate("/register")}
//               className="bg-red-600 hover:bg-red-700 text-white px-10 md:px-14 py-4 rounded-2xl font-bold uppercase text-sm tracking-widest shadow-lg hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-red-400"
//             >
//               Become a Donor
//             </button>
//           </div>

//           {/* Icon / Visual */}
//           <div className="md:w-1/3 flex justify-center md:justify-end">
//             <div className="text-8xl md:text-9xl animate-bounce text-red-500 select-none">
//               🩸
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* MINI IMPACT CARDS SECTION */}
//       <section className="py-20 px-6 bg-slate-50">
//         <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
//           {[
//             { title: "Save Lives", desc: "Your donation can help multiple patients in need.", icon: "🩸" },
//             { title: "Health Benefits", desc: "Regular donation improves heart health and iron balance.", icon: "🩺" },
//             { title: "Community Impact", desc: "Be part of a trusted network of donors across the country.", icon: "🌟" },
//           ].map((item, i) => (
//             <div key={i} className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 text-center hover:shadow-2xl transition-all">
//               <div className="text-5xl mb-4">{item.icon}</div>
//               <h3 className="text-xl font-black text-[#1a237e] mb-2 uppercase tracking-tight">{item.title}</h3>
//               <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* IMPACT STATS */}
//       <section className="py-12 bg-white">
//         <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//           {[
//             { num: "25k+", label: "Happy Donors", color: "text-red-600" },
//             { num: "150+", label: "Hospitals", color: "text-[#1a237e]" },
//             { num: "10k+", label: "Lives Saved", color: "text-red-600" },
//             { num: "40+", label: "Cities", color: "text-[#1a237e]" }
//           ].map((item, i) => (
//             <div key={i}>
//               <div className={`text-5xl font-[1000] ${item.color}`}>{item.num}</div>
//               <div className="text-xs font-black uppercase tracking-widest text-slate-400 mt-2">{item.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* WHY DONATE */}
//       <section className="py-20 px-6 max-w-7xl mx-auto text-center">
//         <h2 className="text-4xl font-[1000] text-[#1a237e] mb-12 uppercase italic tracking-tighter leading-none">
//           Why Donate <span className="text-red-600 font-black">Blood?</span>
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {whyDonate.map((item, i) => (
//             <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-slate-100 flex flex-col items-center hover:shadow-2xl transition-all group cursor-pointer">
//               <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
//               <h4 className="text-[11px] font-[1000] text-[#1a237e] uppercase tracking-widest leading-none">{item.title}</h4>
//             </div>
//           ))}
//         </div> 
//       </section>

//       {/* HEALTH TIPS */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
//           {healthTips.map((tip, i) => (
//             <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all">
//               <div className="text-3xl mb-4">{tip.icon}</div>
//               <h3 className="font-black text-[#1a237e] uppercase italic mb-2">{tip.title}</h3>
//               <p className="text-slate-500 text-sm font-medium leading-relaxed">{tip.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* READY TO BLOOD HERO */}
//       <section className="relative h-[600px] w-full flex items-center justify-center text-center overflow-hidden bg-slate-900">
//         <img
//           src="https://images.pexels.com/photos/3985161/pexels-photo-3985161.jpeg?auto=compress&cs=tinysrgb&w=1600"
//           alt="Expert Medical Team"
//           className="absolute inset-0 w-full h-full object-cover object-center"
//         />
//         <div className="absolute inset-0 bg-black/60"></div>
//         <div className="relative z-10 px-6">
//           <h2 className="text-white text-6xl md:text-7xl font-[1000] uppercase italic mb-8 leading-none tracking-tighter drop-shadow-2xl">
//             Ready to be a <br /> <span className="text-red-500 font-black">Blood Hero?</span>
//           </h2>
//           <p className="text-white/80 text-lg mb-10 font-bold uppercase tracking-widest max-w-xl mx-auto">Join Pakistan's Largest Network of Verified Donors</p>
//           <button
//             onClick={() => navigate("/register")}
//             className="bg-red-600 hover:bg-red-700 text-white px-16 py-6 rounded-2xl font-black uppercase text-sm tracking-[0.3em] transition-all shadow-2xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white"
//           >
//             Register as a Donor
//           </button>
//         </div>
//       </section>

//       {/* HOW IT WORKS */}
//       <section className="py-24 bg-white border-b border-slate-100">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-[1000] text-[#1a237e] mb-20 uppercase italic tracking-tighter">Simple <span className="text-red-600">3 Steps</span></h2>
//           <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative">
//             <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 -z-10"></div>
//             {steps.map((step, i) => (
//               <div key={i} className="flex-1 text-center group">
//                 <div className="w-24 h-24 bg-[#1a237e] text-white rounded-full flex items-center justify-center text-3xl font-black mx-auto mb-6 group-hover:bg-red-600 transition-colors shadow-xl border-8 border-white">
//                   {step.step}
//                 </div>
//                 <h3 className="font-black text-[#1a237e] uppercase italic mb-3">{step.title}</h3>
//                 <p className="text-slate-400 text-sm font-bold uppercase px-4">{step.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-4xl mx-auto px-6">
//           <h2 className="text-3xl font-[1000] text-[#1a237e] mb-12 uppercase italic tracking-tighter text-center leading-none">
//             Common <span className="text-red-600">Questions</span>
//           </h2>
//           <div className="space-y-4">
//             {faqs.map((faq, i) => (
//               <div key={i} className="bg-white rounded-3xl shadow-md overflow-hidden border border-slate-100 transition-all">
//                 <button
//                   onClick={() => setOpenIndex(openIndex === i ? null : i)}
//                   className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
//                 >
//                   <span className="font-black text-[#1a237e] uppercase italic text-sm tracking-tight">{faq.q}</span>
//                   <span className={`text-red-600 font-black text-2xl transform transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
//                 </button>
//                 {openIndex === i && <div className="px-6 pb-6 text-slate-500 font-medium text-sm leading-relaxed">{faq.a}</div>}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Home;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    { q: "Who can donate blood?", a: "Anyone between 18-65 years, weighing over 50kg, and in good health can generally donate blood." },
    { q: "How often can I donate?", a: "You can safely donate blood every 3 months (90 days). This allows your body to fully replenish its iron levels." },
    { q: "Is blood donation safe?", a: "Absolutely. We use sterile, disposable equipment for every donor, so there is no risk of catching any infection." },
    { q: "How long does it take?", a: "The actual donation takes only 8-10 minutes, but the whole process (registration + rest) takes about 30-45 minutes." }
  ];

  const whyDonate = [
    { title: "Save 3 Lives", icon: "🩸" },
    { title: "Health Check", icon: "🛡️" },
    { title: "Heart Health", icon: "🩺" },
    { title: "Iron Balance", icon: "⚖️" }
  ];

  const healthTips = [
    { title: "Eat Healthy", desc: "Have an iron-rich meal like spinach or red meat before donating.", icon: "🥗" },
    { title: "Stay Hydrated", desc: "Drink plenty of water before your appointment.", icon: "💧" },
    { title: "Rest Well", desc: "Make sure to get at least 7-8 hours of sleep the night before.", icon: "😴" }
  ];

  const steps = [
    { step: "01", title: "Register", desc: "Create your profile with blood group and location." },
    { step: "02", title: "Get Alert", desc: "Receive SMS or call when there's an emergency nearby." },
    { step: "03", title: "Donate", desc: "Reach the hospital and save someone's life." }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-x-hidden">

      {/* HERO */}
      <Hero />

      {/* CTA SECTION */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-r from-white to-slate-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between bg-white/80 backdrop-blur-md p-6 md:p-16 rounded-3xl shadow-xl border border-slate-200">

          <div className="md:w-2/3 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl md:text-4xl font-extrabold text-[#1a237e] mb-4 leading-tight">
              Make an <span className="text-red-600">Impact Today</span>
            </h2>

            <p className="text-slate-700 text-base md:text-xl mb-6">
              Join Pakistan's trusted network of blood donors and help save lives.
            </p>

            <button
              onClick={() => navigate("/register")}
              className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-14 py-3 md:py-4 rounded-2xl font-bold uppercase text-xs md:text-sm tracking-widest"
            >
              Become a Donor
            </button>
          </div>

          <div className="text-6xl md:text-9xl text-red-500 animate-bounce select-none">
            🩸
          </div>

        </div>
      </section>

      {/* IMPACT CARDS */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {[
            { title: "Save Lives", desc: "Your donation can help multiple patients.", icon: "🩸" },
            { title: "Health Benefits", desc: "Improves heart health and iron balance.", icon: "🩺" },
            { title: "Community Impact", desc: "Be part of a national donor network.", icon: "🌟" }
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-3xl p-6 md:p-10 shadow-lg text-center">
              <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg md:text-xl font-black text-[#1a237e]">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* STATS */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          {[
            { num: "25k+", label: "Happy Donors" },
            { num: "150+", label: "Hospitals" },
            { num: "10k+", label: "Lives Saved" },
            { num: "40+", label: "Cities" }
          ].map((item, i) => (
            <div key={i}>
              <div className="text-3xl md:text-5xl font-black text-[#1a237e]">
                {item.num}
              </div>
              <div className="text-xs uppercase text-slate-400">
                {item.label}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* WHY DONATE */}
      <section className="py-12 md:py-20 px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-black text-[#1a237e] mb-10">
          Why Donate <span className="text-red-600">Blood?</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">

          {whyDonate.map((item, i) => (
            <div key={i} className="bg-white p-6 md:p-10 rounded-3xl shadow">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="text-xs md:text-sm font-bold text-[#1a237e]">
                {item.title}
              </h4>
            </div>
          ))}

        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="relative h-[400px] md:h-[600px] flex items-center justify-center text-center">
        <img
          src="https://images.pexels.com/photos/3985161/pexels-photo-3985161.jpeg"
          className="absolute w-full h-full object-cover"
          alt=""
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 px-4">
          <h2 className="text-3xl md:text-6xl font-black text-white">
            Ready to be a Blood Hero?
          </h2>

          <button
            onClick={() => navigate("/register")}
            className="mt-6 bg-red-600 text-white px-6 md:px-16 py-3 md:py-5 rounded-xl font-bold"
          >
            Register
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-slate-50 px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-black text-center text-[#1a237e] mb-10">
            Common <span className="text-red-600">Questions</span>
          </h2>

          <div className="space-y-4">

            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow">

                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full p-4 md:p-6 flex justify-between text-left"
                >
                  <span className="text-sm font-bold text-[#1a237e]">
                    {faq.q}
                  </span>
                  <span className="text-red-600 font-bold">
                    {openIndex === i ? "−" : "+"}
                  </span>
                </button>

                {openIndex === i && (
                  <div className="px-4 md:px-6 pb-4 text-sm text-slate-500">
                    {faq.a}
                  </div>
                )}

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;