import express from "express";
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  req.body("fgj");
});

//CRUD Fn of Movies
// - R
app.get("/movies", () => {});

// - C
app.post("/movies", () => {});

// -U
app.put("/movies/:id", () => {});

// -D
app.delete("/movies/:id", () => {});


app.listen(PORT, () => {
  console.log(`App listening on port http://localhost/${PORT}`);
});
