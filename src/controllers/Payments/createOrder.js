require("dotenv").config();
const mercadopago = require("mercadopago");
const { Clothes, User } = require("../../db");
const { FRONT_URL, BACK_URL } = process.env;

const createOrder = async (products, userId) => {
  mercadopago.configure({
    access_token:
      "TEST-7324911978665795-061117-ec741046ae14ae1bdfbb3cc5234e758e-1396914442",
  });

  items = await Promise.all(
    products.map(async (product) => {
      const item = await Clothes.findByPk(product.id);
      return {
        title: item.name,
        quantity: product.quantity,
        currency_id: "USD",
        unit_price: parseInt(item.price),
      };
    })
  );

  const user = await User.findByPk(userId);
  await user.createOrder({
    userId,
    products: items,
  });

  var preference = {
    items,
    back_urls: {
      success: `${FRONT_URL}/success`,
      failure: `${FRONT_URL}/failure`,
      pending: `${FRONT_URL}/pending`,
    },
    notification_url: `${BACK_URL}/webhook`,
  };

  const order = await mercadopago.preferences.create(preference);
  console.log(order);
  return order;
};

module.exports = createOrder;
