const { User , Product , Clothes } = require('../db.js');
const { Op } = require("sequelize");


const getUserById = async (id) => {
    // const user = await User.findByPk(id);
    // return user;

    const user = await User.findOne({
        where: {
          id: id,
        },
        include:{ 
          model: Product 
        }
      });
        return user;
    }

module.exports = getUserById;