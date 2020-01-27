const mysql = require("mysql");
const config = require("../config/db.config.js");
const conexion = mysql.createConnection({

  host:'localhost',
  user:'chess94',
  password:'123456789cesar',
  database:'paises',
});

conexion.connect(error=>{
  if(error) throw error;
  console.log("conexion exitosa");
});
module.exports = conexion;
