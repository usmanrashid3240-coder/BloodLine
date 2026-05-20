import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Backend Login API call
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        phone: phone,
        password: password
      });

      alert("Login Successful! Welcome Back.");
      console.log(res.data);
      
      // User info save karna taake dashboard par naam dikha sakein
      localStorage.setItem('user', JSON.stringify(res.data.donor));
      
      // Login ke baad Search page par bhej dein
      navigate('/search'); 
    } catch (err) {
      alert(err.response?.data?.msg || "Login fail ho gaya. Details check karein.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="flex flex-col md:flex-row max-w-4xl w-full bg-white rounded-[40px] overflow-hidden shadow-2xl">
        
        {/* Left Side (Black) */}
        <div className="md:w-1/3 bg-black p-12 flex flex-col justify-center">
          <h1 className="text-white text-5xl font-[1000] italic leading-tight uppercase tracking-tighter">
            WELCOME <br /> <span className="text-red-600">BACK</span>
          </h1>
          <p className="text-gray-400 font-bold mt-6 text-xs leading-relaxed uppercase tracking-widest">
            Log in to manage your donor profile and availability.
          </p>
        </div>

        {/* Right Side (Form) */}
        <div className="md:w-2/3 p-12 bg-white flex flex-col justify-center">
          <h2 className="text-2xl font-[1000] italic uppercase mb-8">USER <span className="text-red-600">LOGIN</span></h2>

          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="text" 
              placeholder="PHONE NUMBER OR EMAIL" 
              className="w-full p-4 bg-blue-50/50 rounded-xl font-bold outline-none border-none"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            
            <input 
              type="password" 
              placeholder="PASSWORD" 
              className="w-full p-4 bg-blue-50/50 rounded-xl font-bold outline-none border-none"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="w-full bg-red-600 text-white p-4 rounded-xl font-[1000] uppercase italic tracking-widest hover:bg-black transition-all shadow-lg">
              SIGN IN
            </button>
          </form>

          <p className="text-center text-gray-400 font-bold mt-8 text-xs tracking-widest uppercase">
            NEW TO BLOODLINE? <Link to="/register" className="text-red-600 border-b-2 border-red-600 pb-0.5 ml-1">REGISTER NOW</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;