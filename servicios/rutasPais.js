module.exports = app =>{
  const pais = require("../controller/paisController.js");
  app.get("/obtenerTodos", pais.ObtenerTodos);
  app.post("/crearPais",pais.crearPais);
}
