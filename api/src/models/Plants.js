import mongoose from "mongoose";
const PlantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});
const Plant = mongoose.model("Plant", PlantSchema);
export default Plant;
