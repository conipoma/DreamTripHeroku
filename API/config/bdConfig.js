// Eequerimos mysql
const mysql = require('mysql');

// Definimos base de datos
const options = {
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b1d4f6d7fb0ff9',
    password: 'efadda3c',
    database: 'heroku_3f3a15702f2525e', //base de datos
};

// Creamos conexión a base de datos
const conexion_db = mysql.createPool(options);


// Conectamos base de datos
// conexion_db.connect((err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log('Conexión a base de datos exitosa');
//         }
//     })

// Exportamos
module.exports = { options, conexion_db }