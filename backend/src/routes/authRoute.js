import express from "express";
import {
  login,
  logout,
  signUp,
  updateProfile,
  userAuth,
} from "../controllers/authController.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

//@route POST /api/users/signup
//@Desc Register a new user
//@access Public
router.post("/signup", signUp);

//@route POST /api/users/login
//@Desc Login as a user
//@access Public
router.post("/login", login);

//@route POST /api/users/logout
//@Desc Logout as a user
//@access Public
router.post("/logout", logout);

//@route PUT /api/users/update-profile
//@Desc Update users profile picture(Protected route)
//@access Private
router.put("/update-profile", protectRoute, updateProfile);

//@route POST /api/users/profile
//@Desc Get logged-in user's profile(Protected route)
//@access Private
router.get("/user", protectRoute, userAuth);

export default router;
