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
  const user = await User.findOne({username: info.username, password: info.password});

  if (!user) {
    res.status(403);
    return;
  }

  res.status(200);
}

const profileById = async (req, res) => {
  // todo
  const uid = req.params.uid;
  const user = await User.findById(uid, {password: false});
  res.json(user);
}

const profile = async (req, res) => {
  // todo
  const uid = "";
  const user = await User.findById(uid, {password: false});
  res.json(user);
}

export default (app) => {
  app.post('/register', register);
  app.post('/login', login)
  app.post('/profile/:uid', profileById);
}