import { DataTypes } from "sequelize";
import db from "../config/db.js";
import Task from "../models/taksModel.js";
import { hashSync } from "bcrypt";

const User = db.define("users", {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    set(val) {
      const password = "password";
      this.setDataValue(password, hashSync(val, 10));
    },
  },
});

User.hasMany(Task, { foreignKey: "userId" });
Task.belongsTo(User);

export { User as default };
