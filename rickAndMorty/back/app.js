const express = require('express');
const axios = require('axios');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const app = express();

let port = process.env.PORT || 8080;

//Middleware

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get('/api', (req, res) =>{
    res.send("Todo ok!");
})

app.get('/rickAndMorty/:id', (req, res) =>{
    const END_POINT = `https://rickandmortyapi.com/api/character/${req.params.id}`;
    axios.get(END_POINT)
        .then(function(response) {
            console.log(response.data);
            res.send(response.data);
        })
        .catch(function(err) {
            console.log(err);
            res.send(err)
        })
})

app.listen(port, () => {
    console.log("listening on port " + port);
})
