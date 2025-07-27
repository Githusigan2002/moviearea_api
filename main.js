import express from "express";
import MovieRoute from "./routes/moviesRoutes.js";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json({ msg: "Hello!" });
});

//CRUD Fn of Movies
app.use("/movies", MovieRoute);

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
