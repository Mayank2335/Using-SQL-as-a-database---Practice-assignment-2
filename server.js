require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();  
const Port = process.env.PORT || 9000;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

db.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Connected to Mysql`)
})

app.get('/', (req, res) => {
    res.send(`Express and mysql is working`)
})

app.listen(Port, (req, res) => {
    console.log(`server is running on port http://localhost:${Port}`)
})