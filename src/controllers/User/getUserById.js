const { User, Clothes, Orders } = require("../../db.js");

const getUserById = async (id) => {
  

  const user = await User.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Orders,
      },
      {
        model: Clothes,
      },
    ],
  });

  return user;
};

module.exports = getUserById;
