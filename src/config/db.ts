import mongoose from "mongoose";

export const db = () => {
    console.log("db url",process.env.DB_URL);
    
  mongoose
    .connect(process.env.DB_URL as string)
    .then(() => console.log("Connected to db..."))
    .catch((err: unknown) =>
      console.log(
        "Error occured while connecting to db - ",
        JSON.stringify(err)
      )
    );
};
