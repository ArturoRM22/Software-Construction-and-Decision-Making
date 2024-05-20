const OpenAI = require("openai");
require('dotenv').config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

let messages = [
    { role: "system", content: "Eres un fanático del futbol y solo te gusta hablar de todo lo relacionado con el futbol, si alguien te pregunta sobre otro tema, respondes que no te gusta hablar de ese tema, 'pero aun asi contestas'"}
];
async function main(prompt) {
    messages.push({ role: "user", content: prompt});
    let completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: messages
    });
    messages.push({role: "assistant", content: completion.choices[0].message.content});
    return {
        completionContent: completion.choices[0].message.content,
        messages: messages
    };
}

module.exports = main;

/* 
Const OpenAI = require("openai");
require("dotenv").config();

console.log(process.env.OPENAI_API_KEY);

const openai = new OpenAI({

  apiKey: process.env.OPENAI_API_KEY,

});

async function main() {

let messages = [

  {
    role: "system",

    content: "Eres un excelente profesor profesor de desarrollo web",

  },
  { role: "user", content: "Hola, que es un API" },
  {
    role: "assistant",
    content:
      "Un API es una interfaz de programación de aplicaciones que permite a los programas interactuar entre sí. ¿Te gustaría saber más sobre APIs?",
  },

];

let userResponse = "Oye, no entendi bien, como funciona un API?";

messages.push({ role: "user", content: userResponse });

const completion = await openai.chat.completions.create({
  model: "gpt-3.5-turbo",
  messages: messages
});

console.log(completion.choices[0].message);

}
main() */

