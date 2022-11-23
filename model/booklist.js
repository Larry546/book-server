import mongoose from "mongoose";

const booklist = mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  books: [String]
}, {collection: "booklist", timestamps: true})

export default mongoose.model("BookList", booklist);