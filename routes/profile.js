import express from "express";

import {
  getProfile,
  createProfile,
  updateProfile,
  
} from "../controllers/profile.js";

// import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getProfile);

router.post("/",  createProfile);
router.patch("/:id", updateProfile);


export default router;
