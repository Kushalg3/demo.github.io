const express = require("express");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
require("../db/conn");
const User = require("../model/userSchema");
const router = express.Router();
const bcrypt = require("bcrypt");
const app = express();

router.get("/", (req, res) => {
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

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res
      .status(422)
      .json({ error: "Enter all the required details carefully." });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "User already exist." });
    } else if (password != cpassword) {
      return res
        .status(422)
        .json({ message: "Make sure password and cpassord both are same." });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(422).json({ message: "Registration successful." });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Invalid details." });
  }

  try {
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (isMatch) {
        res.status(400).json(userLogin);
      } else {
        res.status(400).json({ error: "Invalid credentials." });
      }
    } else {
      res.status(400).json({ error: "Invalid credentials." });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.get("/getData", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      console.log("error in contact form");
      return res.json({ error: "Please fill the contact form" });
    }

    const userContact = await User.findOne({ _id: req.userId });

    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        message
      );
      await userContact.save();

      res.status(201).json({ message: "user contact successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
