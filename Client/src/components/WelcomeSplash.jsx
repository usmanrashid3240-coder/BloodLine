import React, { useState } from 'react';

const WelcomeSplash = ({ onFinish }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(() => {
      onFinish(); 
    }, 800);
  };

  return (
    <>
      <style>
        {`
          .splash-container {
            position: fixed;
            inset: 0;
            background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            overflow: hidden;
            transition: opacity 0.8s ease-in-out, transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .fade-out {
            opacity: 0;
            transform: scale(1.2);
            filter: blur(10px);
            pointer-events: none;
          }

          /* Intense Blood Red Background */
          .background-fx {
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 1;
            background: 
              radial-gradient(circle at 50% 50%, rgba(180, 0, 0, 0.45) 0%, rgba(20, 0, 0, 0.8) 50%, #000 100%),
              linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.9));
          }

          /* Animated Blood Clouds */
          .blood-cloud {
            position: absolute;
            width: 80vw;
            height: 80vw;
            background: radial-gradient(circle, rgba(255, 0, 0, 0.15) 0%, transparent 60%);
            filter: blur(120px);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation: breathe 8s infinite alternate ease-in-out;
            z-index: 2;
          }

          @keyframes breathe {
            0% { opacity: 0.4; transform: translate(-50%, -50%) scale(0.8); }
            100% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); }
          }

          /* Premium Dark Card */
          .glass-panel {
            position: relative;
            z-index: 10;
            background: rgba(0, 0, 0, 0.75); 
            backdrop-filter: blur(25px);
            -webkit-backdrop-filter: blur(25px);
            border: 1px solid rgba(255, 0, 0, 0.3);
            padding: 5rem 3rem;
            border-radius: 40px;
            text-align: center;
            max-width: 600px;
            width: 90%;
            box-shadow: 0 0 150px rgba(139, 0, 0, 0.4);
          }

          .bloodline-logo {
            color: #ffffff;
            font-size: clamp(2.5rem, 8vw, 4.5rem);
            font-weight: 900;
            letter-spacing: 18px;
            margin-bottom: 15px;
            text-transform: uppercase;
            /* Stronger Red Glow */
            text-shadow: 0 0 20px rgba(255, 0, 0, 0.8), 0 0 40px rgba(139, 0, 0, 0.6);
          }

          .tagline-text {
            color: #d1d1d1;
            font-size: 0.95rem;
            line-height: 1.8;
            margin-bottom: 3rem;
            letter-spacing: 2px;
            font-weight: 400;
            text-shadow: 0 2px 4px rgba(0,0,0,0.5);
          }

          .legacy-btn {
            background: rgba(139, 0, 0, 0.1);
            color: #fff;
            border: 2px solid #ff0000;
            padding: 16px 50px;
            font-size: 0.9rem;
            font-weight: 700;
            letter-spacing: 5px;
            border-radius: 50px;
            cursor: pointer;
            text-transform: uppercase;
            transition: all 0.4s ease;
            box-shadow: inset 0 0 10px rgba(255, 0, 0, 0.2);
          }

          .legacy-btn:hover {
            background: #ff0000;
            color: #000;
            box-shadow: 0 0 50px rgba(255, 0, 0, 0.9);
            transform: translateY(-5px);
          }
        `}
      </style>

      <div className={`splash-container ${isExiting ? 'fade-out' : ''}`}>
        <div className="background-fx"></div>
        <div className="blood-cloud"></div>
        
        <div className="glass-panel">
          <h1 className="bloodline-logo">BLOODLINE</h1>
          <p className="tagline-text">
            BOUND BY BLOOD, DRIVEN BY DESTINY. <br/>
            YOUR CONTRIBUTION SAVES LIVES.
          </p>
          <button className="legacy-btn" onClick={handleEnter}>
            ENTER THE LEGACY
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomeSplash;