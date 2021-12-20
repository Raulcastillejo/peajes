var express = require("express");
var router = express.Router(); /* GET users listing. */

let userSchema = require('../models/users');

const bcrypt = require('bcrypt');
var jwt =require( "jsonwebtoken");
const secret = 'test';



// crear ususario
// router.route('/').post((req, res, next) => {
//   peajesSchema.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       console.log(data)
//       res.json(data)
//     }
//   })
// });

const signin = async (req, res) => {
    const { email, password, roll } = req.body;
   
    try {
      const oldUser = await userSchema.findOne({ email });
  
      if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });
  
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  
      if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });
      let a= "asfasdfasdasd"
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
      
      res.status(200).json({ result: oldUser, token });
      
      
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };


router.post("/", signin);


 module.exports = router;
