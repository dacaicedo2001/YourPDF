# YourPDF

**CRUD de archivos PDF**

**Requerimientos:**
- Base de datos: MySQL
- Lenguajes de programacion: PHP, JavaScript
- Servidor

**Estructura de directorio:**
- **css**: Directorio que almacena las hojas de estilos de las diferentes vistas.
- **db**: En este directorio se encuentra el archivo `database.sql` el cual contiene el codigo para la creacion de la base de datos.
- **env**: Dentro se encuentra el archivo `variables.php`. El cual contiene las variables utilizadas para tener acceso a la base de datos.
- **js**: Aqui reciden todos los Scripts que se ejecutan en el lado del cliente, tales como peticiones al servidor y validaciones de datos.
- **model**: Es aqui donde se encuentra los diferentes archivos que hacen peteciones y cambios en la base de datos.
- **view**: En este directorio esta cada una de las vistas o paginas que contiene la aplicacion.

**Funcionamiento:**

> Primero que todo debe ingresar a su cliente de MySQL. Si cuenta con una interfaz grafica como la de **phpMyAdmin** puede utilizar la opcion de importar y seleccionar el archivo `database.sql` que se encuentra en el directorio `db`.

> Si se encuentra en una terminal, puede seleccionar todo el codigo que contiene el documento y pegarlo en la terminal.

Una vez realizado el paso anterior tendremos creada una base datos llamada `pdf` con 2 tablas: `usuarios` y `archivos` en donde se almacenara la informacion.

La aplicacion necesita de un usuario y una contraseña para poder ingresar a las funcionalidades, la base de datos no contiene ningun usuario registrado por defecto, lo cual debe usted registrarse y posteriormente iniciar sesion.
