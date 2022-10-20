const express = require('express');
require('../db/conn');
const User = require('../model/userSchema');
const router = express.Router();

router.get('/',(req,res) => {
    res.send("Hello world from the server from auth.js.");
});

// router.post('/register',(req,res) => {
//     const {name, email, phone, work, password, cpassword} = req.body;
//     if(!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({error: "Enter all the required details carefully."});
//     }

//     User.findOne({email:email}).then(userExist => {
//         if(userExist) {
//             return res.status(422).json({error: "User already exist."});
//         }

//         const user = new User({name, email, phone, work, password, cpassword});
//         user.save().then(() => {
//             res.status(201).json({message:"Registration successful."});
//         }).catch(err=> res.status(500).json({error: "Registration failed."}));
//     }).catch(err => {console.log(err);});
// });

router.post('/register',async (req,res) => {
    const {name, email, phone, work, password, cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error: "Enter all the required details carefully."});
    }

    try {
        const userExist = await User.findOne({email:email});
        if (userExist) {
            return res.status(422).json({error: "User already exist."});
        }
        const user = new User({name, email, phone, work, password, cpassword});
        await user.save();
        res.status(201).json({message:"Registration successful."});
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;