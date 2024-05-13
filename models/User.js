const db = require('../db');
const bcrypt = rerquire('bcrypt');

class User {
//get all users
static async getAllUsers(){
    const [rows] = await db.query('SELECT * FROM Users')
    return rows;
}
}

module.exports = User;