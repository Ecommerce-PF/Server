const { Router } = require("express");
const router = Router();
const routesProducts = require("./routesProducts");
const routesUsers = require("./routesUsers");
const routeWhishListProduct = require("./routeWhishListProducts");
const routesPayment = require("./routesPayment");
// const routesReviews = require("./routesReviews")

router.use("/products", routesProducts);

router.use("/users", routesUsers);

router.use("/whishListProduct", routeWhishListProduct);

router.use("/payment", routesPayment);

// router.use("/reviews", routesReviews)

module.exports = router;
