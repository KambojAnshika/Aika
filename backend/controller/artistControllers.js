import Artist from "../model/artist.js";

export const getArtist = async (req, res) => {
  try {
    const artist = await Artist.find();
    res.status(200).json(artist);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};
