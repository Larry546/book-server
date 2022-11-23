import mongoose from "mongoose";

const likebook = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  book: String // isbn
}, {collection: "likebook", timestamps: true})

export default mongoose.model("LikeBook", likebook);