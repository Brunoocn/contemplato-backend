import express from "express";
import routes from "./routes/task.router.js";
import db from "./config/db.js";
import cors from "cors";
import taskRouter from "./routes/task.router.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use("/tasks", taskRouter);

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}`));

app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));
