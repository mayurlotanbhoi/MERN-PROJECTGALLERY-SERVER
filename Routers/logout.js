const Rout = require("express").Router();

Rout.get("/logout", (req, res) => {

  try {

    console.log(req)

    res.status(200)
      .cookie("jwtoken", "", {
        httpOnly: true,
        expires: Date.now(0),
        secure: true,
        sameSite: "None",
        path: "/",
        overwrite: true,
      })
      .json({ massege: "Logout SuccesFull" });
    
  } catch (error) {
    console.log(error)
    
  }
  
      
});

module.exports = Rout;
