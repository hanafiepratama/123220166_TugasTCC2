import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
 
const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);

// Initialize database
const initializeDB = async () => {
    try {
        await db.authenticate();
        console.log('Database connected...');
        
      
        await db.sync();
    } catch (error) {
        console.error('Connection error:', error);
    }
};

initializeDB();
 
app.listen(5000, ()=> console.log('Server Berjalan...'));