const { Router } = require("express");
const router = Router();
const routesProducts = require("./routesProducts");
const routesUsers = require("./routesUsers");
const routeBuyProduct = require("./routeBuyProducts");

router.use("/products", routesProducts);

router.use("/users", routesUsers);

router.use("/buyProduct", routeBuyProduct);

module.exports = router;
