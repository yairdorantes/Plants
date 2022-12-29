import User from "../models/User.js";
const testing = (req, res) => {
  // console.log("jajaj");

  User.find({}, (err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
};

const createUser = (req, res) => {
  const user = User(req.body);

  // console.log(user);
  user
    .save()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

export const userCtrl = {
  testing,
  createUser,
};
