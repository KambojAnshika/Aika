import mongoose from "mongoose";

const artistSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const Artist = mongoose.model("Artist", artistSchema);

export default Artist;