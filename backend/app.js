import express from "express";
import mongoose from "mongoose";
const app = express();
import dotenv from "dotenv";
import cors from "cors";

import artist from "./route/artist.js";
import user from "./route/user.js";

app.use(cors());
app.use(express.json());

dotenv.config({ path: "backend/config/config.env" });

const URI = process.env.DB_LOCAL_URI;

//connect to mongoose
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error: ", error);
}

// defining routes
app.use("/artist", artist);
app.use("/user", user);

app.listen(process.env.PORT, () => {
  console.log(
    `Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
