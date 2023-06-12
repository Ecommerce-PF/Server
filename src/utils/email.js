const nodemailer = require("nodemailer");
const { User } = require("../db.js");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "test.ecomerce420@gmail.com",
    pass: "udznychvrbezjpra",
  },
});

const sendRegistrationEmail = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    const mailOptionsRegistro = {
      from: "test.ecomerce420@gmail.com",
      to: user.email, //correo electrónico almacenado en  User
      subject: "Registro exitoso",
      html: "<p>Gracias por registrarte en nuestro sitio web. hola mundo!</p>",
    };

    transporter.sendMail(mailOptionsRegistro, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Correo electrónico de registro enviado: " + info.response);
      }
    });
  } catch (error) {
    console.error("Error al enviar el correo electrónico de registro:", error);
  }
};

const sendPurchaseEmail = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    const mailOptionsCompra = {
      from: "test.ecomerce420@gmail.com",
      to: user.email, // correo electrónico almacenado en User
      subject: "Confirmación de compra",
      html: "<p>Gracias por tu compra en nuestro sitio web.</p>",
    };

    transporter.sendMail(mailOptionsCompra, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Correo electrónico de compra enviado: " + info.response);
      }
    });
  } catch (error) {
    console.error("Error al enviar el correo electrónico de compra:", error);
  }
};

module.exports = {
    sendRegistrationEmail,
    sendPurchaseEmail,
};

/*

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "test.ecomerce420@gmail.com",
    pass: "udznychvrbezjpra",
  },
});

const mailOptionsRegistro = {
  from: "test.ecomerce420@gmail.com",
  to: "eveloxd@gmail.com",
  subject: "Registro exitoso",
  html: "<p>Gracias por registrarte en nuestro sitio web.</p>",
};

const mailOptionsCompra = {
  from: "test.ecomerce420@gmail.com",
  to: "eveloxd@gmail.com",
  subject: "Confirmación de compra",
  html: "<p>Gracias por tu compra en nuestro sitio web.</p>",
//   attachments: [
//     {
//       filename: "factura.pdf",
//       path: "/ruta/a/la/factura.pdf",
//     },
//   ],
};

transporter.sendMail(mailOptionsRegistro, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Correo electrónico de registro enviado: ' + info.response);
  }
});

transporter.sendMail(mailOptionsCompra, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Correo electrónico de compra enviado: ' + info.response);
  }
});


// Path: src\utils\email.js

*/
