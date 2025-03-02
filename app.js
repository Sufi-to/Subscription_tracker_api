import express from "express";
import cookieParser from "cookie-parser";
import { PORT } from './config/env.js';

// user, auth, subscription routes
import userRouter from './routes/user.routes.js';
import authRouter  from './routes/auth.router.js';
import subscriptionRouter from './routes/subscription.router.js';
import dbConnection from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import arcjetMiddle from "./middlewares/arcjet.middleware.js";


// Instantiate an express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());
app.use(arcjetMiddle);


app.use('/api/v1/users', userRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.use(errorMiddleware);


app.get("/", (req, res)=>{
    res.send("Welcome to the subscription tracker api!");
})






app.listen(PORT, async()=> {
    console.log(`Listening on port ${PORT}`);
    await dbConnection();
})

export default app;