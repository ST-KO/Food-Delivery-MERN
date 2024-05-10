import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // to prevent from creating new account with same email
    },
    password: {
      type: String,
      required: true,
    },
    cartData: {
      type: Object,
      default: {},
    },
  },
  {
    minimize: false,
  }
);

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
