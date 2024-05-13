const db = require('../db');

class Product {
//get all products
static async getAllProducts(){
    const[rows] = await db.query('SELECT * FROM products');
    return rows;
}

}

module.exports = Product;