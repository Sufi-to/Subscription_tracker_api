import { Router } from 'express';
import authorize from '../middlewares/auth.middleware.js';
import { createSubscription, getUserSubscriptions } from '../controllers/subscription.controller.js';


const subscriptionRouter = Router();


subscriptionRouter.get("/", (req, res) => res.send({title: "Gets all the subscriptions"}));

subscriptionRouter.get("/:id", (req, res) => res.send({title: "Gets a subscription detail"}));

subscriptionRouter.post("/", authorize, createSubscription);

subscriptionRouter.put("/:id", (req, res) => res.send({title: "Updates a subscription"}));

subscriptionRouter.delete("/:id", (req, res) => res.send({title: "Deletes a subscription"}));

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions);

subscriptionRouter.put("/:id/cancel", (req, res) => res.send({title: "Cancel a subscription"}));

subscriptionRouter.get("/upcoming-renewals", (req, res) => res.send({title: "Get upcoming renewals"}));

export default subscriptionRouter;
