import { Sequelize } from "sequelize-typescript";
import { User } from "../models/user.model";
import dotenv from "dotenv";

dotenv.config();

export const sequelize = new Sequelize({
  dialect: "mariadb",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  models: [User],
});
