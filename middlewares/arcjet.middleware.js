import aj from "../config/arcjet.js";


const arcjetMiddle = async(req, res, next) => {
    try {
        const decision = await aj.protect(req, { requested: 1 });
        if (decision.isDenied()) {
            if (decision.reason.isRateLimit()) {    
              return res.status(429).json({ error: "Too Many Requests, rate exceeded" });
            } else if (decision.reason.isBot()) {
              return res.status(403).json({ error: "No bots allowed/bot detected" });
            }
            return res.status(403).json({ error: "Forbidden" });       
        }
        next();
    } catch (error) {
        console.log(`Arcject middleware Error: ${error}`);
        next(error);
    }
}

export default arcjetMiddle;