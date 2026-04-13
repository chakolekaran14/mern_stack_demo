import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if token exists
    if (!authHeader) {
        return res.status(401).json({ msg: "No token provided" });
    }

    // Extract token
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // use env in real apps
        req.user = decoded; // optional (user info)
        next(); // go to next (controller)
    } catch (error) {
        return res.status(401).json({ msg: "Invalid token" });
    }
};

export default authMiddleware;