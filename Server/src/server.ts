import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/connection"; // Import database connection
import { userRouter } from "./routes/api/userRoutes"; // Import user routes
import externalApis from "./routes/api/externalApis"; // Import external API routes

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/users", userRouter);
app.use("/api/external", externalApis);

const PORT = process.env.PORT || 3001;

// Sync Database & Start Server
sequelize
  .sync({ force: false }) 
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("Error connecting to database:", error));
