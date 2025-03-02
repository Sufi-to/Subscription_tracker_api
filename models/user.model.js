import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'User Name is required'],
        trim: true,
        minLength: 2,
        maxLength: 50,
      },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please fill a valid email address'],
      },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        minLength: 6,
      }
    },
    { timestamps: true });

const User = model("User", userSchema)

export default User;