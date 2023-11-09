import express from "express";
import {  createPlayer,
  updatePlayer,
  deletePlayer,
  getAllPlayers,
  getPlayerByRank,
  getRandomPlayer} from "../controllers/playerController.js";

const router = express.Router();

router.post("/players", createPlayer);

router.put("/players/:id", updatePlayer);

router.delete("/players/:id", deletePlayer);

router.get("/players", getAllPlayers);

router.get("/players/rank/:val", getPlayerByRank);

router.get("/players/random", getRandomPlayer);

export default router;
