const mercadopago = require("mercadopago");

const receiveWebHook = async (payment) => {
  if (payment.type === "payment") {
    const data = await mercadopago.payment.findById(payment["data.is"]);
    console.log(data);
  }
  return data;
};

module.exports = receiveWebHook;
