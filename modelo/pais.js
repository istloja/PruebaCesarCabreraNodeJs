const mysql = require("../baseConexion/bd.js");

const pais = function (Pais){
  this.idPais = Pais.idPais;
  this.nombre = Pais.nombre;
  this.moneda = Pais.moneda;
  this.superficie = Pais.superficie;
  this.idioma = Pais.idioma;
  this.nroHabitantes = Pais.nroHabitantes;
};


module.exports= pais;
