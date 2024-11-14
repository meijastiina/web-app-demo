const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from backend root!');
})

app.get('/api/message', (req, res) =>{
    res.json({ message: 'This is a message from the deployed backend.'});
})
app.listen(port);