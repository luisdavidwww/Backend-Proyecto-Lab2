import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/Lab2",
  PORT: process.env.PORT || 3000,
  SECRET: 'secreto'
};
