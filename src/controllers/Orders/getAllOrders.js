const { Orders } = require("../../db");


const getAllOrders = async () => {
 
        const orders = await Orders.findAll();
        return orders;
 
}

module.exports = getAllOrders;