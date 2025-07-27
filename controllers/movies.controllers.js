import Movie from "../models/movie.model.js";

export const MovieIndex = (req, res) => {
  res.send("GET all movies");
};
export const MovieCreate = async (req, res) => {
  //id, title, desc
  // console.log(req.body);

  //validate data
  const newMovie = new Movie({
    title: req.body.title,
    desc: req.body.desc,
  });

  try {
    const movie = await newMovie.save();
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }

  // return res.json(req.body);
};

export const MovieUpdate = (req, res) => {
  res.send("Update a movie");
};

export const MovieDelete = (req, res) => {
  res.send("Delete a movie");
};
