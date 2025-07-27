import { model, Schema } from "mongoose";
//Write schema
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

//create model
const Movie = model("Movie", schema);

export default Movie;
