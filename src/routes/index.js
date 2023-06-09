const { Router } = require("express");
const router = Router();
const routesProducts = require("./routesProducts");
const routesUsers = require("./routesUsers");
const routePostProduct = require("./routePostProduct");
const routeBuyProduct = require("./routeBuyProducts");

router.use("/products", routesProducts);

router.use("/users", routesUsers);

router.use("/buyProduct", routeBuyProduct);

router.use("/postProduct", routePostProduct);
module.exports = router;
