import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import teamRoutes from "./routes/teamRoutes";

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use("/api", teamRoutes);

app.listen(port, () => {
  console.log(`Serveur accessible via http://localhost:${port}`);
});
