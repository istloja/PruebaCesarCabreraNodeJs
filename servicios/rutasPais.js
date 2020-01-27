module.exports = app =>{
  const pais = require("../controller/paisController.js");
  app.get("/obtenerTodos", pais.ObtenerTodos);
  app.post("/crearPais",pais.crearPais);
  app.post('/eliminarPais',pais.eliminarPais);
  app.post('/obtenerSuperficie',pais.obtenerPaisSuperficie);

}
