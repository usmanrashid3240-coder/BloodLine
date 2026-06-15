// import React, { useState, useEffect } from "react";
// import { db } from "../firebase";
// import { collection, getDocs } from "firebase/firestore";

// const DonorSearchPage = () => {
//   const [donors, setDonors] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDonors = async () => {
//       setLoading(true);
//       try {
//         const snapshot = await getDocs(collection(db, "users"));
//         const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         setDonors(data);
//       } catch (err) {
//         console.error("Firebase Error:", err);
//       }
//       setLoading(false);
//     };
//     fetchDonors();
//   }, []);

//   // Filter donors based on search
//   const filteredDonors = donors.filter((d) => {
//     const term = searchTerm.toLowerCase();
//     return (
//       d.name?.toLowerCase().includes(term) ||
//       d.city?.toLowerCase().includes(term) ||
//       d.bloodGroup?.toLowerCase().includes(term)
//     );
//   });

//   return (
//     <div style={styles.page}>
//       <div style={styles.container}>
//         {/* Header */}
//         <h1 style={styles.title}>
//           <span style={{ color: "#fff" }}>Global </span>
//           <span style={{ color: "#ff4d4d" }}>Hero Network</span>
//         </h1>
//         <p style={styles.subtitle}>Live tracking verified blood donors across the globe.</p>

//         {/* Search */}
//         <div style={styles.search}>
//           <input
//             type="text"
//             placeholder="Search by city, name, or blood group..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={styles.input}
//           />
//           <span style={styles.icon}>📍</span>
//         </div>

//         {/* Loading */}
//         {loading ? (
//           <div style={styles.loader}>Accessing GPS Data...</div>
//         ) : filteredDonors.length > 0 ? (
//           <div style={styles.grid}>
//             {filteredDonors.map((donor) => (
//               <div key={donor.id} style={styles.card}>
//                 <div style={styles.cardHeader}>
//                   <div style={styles.bloodBadge}>{donor.bloodGroup || "N/A"}</div>
//                   <div style={styles.pulseDot}></div>
//                 </div>
//                 <h3 style={styles.name}>{donor.name || "Verified Hero"}</h3>
//                 <div style={styles.info}>
//                   <span>🗺️</span>
//                   <span>{donor.city || "Online"}</span>
//                 </div>
//                 <button
//                   style={styles.button}
//                   onClick={() =>
//                     donor.phone
//                       ? (window.location.href = `tel:${donor.phone}`)
//                       : alert("Phone not shared")
//                   }
//                 >
//                   Connect Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div style={styles.noResult}>No donors active in this area.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Styles
// const styles = {
//   page: {
//     minHeight: "100vh",
//     padding: "120px 20px 80px",
//     backgroundImage:
//       "linear-gradient(rgba(10,15,26,0.55), rgba(10,15,26,0.65)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     fontFamily: "'Inter', sans-serif",
//   },
//   container: { maxWidth: "1200px", margin: "0 auto" },
//   title: { fontSize: "60px", fontWeight: 900, textAlign: "center" },
//   subtitle: { color: "#e2e8f0", textAlign: "center", fontSize: "20px", marginBottom: "40px" },
//   search: { position: "relative", maxWidth: "650px", margin: "0 auto 60px" },
//   input: {
//     width: "100%",
//     padding: "22px 30px",
//     borderRadius: "100px",
//     border: "2px solid #ff4d4d",
//     fontSize: "18px",
//     outline: "none",
//   },
//   icon: { position: "absolute", right: "30px", top: "22px", fontSize: "24px" },
//   loader: { color: "#ff4d4d", fontSize: "24px", textAlign: "center", marginTop: "100px" },
//   grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "30px" },
//   card: {
//     background: "rgba(255,255,255,0.95)",
//     borderRadius: "35px",
//     padding: "35px",
//     textAlign: "center",
//     boxShadow: "0 25px 50px -12px rgba(0,0,0,0.08)",
//   },
//   cardHeader: { display: "flex", justifyContent: "space-between", marginBottom: "25px" },
//   bloodBadge: { background: "#ff4d4d", color: "#fff", padding: "10px 22px", borderRadius: "15px" },
//   pulseDot: { width: "12px", height: "12px", background: "#22c55e", borderRadius: "50%" },
//   name: { fontSize: "28px", fontWeight: "800", color: "#0f172a" },
//   info: { display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", margin: "25px 0" },
//   button: { width: "100%", padding: "20px", borderRadius: "20px", background: "#0f172a", color: "#fff", border: "none", fontWeight: "800", fontSize: "17px", cursor: "pointer" },
//   noResult: { textAlign: "center", color: "#fff", marginTop: "60px", fontSize: "20px" },
// };

