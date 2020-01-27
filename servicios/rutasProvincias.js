module.exports = app =>{
  const provincia = require("../controller/provinciaController.js");
  app.get("/obtenerTodosP", provincia.ObtenerTodosP);
  app.post("/crearProvincia",provincia.crearProvincia);
  app.post("/editarProvincia",provincia.editarProvincia);
}
