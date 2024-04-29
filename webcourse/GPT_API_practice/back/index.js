const OpenAI = require("openai");
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function main(prompt) {
    let messages = [
        { role: "system", content: "Eres un profesor muy paciente" },
        { role: "user", content: prompt}
    ];
    let completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages
    });
    return completion.choices[0].message.content;
}

module.exports = main;

