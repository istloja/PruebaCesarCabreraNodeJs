const modelo = require("../modelo/pais.js");

exports.ObtenerTodos = (req, res)=>{  
  modelo.ObtenerTodos((err, data)=>{
    if(err){
      res.json({mensaje:"No se pudo obtener los datos"});
    }else{
      (res).send(data);
    }
  });
};
