import Plant from "../models/Plants.js";

const getPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getGreenHousePlants = async (req, res) => {
  try {
    const plants = await Plant.find({ "owner._id": req.params.id });
    res.json(plants);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getPlant = async (req, res) => {
  try {
    const plant = await Plant.findById(req.params.id);
    res.json(plant);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const createPlant = async (req, res) => {
  console.log(req.body);
  try {
    const plant = Plant(req.body);
    await plant.save();
    res.json({ message: "success!" });
  } catch (err) {
    res.json(err);
  }
};

const updatePlant = async (req, res) => {
  try {
    const plant = await Plant.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "plant updated successfully", plant });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const deletePlant = async (req, res) => {
  console.log(req.params.id);
  try {
    await Plant.findByIdAndRemove(req.params.id);
    res.json({ message: "success, deleted" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const plantCtrl = {
  createPlant,
  getPlants,
  getPlant,
  deletePlant,
  updatePlant,
  getGreenHousePlants,
};
