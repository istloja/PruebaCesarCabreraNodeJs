const modelo = require("../modelo/pais.js");

exports.ObtenerTodos = (req, res)=>{
  modelo.ObtenerTodos((err, data)=>{
    if(err){
      res.json({mensaje:"No se pudo obtener los datos"});
    }else{
      res.send(data);
    }
  });
};


exports.crearPais = (req, res)=>{
  const nuevoPais = new modelo({
    idPais: req.body.idPais,
    nombre: req.body.nombre,
    moneda: req.body.moneda,
    superficie: req.body.superficie,
    idioma: req.body.idioma,
    nroHabitantes: req.body.nroHabitantes
  });

  modelo.crearPais(nuevoPais,(error,data)=>{
    if (error){
      res.status(500).send({mensaje:"Error al crear nuevo Pais"});
    }else{
      res.send(data);
    }
  });
}
