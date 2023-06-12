const mercadopago = require("mercadopago");

const receiveWebHook = async (payment) => {
  if (payment.type === "payment") {
    const data = await mercadopago.payment.findById(payment["data.is"]);
    console.log(data);
  }
  console.log(data);
  return true;
};

module.exports = receiveWebHook;
