// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', (req, res) => {
    res.json({ message: 'User routes are working!' });
  });


module.exports = router;
