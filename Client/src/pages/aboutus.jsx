// import React from 'react';

// const AboutUs = () => {
//     return (
//         <div style={styles.pageWrapper}>
//             <div style={styles.container}>

//                 {/* Header Section */}
//                 <div style={styles.headerBox}>
//                     <div style={styles.badge}>Innovation & Compassion</div>
//                     <h1 style={styles.mainTitle}>
//                         Building a <span style={styles.redText}>Smarter</span> Network <br />
//                         to Save Lives
//                     </h1>
//                     <div style={styles.orangeLine}></div>
//                 </div>

//                 {/* Intro Text */}
//                 <div style={styles.textContainer}>
//                     <p style={styles.description}>
//                         At <strong>BloodLine</strong>, we leverage cutting-edge technology to connect donors
//                         to recipients in real-time, ensuring rapid, efficient, and transparent support
//                         across Pakistan.
//                     </p>
//                 </div>

//                 {/* 6 Modern Cards Grid */}
//                 <div style={styles.statsGrid}>
//                     <div style={styles.statCard}>
//                         <h2 style={styles.statNumber}>50K+</h2>
//                         <p style={styles.statLabel}>Lives Empowered</p>
//                     </div>
//                     <div style={styles.statCard}>
//                         <h2 style={styles.statNumber}>99.9%</h2>
//                         <p style={styles.statLabel}>System Uptime</p>
//                     </div>
//                     <div style={styles.statCard}>
//                         <h2 style={styles.statNumber}>200+</h2>
//                         <p style={styles.statLabel}>Cities Covered</p>
//                     </div>
//                     <div style={styles.statCard}>
//                         <h2 style={styles.statNumber}>1M+</h2>
//                         <p style={styles.statLabel}>Total Interactions</p>
//                     </div>
//                     <div style={styles.statCard}>
//                         <h2 style={styles.statNumber}>&lt; 5 min</h2>
//                         <p style={styles.statLabel}>Successful Connections</p>
//                     </div>
//                     <div style={styles.statCard}>
//                         <h2 style={styles.statNumber}>24/7</h2>
//                         <p style={styles.statLabel}>Emergency Support</p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     );
// };

// /* --- Dark Modern Styles --- */
// const styles = {
//     pageWrapper: {
//         minHeight: '100vh',
//         width: '100%',
//         padding: '140px 20px 80px',
//         backgroundColor: '#0a0f1a', // Pure dark background
//         backgroundImage: `linear-gradient(rgba(10, 15, 26, 0.55), rgba(10, 15, 26, 0.65)), 
// url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,



//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed',
//         display: 'flex',
//         justifyContent: 'center',
//         fontFamily: "'Inter', sans-serif",
//     },
//     container: {
//         maxWidth: '1200px',
//         width: '100%',
//     },
//     headerBox: {
//         marginBottom: '30px',
//     },
//     badge: {
//         display: 'inline-block',
//         padding: '6px 18px',
//         borderRadius: '8px',
//         border: '1.5px solid #ff4d4d',
//         color: '#ff4d4d',
//         fontSize: '14px',
//         fontWeight: '700',
//         marginBottom: '20px',
//         textTransform: 'uppercase',
//     },
//     mainTitle: {
//         fontSize: 'clamp(32px, 5vw, 65px)',
//         fontWeight: '900',
//         color: '#ffffff',
//         lineHeight: '1.1',
//         letterSpacing: '-2px',
//         marginBottom: '25px',
//     },
//     redText: {
//         color: '#ff4d4d',
//     },
//     orangeLine: {
//         width: '150px',
//         height: '6px',
//         background: 'linear-gradient(90deg, #ff4d4d, #f97316)',
//         borderRadius: '10px',
//         marginBottom: '40px',
//     },
//     textContainer: {
//         maxWidth: '750px',
//         marginBottom: '60px',
//     },
//     description: {
//         fontSize: '19px',
//         color: '#94a3b8',
//         lineHeight: '1.7',
//     },
//     statsGrid: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
//         gap: '25px',
//     },
//     statCard: {
//         background: 'rgba(255, 255, 255, 0.03)', // Very subtle glass effect
//         backdropFilter: 'blur(10px)',
//         padding: '50px 30px',
//         borderRadius: '24px',
//         textAlign: 'center',
//         border: '1px solid rgba(255, 255, 255, 0.08)',
//         transition: 'all 0.3s ease',
//     },
//     statNumber: {
//         fontSize: '48px',
//         fontWeight: '900',
//         color: '#ffffff',
//         marginBottom: '8px',
//     },
//     statLabel: {
//         fontSize: '14px',
//         fontWeight: '600',
//         color: '#ff4d4d',
//         textTransform: 'uppercase',
//         letterSpacing: '1.5px',
//     },
// };

