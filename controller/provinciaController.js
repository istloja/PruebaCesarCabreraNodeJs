const modelo = require("../modelo/provincia.js");

exports.ObtenerTodosP = (req, res)=>{
  modelo.ObtenerTodosP((err, data)=>{
    if(err){
      res.json({mensaje:"No se pudo obtener los datos"});
    }else{
      res.send(data);
    }
  });
};

exports.crearProvincia = (req, res)=>{
  const nuevaProvincia = new modelo({
    idProvincia: req.body.idProvincia,
    nombre: req.body.nombre,
    nroCantones: req.body.nroCantones,
    superficie: req.body.superficie,
    region: req.body.region,
    Pais_idPais: req.body.Pais_idPais
  });


  modelo.crearProvincia(nuevaProvincia,(error,data)=>{
    if (error){
      res.status(500).send({mensaje:"Error al crear nueva Provincia"});
    }else{
      res.send(data);
    }
  });
}

exports.editarProvincia = (req, res)=> {

    const idProvincia = req.body.codigo;
    const editarProvincia = new modelo (req,body);

    modelo.editarProvincia(idProvincia,editarProvincia, (error, data)=>{

      if(eror){

        if (error.kind=='not found'){
          res.status(400).send({mensaje: "No se encontro el usuario"});
        }else{
          res.status(500).send({mensaje: "No se encontro el usuario"});
        }

      }

        if (error){
          res.json({mensaje:"No se pudo obtener los datos"});
        }else (res).send(data);
      });
    }
