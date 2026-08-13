import express from "express";
import { getCurrentUser } from "../controllers/user.Controller.<i class="fas fa-js    "></i>";
import isAuth from "../middlewares/isAuth.js"
const userRouter=express.Router();

userRouter.post("/current",isAuth,getCurrentUser)


export default userRouter;