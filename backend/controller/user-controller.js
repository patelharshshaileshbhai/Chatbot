import User from "../models/User.js";
import {hash,compare} from "bcrypt"
export const getAllUsers = async (req, res,next) => {
    //get all users

    try {
        const users=await User.find();
        return res.status(200).json({message:"OK", users});
    } catch (error) {
        return res.status(200).json({message:"error", cause:error.message});
    }
}

export const userSignup = async (req, res,next) => {
    //get all users

    try {
       const {name,email,password}=req.body;
       const existingUser=await User.findOne({email});
       if(existingUser) return res.status(200).json({message:"User already exists"});
        const hasedPassword=await hash(password,10);
       const user=new User({name,email,password:hasedPassword}); 
       await user.save();
       return res.status(200).json({message:"OK",id:user._id.toString(),user});
    } catch (error) {
        return res.status(200).json({message:"error", cause:error.message});
    }
}

export const userLogin = async (req, res,next) => {
    //get all users

    try {
       const {email,password}=req.body;
       const user=await User.findOne({email});
       if(!user) {
        return res.status(200).json({message:"User not found"});
    }
    const isPasswordCorrect=await compare(password,user.password);
    if(!isPasswordCorrect) {
        return res.status(200).json({message:"Invalid credentials"});}
    return res.status(200).json({message:"OK",id:user._id.toString(),user});
    } catch (error) {
        return res.status(200).json({message:"error", cause:error.message});
    }
}