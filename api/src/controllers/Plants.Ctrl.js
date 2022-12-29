import Plant from "../models/Plants.js";
const createPlant = (req, res) => {
  const plant = Plant(req.body);

  // console.log(user);
  plant
    .save()
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
};

export const plantCtrl = {
  createPlant,
};
