//create an express server 
const express = require('express');
const connection = require('./db');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

//Register routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});