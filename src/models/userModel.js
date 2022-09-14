import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Task from "../models/taksModel.js";

const User = db.define("users", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User);

export default { User };
