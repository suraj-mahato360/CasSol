const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const { getUser,postUser } = require("./controller/controller")

router.route("/").get(getUser);

router.route("/").post(postUser);

module.exports = router

// const Post = require('./Model/Schema.js');

// router.get('/',(req, res)=>{
//     Post.find((err, doc)=>{
//         if(err){
//             console.log("Error Occures While fetching Data", +err);
//             res.status(400).send("Internal Error", err);
//         }else{
//             res.send(doc);
//         }
//     });
// });

// router.post('/', (req, res)=>{
//     res.json({ info: req.body})  
// });