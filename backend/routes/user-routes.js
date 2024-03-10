import { Router } from "express";
import { getAllUsers, userSignup ,userLogin} from "../controller/user-controller.js";
import { validate, signupValidator, loginValidator } from "../utils/validators.js";

const userRoutes=Router();


userRoutes.get("/",getAllUsers)
userRoutes.post("/signup",validate(signupValidator),userSignup)
userRoutes.post("/login",validate(loginValidator),userLogin)
export default userRoutes