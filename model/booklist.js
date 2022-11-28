import mongoose from "mongoose";

const booklist = mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  books: [String]
}, {collection: "booklist", timestamps: true})

export default mongoose.model("BookList", booklist);