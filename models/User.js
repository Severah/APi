const db = require('../db');
const bcrypt = require('bcrypt');

class User { 
//get all users
    static async getAllUsers(){
        const [rows] = await db.query('SELECT * FROM Users');
        return rows;
    }
// get user by id
// add user with Username email and hash password
    static async createUser(username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [rows] = await db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword]);
        return rows;
    }
};

module.exports = User;
