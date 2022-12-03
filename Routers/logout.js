const Rout = require("express").Router();

Rout.get("/logout", (req, res) => {
  
      res.status(200)
      .cookie("jwtoken", "", {
        httpOnly: true,
        expires: Date.now(),
        secure: true,
        sameSite: "None",
       
        path: "/"
      })
      .json({ massege: "Logout SuccesFull" });
});

module.exports = Rout;
