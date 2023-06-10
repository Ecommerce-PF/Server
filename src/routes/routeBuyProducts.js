const { Router } = require("express");
const router = Router();

const buyProduct = require("../controllers/Product/buyProduct");
const { Product } = require("../db");

router.post("/", async (req, res) => {
  const { id, UserId } = req.body;
  try {
    const newProduct = await buyProduct(id, UserId);
    res.status(200).json({ "Producto comprado extisotamente": newProduct });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
  // res.json({ message: "Producto comprado exitosamente" });
});

router.get("/", async (req, res) => {
  const { UserId } = req.body;
  try {
    const products = await Product.findAll({
      where: {
        UserId: UserId,
      },
    });
    res.status(200).json({ "Productos comprados": products });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
