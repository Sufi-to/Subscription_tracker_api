import User from "../models/user.model.js";


export const getUsers = async(req, res, next) => {

    try {
        const allUsers = User.find();

        // if (!allUsers) {
        //     const error = new Error("No users found!");
        //     error.statusCode = 404;
        //     throw error;
        // }
        res.status(200).json({success: true, data: allUsers});
    } catch (error) {
        next(error)
    }
}

export const getUser = async(req, res, next) => {

    try {
        // eslint-disable-next-line no-undef
        const user = User.findById(req,params.id).select("-password");

        if (!user) {
            const error = new Error("User not found!");
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({success: true, data: user});
    } catch (error) {
        next(error)
    }
}