const express = require('express');
const router = express.Router();
const StudentController = require("../controllers/students");


router.post(
    '/createStudent',
    StudentController.createStudent
);


   
   


// router.delete('/updatecourse/:id', (req,res, next) => {
//     CourseCollection.updateOne({
//         _id: req.body.id},
//         {
//             $pull: {
//                 _id : req.params._id
//             }
//         })
// })

module.exports = router;