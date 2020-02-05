const {Router} = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');


router.post('/sign-up', async (req, res) => {
    try {
      const {nickname, email, password} = req.body;
      const isEmailBusy = await User.findOne({email});
      if (isEmailBusy) {
        res.status(400).json({message: "User with is email already registered"});
        return
      }
      const hashPassword = await bcrypt.hash(password, 12);
      const user = new User({
        email,
        password: hashPassword,
        nickname
      });
      await user.save();
      res.status(201).json(user)
    } catch (e) {
      console.log(e)
      res.status(500).json({message: "Internal server error"});
    }
});


router.post('/sign-in', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      console.log(user);
      res.status(400).json({message: "Wrong email or password"});
      return
    }
    await bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({message: "Internal server error"});
      }
      if (result) {
        res.json(user);
        console.log(user);
        return
      } else {
          res.status(400).json({message: "Wrong email or password"});
          return
      }
    });
    
  } catch (e) {
    console.log(e)
    res.status(500).json({message: "Internal server error"});
  }
});

module.exports = router;