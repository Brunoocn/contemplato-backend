import express from "express";
import db from "./config/db.js";
import cors from "cors";
import taskRouter from "./routes/task.router.js";
import authRouter from "./routes/auth.router.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/tasks", taskRouter);
app.use("/auth", authRouter);

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(5002, () => console.log("Servidor iniciado na porta 5002"));
