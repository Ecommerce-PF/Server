const { Router } = require("express");
const router = Router();

const buyProduct = require("../controllers/buyProduct");
const {Product} = require('../db.js');



router.post("/", async (req, res) => {
    const { id, name, color, price, image, category, parentCategory, description, UserId} = req.body;
    try{
        const newProduct = await buyProduct(id, name, color, price, image, category, parentCategory, description, UserId);
        res.status(200).json({ "Producto comprado extisotamente": newProduct});

    }catch(error){
        res.status(400).send(error.message);
    }
    // res.json({ message: "Producto comprado exitosamente" });
});

router.get("/", async (req, res) => {
    const { UserId } = req.body;
    try{
        const products = await Product.findAll({
            where: {
                UserId: UserId,
            }
        });
        res.status(200).json({ "Productos comprados": products});
    }catch(error){
        res.status(400).send(error.message);
    }
});




module.exports = router;