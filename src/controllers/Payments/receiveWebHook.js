const mercadopago = require("mercadopago");
const { Orders } = require("../../db");
const { sendPaymentEmail } = require("../../utils/email");

const receiveWebHook = async (req, res) => {
  const payment = req.query;
  mercadopago.configure({
    access_token:
      "TEST-7324911978665795-061117-ec741046ae14ae1bdfbb3cc5234e758e-1396914442",
  });
  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      const orderId = data.response.external_reference;
      const order = await Orders.findOne({
        where: { id: orderId },
      });
      order.status = data.response.status;
      order.total = data.response.transaction_amount;
      order.paymentMetod = data.response.payment_type_id;
      order.paymentId = data.response.id;
      order.save();
      sendPaymentEmail(order.userId, order.id);
      console.log('status ',order.status);
      if (order.status === "approved") {
        await Promise.all(
          order.products.map(async (product) => {
            const item = await Clothes.findByPk(product.id);
            const newStock = item.stock - product.quantity;
            console.log('newStock: ', newStock);
            if (newStock < 0) throw new Error("Stock can not be negative");
            item.stock = newStock;
            item.save();
            console.log('item: ', item);
          })
        );
      }
    }
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};

module.exports = receiveWebHook;
