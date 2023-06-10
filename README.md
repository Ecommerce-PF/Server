# **Ecommerce** | Proyecto Final


**📍 MODELO 1 | Clothes**

-  id (PK String). \*
-  name (String) \*
-  color (JSON array) \*
-  price (FLOAT)\*
-  image (STRING)\*
-  category (STRING)\*
-  parentCategory (STRING)\*
-  description (TEXT)\*

<br />

**📍 MODELO 2 | User**

-  name (String) \*
-  userName (String) \*
-  phone (BIGINT)\*
-  email (STRING)\*
-  password (STRING)\*
-  admin (BOOLEAN)\*

<br />

---

<br />

### **🖱 BACK-END**

El servidor cuenta con las siguientes rutas:

#### **📍 GET | /users**

-  Obtiene un arreglo de objetos, donde cada objeto es un usuario con toda su información.

#### **📍 GET | /users/:idUser**

-  Esta ruta obtiene el detalle de un usuario específico. 
-  El usuario es recibido por parámetro (ID).
-  Ademas incluira los prooductos favoritos (wish list) del usuario.

#### **📍 POST | /users/signup**

-  Esta ruta permite agregar un usuario a la base de datos. 
-  Por body se debera mandar name, userName, phone, email, password, admin (false-true).
-  Si el usuario se crea correctamente devolvera un JSON con el token asignado al usuario.
-  Si ya existe un usuario con el mismo email retornara un error 400.
-  Si no se indican todos los campos retornara un error 400.

#### **📍 POST | /users/login**

-  Esta ruta permite autenticar al usuario.
-  Por body se debera mandar userName y password.
-  Si la autenticacion es correcta retornara un JSON con el token del usuario y el usuario.
-  Si el userName no existe retornara un error 400 indicando que el user name es incorrecto.
-  Validara la contrasena, si la contrasena no es valida retornara un error 400 indicando que el usuario
   o la contrasena son incorrectos.

#### **📍 GET | /products/name?="..."**

-  Esta ruta retorna un array de objetos con todos los productos que coincidan con el nombre recibido por query.
-  Si no se encuentra ningun producto que coincida retorna un error 400 indicando que no se encontro el producto

#### **📍 GET | /products**

-  Esta ruta retorna un array de objetos con todos los productos almacenados en la base de datos.

#### **📍 GET | /products/:idProduct**

-  Esta ruta obtiene el detalle de un producto específico. 
-  El producto es recibido por parámetro (ID).

#### **📍 POST | /products**

-  Esta ruta permite agregar un producto a la base de datos. 
-  Por body se debera mandar id, name, color, price, image, category, parentCategory, description.
-  Si el producto se crea correctamente devolvera un JSON con el producto.


<br />

---

<br />