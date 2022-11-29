import Follow from "../model/follow.js";

const follow = async (req, res) => {
  // todo check user

  const follower = "";
  const followee = "";
  const result = await Follow.create({follower, followee});
  res.json(result);
}

const unfollow = async (req, res) => {
  // todo check user

  const follower = "";
  const followee = "";
  const result = await Follow.deleteOne({follower, followee});
  res.json(result);
}

export default (app) => {
  // todo
  app.post('/follow', follow);
  app.delete('/unfollow', unfollow);
}