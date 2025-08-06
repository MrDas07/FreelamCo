// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', (req, res) => {
    res.json({ message: 'User routes are working!' });
  });
  router.post('/test-post', (req, res) => {
    console.log('Received POST on /api/users/test-post:', req.body);
    res.json({ message: 'POST /api/users/test-post works!', body: req.body });
  });
  


module.exports = router;
