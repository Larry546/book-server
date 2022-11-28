import User from "../model/user.js";

const createUser = async (req, res) => {
  const user = req.body;
  const name = await User.findOne({username: user.username});
  if (name) {
    res.status(403);
    return;
  }

  const resUser = await User.create(user);
  res.json(resUser);
};

// test
const findAllUser = async (req, res) => {
   const users =  await User.find();
   res.json(users);
}

export default (app) => {
  app.post("/user", createUser);
  app.get("/user", findAllUser)
}