// export default AboutUs;
import React from 'react';

const AboutUs = () => {
    return (
        <div style={styles.pageWrapper}>
            <div style={styles.container}>

                {/* Header Section */}
                <div style={styles.headerBox}>
                    <div style={styles.badge}>Innovation & Compassion</div>

                    <h1 style={styles.mainTitle}>
                        Building a <span style={styles.redText}>Smarter</span> Network <br />
                        to Save Lives
                    </h1>

                    <div style={styles.orangeLine}></div>
                </div>

                {/* Intro Text */}
                <div style={styles.textContainer}>
                    <p style={styles.description}>
                        At <strong>BloodLine</strong>, we leverage cutting-edge technology to connect donors
                        to recipients in real-time, ensuring rapid, efficient, and transparent support
                        across Pakistan.
                    </p>
                </div>

                {/* Stats Grid */}
                <div style={styles.statsGrid}>
                    <div style={styles.statCard}>
                        <h2 style={styles.statNumber}>50K+</h2>
                        <p style={styles.statLabel}>Lives Empowered</p>
                    </div>

                    <div style={styles.statCard}>
                        <h2 style={styles.statNumber}>99.9%</h2>
                        <p style={styles.statLabel}>System Uptime</p>
                    </div>

                    <div style={styles.statCard}>
                        <h2 style={styles.statNumber}>200+</h2>
                        <p style={styles.statLabel}>Cities Covered</p>
                    </div>

                    <div style={styles.statCard}>
                        <h2 style={styles.statNumber}>1M+</h2>
                        <p style={styles.statLabel}>Total Interactions</p>
                    </div>

                    <div style={styles.statCard}>
                        <h2 style={styles.statNumber}>&lt; 5 min</h2>
                        <p style={styles.statLabel}>Successful Connections</p>
                    </div>

                    <div style={styles.statCard}>
                        <h2 style={styles.statNumber}>24/7</h2>
                        <p style={styles.statLabel}>Emergency Support</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

/* --- RESPONSIVE DARK MODERN STYLES --- */
const styles = {
    pageWrapper: {
        minHeight: '100vh',
        width: '100%',
        padding: '80px 16px', // mobile friendly (was 140px)
        backgroundColor: '#0a0f1a',
        backgroundImage: `linear-gradient(rgba(10, 15, 26, 0.55), rgba(10, 15, 26, 0.65)),
        url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "'Inter', sans-serif",
        overflowX: 'hidden'
    },

    container: {
        maxWidth: '1200px',
        width: '100%',
    },

    headerBox: {
        marginBottom: '30px',
    },

    badge: {
        display: 'inline-block',
        padding: '6px 14px',
        borderRadius: '8px',
        border: '1.5px solid #ff4d4d',
        color: '#ff4d4d',
        fontSize: '12px',
        fontWeight: '700',
        marginBottom: '16px',
        textTransform: 'uppercase',
    },

    mainTitle: {
        fontSize: 'clamp(24px, 5vw, 65px)', // responsive fixed
        fontWeight: '900',
        color: '#ffffff',
        lineHeight: '1.1',
        letterSpacing: '-1px',
        marginBottom: '20px',
    },

    redText: {
        color: '#ff4d4d',
    },

    orangeLine: {
        width: '120px',
        height: '5px',
        background: 'linear-gradient(90deg, #ff4d4d, #f97316)',
        borderRadius: '10px',
        marginBottom: '30px',
    },

    textContainer: {
        maxWidth: '750px',
        marginBottom: '40px',
    },

    description: {
        fontSize: '16px', // responsive fix
        color: '#94a3b8',
        lineHeight: '1.7',
    },

    statsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', // mobile fix
        gap: '16px',
    },

    statCard: {
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        padding: '30px 20px', // responsive padding
        borderRadius: '20px',
        textAlign: 'center',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease',
    },

    statNumber: {
        fontSize: '36px', // responsive fix
        fontWeight: '900',
        color: '#ffffff',
        marginBottom: '6px',
    },

    statLabel: {
        fontSize: '12px', // responsive fix
        fontWeight: '600',
        color: '#ff4d4d',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
};

export default AboutUs;