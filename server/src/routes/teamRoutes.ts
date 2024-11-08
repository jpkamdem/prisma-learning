import express from "express";
import { getTeams } from "../controllers/team.controller";

const router = express.Router();

router.get("/teams", getTeams);

export default router;
