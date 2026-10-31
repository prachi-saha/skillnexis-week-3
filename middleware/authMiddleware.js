const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Not authorized. Token missing."
        });
    }

    try {
        const actualToken = token.split(" ")[1];

        const decoded = jwt.verify(
            actualToken,
            process.env.JWT_SECRET
        );

        req.userId = decoded.id;
        next();

    } catch (error) {
        res.status(401).json({
            message: "Invalid or expired token."
        });
    }
};

module.exports = protect;
