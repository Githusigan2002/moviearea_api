import express from "express";
import MovieRoute from "./routes/moviesRoutes.js";
import connectDB from "./lib/db.js";

const app = express();
const PORT = 5000;

//Data understanding middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connect DB
connectDB();
app.get("/", (req, res) => {
  res.json({ msg: "Hello!" });
});

//CRUD Fn of Movies
app.use("/movies", MovieRoute);

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
