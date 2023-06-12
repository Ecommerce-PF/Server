const mercadopago = require("mercadopago");
const { Orders } = require("../../db");

const receiveWebHook = async (req, res) => {
  const payment = req.query;
  mercadopago.configure({
    access_token:
      "TEST-7324911978665795-061117-ec741046ae14ae1bdfbb3cc5234e758e-1396914442",
  });
  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      const order = await Orders.findOne({
        where: { status: null },
      });
      order.status = data.response.status;
      order.total = data.response.transaction_amount;
      order.paymentMetod = data.response.operation_type;
      order.paymentId = data.response.id;
      order.save();
    }
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = receiveWebHook;
