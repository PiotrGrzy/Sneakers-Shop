const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Sign Up new User

router.post('/', async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    street,
    city,
    postalCode,
    password
  } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user)
      return res
        .status(400)
        .json({ msg: 'User with this email already exists' });

    user = new User({
      firstName,
      lastName,
      email,
      address: { street, city, postalCode },
      password
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address: user.address
      }
    };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token, payload });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
