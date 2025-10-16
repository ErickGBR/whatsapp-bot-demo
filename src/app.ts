import express from "express";
import whatsappRoutes from "./routes/whatsapp.routes";

const app = express();
app.use(express.json());

// Rutas
app.use("/whatsapp", whatsappRoutes);

export default app;
