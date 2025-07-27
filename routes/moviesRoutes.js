import express from "express";
import {
  MovieCreate,
  MovieIndex,
  MovieUpdate,
  MovieDelete,
} from "../controllers/movies.controllers.js";
const router = express.Router();

// - R
router.get("/", MovieIndex);

// - C
router.post("/", MovieCreate);

// -U
router.put("/:id", MovieUpdate);

// -D
router.delete("/:id", MovieDelete);

export default router;
