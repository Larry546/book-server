import User from "../model/user.js";

const register = async (req, res) => {
  const user = req.body;
  const name = await User.findOne({username: user.username});
  if (name) {
    res.status(403);
    return;
  }

  await User.create(user);
  res.status(200);
};

const login = async (req, res) => {
  const info = req.body;
  const user = await User.findOne({username: info.username, passport: info.passport});

  if (!user) {
    res.status(403);
    return;
  }

  res.status(200);
}

export default (app) => {
  app.post("/register", register);
  app.post("/login", login)
}