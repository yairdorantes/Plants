import express from "express";
import cors from "cors";
import Routes from "./routes/Plants.routes.js";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/", Routes);

// app.use("/api/", commerceRoutes);

export default app;
