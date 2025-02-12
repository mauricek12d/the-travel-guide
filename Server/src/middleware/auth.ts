import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  console.log("🔹 Incoming request to:", req.originalUrl); // ✅ Logs request URL

  try {
    const authHeader = req.header("Authorization");
    console.log("🔹 Authorization Header:", authHeader); // ✅ Logs raw Authorization header

    if (!authHeader) {
      console.log("🔴 No token provided");
      res.status(401).json({ message: "Access denied: No token provided" });
      return;
    }

    const token = authHeader.split(" ")[1];
    console.log("🔹 Extracted Token:", token); // ✅ Logs extracted token

    if (!token) {
      console.log("🔴 Token missing from header");
      res.status(401).json({ message: "Access denied: Token missing" });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    console.log("✅ Token successfully verified:", decoded); // ✅ Logs decoded JWT payload

    (req as any).user = decoded;
    next();
  } catch (error) {
    console.log("🔴 Invalid Token Error:", (error as Error).message); // ✅ Logs JWT verification errors
    res.status(403).json({ message: "Invalid token" });
  }
};

export default authMiddleware;
