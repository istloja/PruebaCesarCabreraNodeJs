const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require("./servicios/rutasPais.js")(app);
require("./servicios/rutasProvincias.js")(app);


app.listen(4848,()=>{
  console.log("servidor iniciado");
});
