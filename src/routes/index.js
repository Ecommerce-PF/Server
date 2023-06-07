const { Router } = require("express");
const router = Router();
const routesProducts = require("./routesProducts");
const routesUsers = require("./routesUsers");
const PostProduct = require("../controllers/postProduct");



router.use("/products", routesProducts);

router.use("/users", routesUsers);

router.use("/postProduct", PostProduct);


module.exports = router;
