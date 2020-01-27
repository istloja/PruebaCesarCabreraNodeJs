const mysql = require("../baseConexion/bd.js");

const pais = function (Pais){
  this.idPais = Pais.idPais;
  this.nombre = Pais.nombre;
  this.moneda = Pais.moneda;
  this.superficie = Pais.superficie;
  this.idioma = Pais.idioma;
  this.nroHabitantes = Pais.nroHabitantes;
};

pais.ObtenerTodos = result =>{
  mysql.query('SELECT * FROM pais', (err,res)=>{
    if (err) {
      result(null, err);
      console.log(err, 'no se pude listar los paises');
      return;
    }else{
      result(null, res);
    }
  });
};

pais.crearPais = (nuevoPais, result)=>{
  mysql.query("INSERT INTO pais SET ?", nuevoPais, (error,res)=> {
    if (error){
      console.log(error,"Error al Crear Pais");
      result(null,error);
      return;
    }else{
      result(null,res);
    }
  });
};


pais.eliminarPais = (idPais,result)=>{
  mysql.query('DELETE FROM pais WHERE idPais = ?', idPais, (error,res)=>{
      if(error){
        result(null, error);
        console.log(error, ' no se puede eliminar el pais');
        return;
      }else{
        result(null, res);
      }
  });
};


pais.obtenerPaisSuperficie = (superficiePais, result)=>{
  mysql.query('SELECT * FROM pais WHERE superficie > ?', superficiePais, (error,res)=>{
    if(error){
      result(null, error);
      console.log(error, ' no se puede listar los paises');
      return;
    }else{
      result(null, res);
    }
  })
}




module.exports= pais;
