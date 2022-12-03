const Rout = require("express").Router();

Rout.get("/logout", (req, res) => {

  try {

    console.log(req)

    
    res.clearCookie("jwtoken");
    res.status(200).json({ massege: "Logout SuccesFull" });
    
  } catch (error) {
    console.log(error)
    res.status(500).json({masseg: "error"})
  }
  
      
});

module.exports = Rout;
