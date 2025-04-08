const express = require('express');
const router = express.Router();
const { addUser, userLogin, profile, changePassword } = require('../controllers/userConroller');
const { jwtAuthMiddleware } = require('../jwt');

// POST route to add a person
router.post('/signup', addUser);

// Login Route
router.post('/login', userLogin);
// Profile route
router.get('/profile', jwtAuthMiddleware, profile);
//password change route
router.put('/profile/password', jwtAuthMiddleware, changePassword);

module.exports = router;