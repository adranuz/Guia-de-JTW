const express = require('express');
const session = require('express-session');
const app = express(); // app

/**
 * Middleware de manejo de sesion 
 * 
 * Agrega el objeto session a la aplicacion, 
 * mediante el cual podemos agregar atributos para manejar la sesion 
 */
app.use(
  session({
    /** No guarda la cookie cada que hay un cambio */
    resave: false,
    /** Si la cookie no se ha iniciado no se guarda por defecto */
    saveUninitialized: false,
    /** secret debe ser por lo menos de 256 bits, este string esta solo de ejemplo */
    secret: "keyboard cat"
  }),
);


/** Crea una ruta que crea la sesion */
app.use('/', (req, res) => {
  /** Al hacer la peticion, si existe sesion agrega 1, si no asigna el valor de 1 */
  req.session.count = req.session.count ? req.session.count + 1 : 1;
  res.status(200).json({ hello: "world", counter: req.session.count });
});

app.listen(3002, () => {
  console.log("Listening port 3002");
});