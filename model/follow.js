import mongoose from "mongoose";

const follow = mongoose.Schema({
  follower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  followee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {collection: "follow", timestamps: true})

export default mongoose.model("Follow", follow);