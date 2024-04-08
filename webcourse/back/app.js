const express = require('express');

const app = express();
const port = 3000;

app.get('/api/test', (req, res) => {
    res.json({
        greeting: "hello world!"
    })
});

app.listen(port, () =>{
    console.log(`Server runnin at http://localhost:${port}`);
});