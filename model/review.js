import mongoose from "mongoose";

const review = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  book: String, // isbn
  score: {
    type: Number,
    min: 0,
    max: 5
  },
  content: String
}, {collection: "review", timestamps: true})

export default mongoose.model("Review", review);