const {Clothes} = require('../db.js');

const buyProduct = async (id, name, color, price, image, category, parentCategory, description, UserId) => {
    // if (!id || !name || !color || !price || !image || !category || !parentCategory || !description || !UserId) 
    // throw new Error('Faltan datos');

    const newCartBuy = await Product.create({
        id,
        name,
        color,
        price,
        image,
        category,
        parentCategory,
        description,
      });
      await newCartBuy.addUser(UserId);
    
      return newCartBuy;
}

module.exports = buyProduct;