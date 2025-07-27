import express from "express";
const router = express.Router();

// - R
router.get("/", (req, res) => {
  res.send("GET all movies");
});

// - C
router.post("/", (req, res) => {
  res.send("Create a movie");
}); 

// -U
router.put("/:id", (req, res) => {
  res.send("Update a movie");
});

// -D
router.delete("/:id", (req, res) => {
  res.send("Delete a movie");
});

export default router;
