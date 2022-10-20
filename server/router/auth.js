const express = require('express');
const User = require('../model/userSchema');
const router = express.Router();

router.get('/',(req,res) => {
    res.send("Hello world from the server from auth.js.");
});

router.post('/register',(req,res) => {
    const {name, email, phone, work, password, cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error: "Enter all the required details carefully."});
    }

    User.findOne({email:email}).then(userExist => {
        if(userExist) {
            return res.status(422).json({error: "User already exist."});
        }

        const user = new User({name, email, phone, work, password, cpassword});
        user.save().then(() => {
            res.status(201).json({message:"Registration successful."});
        }).catch(err=> res.status(500).json({error: "Registration failed."}));
    }).catch(err => {console.log(err);});
});

module.exports = router;