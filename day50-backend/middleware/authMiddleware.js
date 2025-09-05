const jwt = require("jsonwebtoken");
let jwt_key = "Batch35BackendKey";

const authMiddleware = (allowedRole = []) => {
    return (req, res, next) => {
        const authHeaders = req.headers.authorization;

        if(!authHeaders || !authHeaders.startsWith("Bearer ")){
            return res.status(401).json({message: "Unauthorized: No token provided"});
        }
        // Bearer token // ["Bearer", "token"]
        const token = authHeaders.split(" ")[1];

        try{
            const decoded = jwt.verify(token, jwt_key);
            req.user = decoded;

            if(allowedRole.length === 0){
                return next();
            }
            if(!allowedRole.includes(decoded.role)){
                return res.status(403).json({message: "Access denied"});
            }
            next();
        }catch(err){
            return res.status(500).json({message: "Unauthorized: Invalid or expired token"});
        }
    }

}
module.exports = authMiddleware;