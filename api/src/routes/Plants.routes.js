import { Router } from "express";
import { userCtrl } from "../controllers/UserCtrl.js";
import { plantCtrl } from "../controllers/Plants.Ctrl.js";
const router = Router();
router.get("/users", userCtrl.testing);
router.post("/create-user", userCtrl.createUser);
router.post("/create-plant", plantCtrl.createPlant);

export default router;
