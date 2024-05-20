const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//Middlewares
app.use(bodyParser.json()); 
app.use(cors());

app.get('/api/test', (req, res) => {
    res.json({
        greeting: "hello world!"
    })
});

app.post('/api/customGreeting', (req, res) => {
    const name = req.body.name;
    res.json({
        greeting: `Hello ${name}` 
    })
})

app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`);
});