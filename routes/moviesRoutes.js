import express from "express";
const router = express.Router();


// - R
router.get("/movies", () => {});

// - C
router.post("/movies", () => {});

// -U
router.put("/movies/:id", () => {});

// -D
router.delete("/movies/:id", () => {});

export default router;
