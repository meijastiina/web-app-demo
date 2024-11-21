const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 3001;
dotenv.config();
app.use(cors());
const pool = new Pool({
    user:process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: true
});

console.log(pool);

app.get('/', (req, res) => {
    res.send('Hello from backend root!');
})

app.get('/api/message', (req, res) =>{
    res.json({ message: 'This is a message from the deployed backend.'});
})

app.get('/api/tasks', async(req, res) => {
    try {
        const query = "SELECT * FROM task";
        const result = await pool.query(query);
        res.json(result.rows);
        //res.json({ message: 'test'});
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err});
    }
});
app.listen(port);