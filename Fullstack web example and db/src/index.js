const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const { database } = require('./keys');
const session = require('express-session');
const MySQLStore = require("express-mysql-session");

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);

//Viewa with handlebars
app.set('views', path.join(__dirname, "views"));
app.engine('.hbs', exphbs({
    defaultLayout: "main",
    layoutDir:path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require("./lib/handlebars")
}))

app.set("view engine", ".hbs");

//Middlewears

app.use(session({
    secret: "itesm",
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore(database)
}))

// Routes
app.use(require("./routes"));

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), () => {
    console.log("Server on port: ", app.get('port'))
})