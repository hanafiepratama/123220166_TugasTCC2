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
        
        // Sync all models with database
        // Note: { force: true } will drop tables if they exist
        // Use only in development
        await db.sync();
    } catch (error) {
        console.error('Connection error:', error);
    }
};

initializeDB();
 
app.listen(5000, ()=> console.log('Server up and running...'));