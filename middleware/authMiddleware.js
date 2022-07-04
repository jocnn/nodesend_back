const jwt = require("jsonwebtoken");
require("dotenv").config({ path: ".env.development" });

module.exports = (req, res, next) => {
	const authHeader = req.get("Authorization");

	if (authHeader) {
		const token = authHeader.split(" ")[1];

		try {
      const user = jwt.verify(token, process.env.SECRET_KEY);
			req.user = user;
		} catch (error) {
			console.log("JWT no valido");
		}
	}
	return next();
};
