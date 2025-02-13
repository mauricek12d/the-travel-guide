import express from "express";
import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../models";
const validator = require("express-validator");
import authMiddleware from "../../middleware/auth";

const { body, validationResult } = validator; 

const router = express.Router();

// ✅ User Registration (Sign Up)
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password").isLength({ min: 6 }).withMessage("Password too short"),
  ],
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
      return;
    }

    try {
      const { name, email, password } = req.body;
      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        res.status(400).json({ message: "Email already registered" });
        return;
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ name, email, password: hashedPassword });

      res.status(201).json({ message: "User registered successfully", user: newUser });
    } catch (error) {
      next(error);
    }
  }
);

// ✅ User Login
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password").notEmpty().withMessage("Password is required"),
  ],
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(401).json({ message: "Invalid credentials" });
        return;
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
        expiresIn: "24h", 
      });

      res.json({ message: "Login successful", token });
    } catch (error) {
      next(error);
    }
  }
);

// ✅ Refresh Token Route (Extends Expiry Without Logging Out)
router.post(
  "/refresh-token",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { token } = req.body;
      if (!token) {
        res.status(400).json({ message: "No token provided" });
        return;
      }

      const decoded: any = jwt.verify(token, process.env.JWT_SECRET as string, { ignoreExpiration: true });

      const user = await User.findByPk(decoded.id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      const newToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: "24h" });

      res.json({ token: newToken });
    } catch (error) {
      res.status(401).json({ message: "Invalid token" });
    }
  }
);

// ✅ Get All Users (Protected)
router.get(
  "/",
  authMiddleware,
  async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const users = await User.findAll({ attributes: { exclude: ["password"] } });
      res.json(users);
    } catch (error) {
      next(error);
    }
  }
);

// ✅ Get User by ID (Protected)
router.get(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
);

// ✅ Delete User (Protected)
router.delete(
  "/:id",
  authMiddleware,
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      await user.destroy();
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      next(error);
    }
  }
);

export { router as userRouter };
