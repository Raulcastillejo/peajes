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

const signup = async (req, res) => {
  const { email, password, roll } = req.body;
 
  try {
    const oldUser = await userSchema.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userSchema.create({ email, password: hashedPassword, roll});

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};


router.post("/", signup);


 module.exports = router;
