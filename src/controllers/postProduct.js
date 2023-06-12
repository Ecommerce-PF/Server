const Product = require('../models/Product');


const postProduct = async (req, res) => {
    const { name, description, price, category, image } = req.body;
    try {
        const product = await Product.create({
            name,
            description,
            price,
            category,
            image,
        });
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = postProduct;