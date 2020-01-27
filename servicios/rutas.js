module.exports = app =>{
  const Pais = require("../controller/paisController.js");
  app.get("/obtenerTodos",Pais.ObtenerTodos);
}
