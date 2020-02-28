const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const authorization = require('../middleware/authorization');

const router = express.Router();

// Protected route, require token
router.get('/', authorization, async (req, res) => {
  try {
    res.json(req.user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('server error');
  }
});

// Login user

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid username or password' });
    }
    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      return res.status(400).json({ msg: 'Invalid username or password' });
    }
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
      { expiresIn: 36000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token, payload });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).send('server error');
  }
});

module.exports = router;
