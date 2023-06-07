const { Router } = require("express");
const router = Router();
const routesProducts = require("./routesProducts");
const routesUsers = require("./routesUsers");
const routePostProduct = require("./routePostProduct");

router.use("/products", routesProducts);

router.use("/users", routesUsers);

router.use("/postProduct", routePostProduct);
module.exports = router;
