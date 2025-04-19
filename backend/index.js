import express from "express";
import cors from "cors";
import notesRouter from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(notesRouter);

// Gunakan PORT dari environment variable
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Berjalan di Port ${PORT}`));
