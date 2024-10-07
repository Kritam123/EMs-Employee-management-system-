import { Router } from "express";
import { generateAccessToken, login, logout, register, updateUserDetails, getCurrentUser, changeCurrentPassword } from "../controllers/user_controllers";
import { verifyAuth } from "../middlewares/verifyAuth";
import multer from "multer";
const storage = multer.diskStorage({});
const upload = multer({ storage });
export const userRoutes = Router();
userRoutes.post("/register", register);
userRoutes.post("/login", login);
userRoutes.post("/refresh/token", generateAccessToken)
userRoutes.post("/logout", verifyAuth, logout)
userRoutes.put("/update/me", verifyAuth, upload.single("profileImage"), updateUserDetails);
userRoutes.get("/me", verifyAuth, getCurrentUser)
userRoutes.put("/password/change", verifyAuth, changeCurrentPassword)