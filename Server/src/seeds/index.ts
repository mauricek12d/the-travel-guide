import sequelize from "../config/connection";
import { User } from "../models/User";
import bcrypt from "bcrypt";

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); 

    const hashedPassword = await bcrypt.hash("password123", 10);

    await User.bulkCreate([
      { name: "John Doe", email: "john@example.com", password: hashedPassword },
      { name: "Jane Smith", email: "jane@example.com", password: hashedPassword },
    ]);

    console.log("Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDatabase();
