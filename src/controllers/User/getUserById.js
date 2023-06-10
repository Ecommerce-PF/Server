const { User, Clothes } = require("../../db.js");
const { Op } = require("sequelize");

const getUserById = async (id) => {
  // const user = await User.findByPk(id);
  // return user;

  const user = await User.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Clothes,
      },
    ],
  });

  return user;
};

module.exports = getUserById;
