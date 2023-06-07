// crear la ruta post para crear un producto en el archivo Server\src\routes\routePostProduct.js y exportarla para poder usarla en el archivo Server\src\index.js (recuerda que debes importar el controlador postProduct)
const { Router } = require("express");
const router = Router();
const postProduct = require("../controllers/postProduct");

router.post("/", postProduct);

module.exports = router;

