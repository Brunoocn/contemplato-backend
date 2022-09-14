import { DataTypes } from "sequelize";
import db from "../config/db.js";

export default db.define("tasks", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  task: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
