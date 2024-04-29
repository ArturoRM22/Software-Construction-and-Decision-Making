const express = require('express');
const gpt_api = require('./index');
const cors = require('cors');

const app = express();
const PORT = 4000;


//Middleware para reconocer json  
app.use(express.json());
app.use(cors());

 //Definir ruta de acceso a la API
app.post('/gpt', async(req, res) => {
    let prompt = req.body.prompt;
    let gpt_res = await gpt_api(prompt);
    res.send({
        response_gpt: gpt_res
    });
})

app.listen(PORT, () => {
    console.log('Listening on port: '+PORT);
})