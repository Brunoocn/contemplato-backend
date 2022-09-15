import express from "express";
import auth from "../controllers/auth.controller.js";

const routes = express.Router();

routes.post("/login", auth.login);
routes.post("/register", auth.registerUser);

export { routes as default };