// export default DonorSearchPage;
import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const DonorSearchPage = () => {
  const [donors, setDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDonors = async () => {
      setLoading(true);
      try {
        const snapshot = await getDocs(collection(db, "users"));
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setDonors(data);
      } catch (err) {
        console.error("Firebase Error:", err);
      }
      setLoading(false);
    };
    fetchDonors();
  }, []);

  const filteredDonors = donors.filter((d) => {
    const term = searchTerm.toLowerCase();
    return (
      d.name?.toLowerCase().includes(term) ||
      d.city?.toLowerCase().includes(term) ||
      d.bloodGroup?.toLowerCase().includes(term)
    );
  });

  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }

        .container { max-width: 1200px; margin: 0 auto; }

        /* HEADER */
        .header { display: flex; justify-content: space-between; align-items: center; gap: 40px; flex-wrap: wrap; margin-bottom: 50px; }
        .textBox { flex: 1; min-width: 280px; }
        .title { font-size: 60px; font-weight: 900; line-height: 1.1; }
        .subtitle { color: #e2e8f0; font-size: 20px; margin-top: 10px; }

        /* SEARCH */
        .searchBox { flex: 1; display: flex; justify-content: flex-end; align-items: center; min-width: 280px; }
        .search { width: 100%; max-width: 520px; }
        .input { width: 100%; padding: 20px 26px; border-radius: 100px; border: 2px solid #ff4d4d; font-size: 16px; outline: none; }

        /* GRID */
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 30px; }
        .card { background: rgba(255,255,255,0.95); border-radius: 35px; padding: 35px; text-align: center; }

        /* MOBILE RESPONSIVE */
        @media (max-width: 768px) {
          .header { flex-direction: column; text-align: center; }
          .title { font-size: 34px; }
          .subtitle { font-size: 16px; }
          .searchBox { justify-content: center; width: 100%; }
          .search { max-width: 100%; }
        }
      `}</style>

      <div className="container">

        {/* HEADER */}
        <div className="header">
          <div className="textBox">
            <h1 className="title">
              <span style={{ color: "#fff" }}>Global </span>
              <span style={{ color: "#ff4d4d" }}>Hero Network</span>
            </h1>
            <p className="subtitle">
              Live tracking verified blood donors across the globe.
            </p>
          </div>

          <div className="searchBox">
            <div className="search">
              <input
                type="text"
                placeholder="Search by city, name, blood group..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input"
              />
            </div>
          </div>
        </div>

        {/* LOADING / CARDS */}
        {loading ? (
          <div style={{ color: "#ff4d4d", textAlign: "center", fontSize: "20px" }}>
            Accessing GPS Data...
          </div>
        ) : filteredDonors.length > 0 ? (
          <div className="grid">
            {filteredDonors.map((donor) => (
              <div key={donor.id} className="card">
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "25px"
                }}>
                  <div style={{
                    background: "#ff4d4d",
                    color: "#fff",
                    padding: "10px 22px",
                    borderRadius: "15px"
                  }}>
                    {donor.bloodGroup || "N/A"}
                  </div>
                  <div style={{
                    width: "12px",
                    height: "12px",
                    background: "#22c55e",
                    borderRadius: "50%"
                  }} />
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "800" }}>{donor.name}</h3>
                <p style={{ marginTop: "10px" }}>{donor.city}</p>
                <button style={{
                  marginTop: "15px",
                  width: "100%",
                  padding: "16px",
                  borderRadius: "20px",
                  background: "#0f172a",
                  color: "#fff",
                  border: "none",
                  fontWeight: "800",
                  cursor: "pointer"
                }}
                  onClick={() => donor.phone ? window.location.href = `tel:${donor.phone}` : alert("Phone not shared")}
                >
                  Connect Now
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", color: "#fff", marginTop: "60px", fontSize: "20px" }}>
            No donors found
          </div>
        )}

      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    padding: "120px 20px 80px",
    backgroundImage:
      "linear-gradient(rgba(10,15,26,0.55), rgba(10,15,26,0.65)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    fontFamily: "'Inter', sans-serif",
  },
};

export default DonorSearchPage;