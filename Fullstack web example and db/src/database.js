const mysql = require('mysql');
const {promisify} = require('util');
const {database} = require('./keys');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if(err) {
        if(err.code === "PROTOCOL_CONNECTION_LOST"){
            console.log("DATABASE CONNECTION WAS CLOSED", err)
        }
        if(err.code === "ER_CON_COUNT_ERROR"){
            console.log("DATABASE HAS TO MANY CONNECTIONS", err)
        }
        if(err.code === "ECONNREFUSED"){
            console.log("DATABASES CONNECTION WAS REFUSED", err)
        }
    }
    else {
        if(connection)connection.release()
            console.log("DB is Connected!")
            return
    }
})

// Create promises from callbacks
pool.query = promisify(pool.query);

module.exports = pool;

