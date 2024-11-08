import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTeams = async (req: Request, res: Response) => {
  try {
    const teams = await prisma.team.findMany();
    res.status(200).json(teams);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erreur lors de la récupération des équipes." });
  }
};
