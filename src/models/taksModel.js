import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Task = db.define("tasks", {
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

export { Task as default };
