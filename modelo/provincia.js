const mysql = require("../baseConexion/bd.js");
const provincia = function (Provincia){

  this.idProvincia = Provincia.idProvincia;
  this.nombre = Provincia.nombre;
  this.nroCantones = Provincia.nroCantones;
  this.superficie = Provincia.superficie;
  this.region = Provincia.region;
  this.Pais_idPais = Provincia.Pais_idPais;
};
