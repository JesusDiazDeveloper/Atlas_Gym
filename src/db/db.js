
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

const dotenv = require('dotenv');
dotenv.config(); // Cargar las variables de entorno

// const pool = mysql.createPool({
//     host: process.env.MYSQL_ADDON_HOST,
//     user: process.env.MYSQL_ADDON_USER,
//     password: process.env.MYSQL_ADDON_PASSWORD,
//     database: process.env.MYSQL_ADDON_DB,
//     connectionLimit: 10
// });

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'atlas_gym',
    connectionLimit: 10
});

pool.getConnection().then(connection => {  
    console.log('Connected to MySQL database');
    connection.release();
}).catch(err => {
    console.error('Error connecting to MySQL database:', err); 
});


module.exports = pool;