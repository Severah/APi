//create an express server 
const express = require('express');
const connection = require('./db');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// users route
app.get('/users', async (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    })
})
    
    