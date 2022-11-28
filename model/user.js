import mongoose from "mongoose";

const user = mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  passport: {
    type: String,
    require: true,
  },
  fullname: String,
  email: String,
  role: {
    type: String,
    enum: ["common", "creator", "admin"],
    default: "common"
  }
}, {collection: "user"})

export default mongoose.model("User", user);