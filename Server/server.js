const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
// Agar .env file nahi hai to ye seedha localhost se connect ho jayega
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/bloodline';

mongoose.connect(mongoURI)
    .then(() => console.log('✅ MongoDB Connected Successfully: localhost'))
    .catch(err => console.log('❌ MongoDB Connection Error:', err));

// --- DONOR MODEL (Database Schema) ---
const donorSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    city: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const Donor = mongoose.model('Donor', donorSchema);

// --- ROUTES ---

// 1. REGISTER ROUTE
app.post('/api/auth/register', async (req, res) => {
    try {
        const { fullName, bloodGroup, city, phone, password } = req.body;
        
        // Check if donor already exists
        let donorExists = await Donor.findOne({ phone });
        if (donorExists) {
            return res.status(400).json({ msg: "Ye Phone Number pehle se mojood hai!" });
        }

        const newDonor = new Donor({ fullName, bloodGroup, city, phone, password });
        await newDonor.save();
        
        res.status(201).json({ msg: "Mubarak ho! Donor Register ho gaya." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server Error: Registration fail ho gayi." });
    }
});

// 2. LOGIN ROUTE
app.post('/api/auth/login', async (req, res) => {
    try {
        const { phone, password } = req.body;
        const donor = await Donor.findOne({ phone });
        
        if (!donor || donor.password !== password) {
            return res.status(400).json({ msg: "Ghalat Phone Number ya Password!" });
        }
        
        // Password ko response se nikalna (Security ke liye)
        const { password: _, ...donorData } = donor._doc;
        res.json({ msg: "Login Successful!", donor: donorData });
    } catch (err) {
        res.status(500).json({ msg: "Server Error during login." });
    }
});

// 3. SEARCH DONORS ROUTE (New Feature)
app.get('/api/donors/search', async (req, res) => {
    try {
        const { bloodGroup, city } = req.query;
        let query = {};
        
        // Agar user ne blood group select kiya hai
        if (bloodGroup && bloodGroup !== "All") {
            query.bloodGroup = bloodGroup;
        }
        
        // Agar city likhi hai (Case-insensitive search)
        if (city) {
            query.city = new RegExp(city, 'i');
        }

        const donors = await Donor.find(query).select('-password');
        res.json(donors);
    } catch (err) {
        res.status(500).json({ msg: "Search fail ho gayi." });
    }
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 API Endpoints: Register, Login, Search`);
});