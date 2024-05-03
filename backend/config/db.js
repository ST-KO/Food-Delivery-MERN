import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://scytherock74:EGXhvLo54e53kusW@cluster0.apdl3df.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
