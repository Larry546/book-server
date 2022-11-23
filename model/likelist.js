import mongoose from "mongoose";

const likelist = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  booklist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BookList"
  }
}, {collection: "likelist", timestamps: true})

export default mongoose.model("LikeList", likelist);