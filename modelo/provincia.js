const mysql = require("../baseConexion/bd.js");
const provincia = function (Provincia){

  this.idProvincia = Provincia.idProvincia;
  this.nombre = Provincia.nombre;
  this.nroCantones = Provincia.nroCantones;
  this.superficie = Provincia.superficie;
  this.region = Provincia.region;
  this.Pais_idPais = Provincia.Pais_idPais;
};

provincia.ObtenerTodosP = result =>{
  mysql.query('SELECT * FROM provincia', (err,res)=>{
    if (err) {
      result(null, err);
      console.log(err, ' no se pude listar las provincias');
      return;
    }else{
      result(null, res);
    }
  });
};

provincia.crearProvincia = (nuevaProvincia, result)=>{
  mysql.query("INSERT INTO provincia SET ?", nuevaProvincia, (error,res)=> {
    if (error){
      console.log(error,"Error al Crear Provincia");
      result(null,error);
      return;
    }else{
      result(null,res);
    }
  });
};

provincia.editarProvincia = (idProvincia,editarProvincia,result)=>{
  mysql.query("UPDATE provincia SET idProvincia=?, nombre=?, nroCantones=?, superficie=?, region=?, Pais_idPais=? WHERE codigo_libro=?",
  [editarProvincia.idProvincia, editarProvincia.nombre ,editarProvincia.nroCantones ,editarProvincia.superficie ,editarProvincia.region, editarProvincia.Pais_idPais],(error,res)=>{

    if (error) {
      console.log(error,' error al crear Provincia');
      result(null,error);
      return;
    } else {
      if(res.affectedRows==0){
        result({kind:"not found"},null)
      }else{
         result(null,res)
       }
    }
  });
};


module.exports= provincia;
