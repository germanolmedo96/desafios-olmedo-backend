import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  SECRET: process.env.SECRET,
  adminEmail: process.env.ADMIN_EMAIL,
  adminPassword: process.env.ADMIN_PASSWORD
};