import mongoose from "mongoose";
import bycrpyt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js"
import { JWT_EXPIRES_IN, JWT_SECRET } from "../config/env.js";

export const signUp = async(req, res, next)=>{
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const error = new Error("User already exists");
            error.statusCode = 409;
            throw error;
        };

        // hash password
        const salt = await bycrpyt.genSalt(10);
        const hashed = await bycrpyt.hash(password, salt);

        const newUsers = await User.create([{ name, email, password: hashed}], {session});

        const token = jwt.sign({userId: newUsers[0]._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        await session.commitTransaction();
        await session.endSession();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                token,
                user: newUsers[0]
            }

        })
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }
}


export const signIn = async(req, res, next)=>{

    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        if (!user) {
            const error = new Error("User not found");
            error.statusCode = 404;
            throw error;
        }

        const validatePass = await bycrpyt.compare(password, user.password);

        if (!validatePass) {
            const error = new Error("Invalid password");
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});

        res.status(200).json({
            success: true,
            message: "User signed in successfully",
            data: {
                token,
                user
            }
        })

    } catch (error) {
        next(error);
    }


}


// eslint-disable-next-line no-unused-vars
export const signOut = async(req, res, next)=>{
    
}