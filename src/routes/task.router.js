import express from "express";
import tasks from "../controllers/task.controller.js";
import checkAuth from "../middlewares/checkAuth.js";

const routes = express.Router();

routes.get("/tasks", checkAuth, tasks.findAllTasks);
routes.get("/tasks/:id", checkAuth, tasks.findTask);
routes.post("/tasks", checkAuth, tasks.createTask);
routes.put("/tasks/:id", checkAuth, tasks.updateTask);
routes.delete("/tasks/:id", checkAuth, tasks.deleteTask);

export { routes as default };
