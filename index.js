const server = require("./src/app");
const { conn } = require("./src/db.js");
const port = process.env.PORT || 3001;
require("dotenv").config();
require("./src/db.js");

conn.sync({ force: true }).then(() => {
  server.listen(port, () => {
    console.log("Conectado a la base de datos");
    console.log(`Servidor en el puerto  http://localhost:${port}`);
  });
});
