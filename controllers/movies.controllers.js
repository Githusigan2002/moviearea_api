import Movie from "../models/movie.model.js";

export const MovieIndex = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error, message });
  }
};
export const MovieCreate = async (req, res) => {
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
};

export const MovieSearch = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (movie == null) {
      return res.status(404).json({ message: "Can't find movie" });
    } else {
      return res.json(movie);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const MovieUpdate = async (req, res) => {
  try {
    const result = await Movie.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        title: req.body.title,
        desc: req.body.desc,
      },
      { new: true }
    );
    res.status(200).json(result);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const MovieDelete = async (req, res) => {
  const movieId = req.params.id;

  try {
    const deletedMovie = await Movie.findByIdAndDelete(movieId);

    if (!deletedMovie) {
      return res.status(404).json({ message: "Movie not found" });
    }

    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

