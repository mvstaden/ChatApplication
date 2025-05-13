import express from "express";

const router = express.Router();

//@route POST /api/users/signup
//@dDesc Register a new user
//@access Public
router.post("/signup", signUp);

//@route POST /api/users/login
//@dDesc Login as a user
//@access Public
router.post("/login", login);

//@route POST /api/users/logout
//@dDesc Logout as a user
//@access Public
router.post("/logout", logout);

//@route POST /api/users/profile
//@dDesc Get logged-in user's profile(Protected route)
//@access Private
router.post("/user", userAuth);
