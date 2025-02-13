import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs"; // ✅ Import filesystem module
import sequelize from "./config/connection"; // Import database connection
import { userRouter } from "./routes/api/userRoutes"; // Import user routes
import externalApis from "./routes/api/externalApis"; // Import external API routes

dotenv.config();

const app = express();
app.use(cors()); // Allow CORS
app.use(express.json());

// ✅ API Routes
app.use("/api/users", userRouter);
app.use("/api/external", externalApis);

// ✅ Serve React Frontend (Only if the folder exists)
const clientBuildPath = path.join(__dirname, "../client/dist");
if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));

  // ✅ Catch-all route to serve frontend
  app.get("*", (_req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
} else {
  console.warn("⚠️ Frontend build folder not found. Skipping static file serving.");
}

// ✅ Define Server Port
const PORT = process.env.PORT || 3001;

// ✅ Sync Database & Start Server
sequelize
  .sync({ force: false }) // Set to `true` only if you want to reset the database
  .then(() => {
    console.log("✅ Database connected successfully");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((error) => console.error("❌ Error connecting to database:", error));
