const { User } = require("../../db");
const bcrypt = require("bcryptjs");

const putUserById = async (id, changeData) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error("El usuario no existe");
    }
    const {password} = changeData;
    if (password) changeData.password = await bcrypt.hash(password, 10);
    await user.update(changeData);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = putUserById;
