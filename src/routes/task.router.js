import express from "express";
import tasks from "../controllers/task.controller.js";
import checkAuth from "../middlewares/checkAuth.js";

const routes = express.Router();

routes.get("/", checkAuth, tasks.findAllTasks);
routes.get("/:id", checkAuth, tasks.findTask);
routes.post("/", checkAuth, tasks.createTask);
routes.put("/:id", checkAuth, tasks.updateTask);
routes.delete("/:id", checkAuth, tasks.deleteTask);

export { routes as default };
