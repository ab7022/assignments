const {User} = require("../db/index")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
  
    try {
      const user = await User.findOne({ username: username, password: password });
  
      if (user) {
       next()
      } else {
       res.json({
        mag:"wrong credentials!!!"
       })
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

module.exports = userMiddleware;