const { Router } = require("express");
const router = Router();

const addWhishListProduct = require("../controllers/Product/addWhishListProduct");
const getWhishListProducts = require("../controllers/Product/getWhishListProducts");

router.post("/", async (req, res) => {
  const { id, UserId } = req.body;
  try {
    const newProduct = await addWhishListProduct(id, UserId);
    res
      .status(200)
      .json({ "Producto agregado a tu lista de deseos": newProduct });
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await getWhishListProducts(id);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
