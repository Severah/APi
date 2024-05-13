//route for products
const express = require('express');
const router = express.Router();
const Product = require('../models/product');


//get all products
router.get('/products', async (req, res) => {
    try {
        const products = await Product.getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})