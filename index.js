const server = require("./src/app");
const { conn } = require("./src/db.js");
require("dotenv").config();
require("./src/db.js");
const BACK_URL = process.env.BACK_URL;
const PORT = process.env.PORT || 3001;

conn.sync({ force: true, alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server online on ${BACK_URL}`);
  });
});
