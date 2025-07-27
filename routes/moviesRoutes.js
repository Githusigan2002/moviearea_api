import express from "express";
import {
  MovieCreate,
  MovieIndex,
  MovieUpdate,
  MovieDelete,
  MovieSearch,
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

//search
router.get("/:id", MovieSearch);

export default router;
