var express = require("express");
var router = express.Router(); /* GET users listing. */

// Student Model
let peajestSchema = require('../models/peajes');


// router.get("/", function (req, res, next) {
//   // Comment out this line:
//   //res.send('respond with a resource');  // And insert something like this instead:
//   res.json([
//     {
//       id: 1,
//       username: "samsepi0l",
//       otra: "otra",
//     },
//     {
//       id: 2,
//       username: "D0loresH4ze",
//       otra: "otra",
//     },
//     {
//       id: 3,
//       username: "otro",
//       otra: "otra",
//     },
//     {
//       id: 4,
//       username: "FoFoMan",
//       otra: "otra",
//     },
//   ]);
// });
// module.exports = router;

// let mongoose = require('mongoose'),
//   express = require('express'),
//   router = express.Router();

// // Student Model
// let studentSchema = require('../models/users');

// // crear usuario
// router.route('/register').post((req, res, next) => {
//   studentSchema.create(req.body, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       console.log(data)
//       res.json(data)
//     }
//   })
// });

// crear peaje
router.route('/').post((req, res, next) => {
  peajestSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// leer usuarios && leer peajes
router.route('/').get((req, res) => {
  peajestSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// // buscar un usuario
// router.route('/edit-student/:id').get((req, res) => {
//   studentSchema.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error)
//     } else {
//       res.json(data)
//     }
//   })
// })


// // Update users
// router.route('/update-student/:id').put((req, res, next) => {
//   studentSchema.findByIdAndUpdate(req.params.id, {
//     $set: req.body
//   }, (error, data) => {
//     if (error) {
//       return next(error);
//       console.log(error)
//     } else {
//       res.json(data)
//       console.log('Student updated successfully !')
//     }
//   })
// })

// // Delete users
// router.route('/delete-student/:id').delete((req, res, next) => {
//   studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data
//       })
//     }
//   })
// })

 module.exports = router;
