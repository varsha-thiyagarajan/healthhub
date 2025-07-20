const express = require("express");
const cors = require("cors");           // Import cors first
const dotenv = require('dotenv');
const connectDB = require("./config/db");

dotenv.config();

const app = express();                  // ✅ Define app BEFORE using it

app.use(cors());                        // ✅ Now it's safe to use
app.use(express.json());

connectDB();

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
