const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');


//get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    
 })

 // add user with the hashed password
 router.post( '/', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.createUser(username, email, hashedPassword);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
 
 })


module.exports = router;
