import express from "express";
import tasks from "../controllers/task.controller.js";

const routes = express.Router();

routes.get("/tasks", tasks.findAllTasks);
routes.get("/tasks/:id", tasks.findTask);
routes.put("/tasks/:id", tasks.updateTask);
routes.delete("/tasks/:id", tasks.deleteTask);

export { routes as default };
