import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
    throw new Error("Please go to <.env.development/production.local> to check if the DB_URI is correctly defined!");
}

const dbConnection = async () => {
    try {
        await mongoose.connect(DB_URI);
        console.log(`Connected to database in ${NODE_ENV} mode!`)
    } catch (error) {
        console.error("Connecting to Mongodb failed miserable. Go ahead and fix the bug you dimwit: ", error);
        // eslint-disable-next-line no-undef
        process.exit(1);
    }
}

export default dbConnection;