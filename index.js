const jwt = require('jsonwebtoken');


/**
 * Process argument
 * lee los comandos de la terminal , pero los primeros dos parametros son el proceso de node y el archivo que estamos leyendo 
 * por ello nosotros comenzaremos a leer a partir del tercer argumento
 */
const [, , option, secret, nameOrToken ] = process.argv;

/** Verifica que tenga todos los argumentos */
if ( !option || !secret, !nameOrToken ) {
  return console.log('Missing Arguments')
} 


/**
 * firmar el token
 */
function signToken(payload, secret) {
  return jwt.sign(payload, secret);
}

/**
 * Verificar si es el token
 */
function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

/**
 * Por aqui pasa la aplicacion y verifica que mandamos en la variable option
 */
if (option == 'sign') {
  console.log(signToken({sub: nameOrToken, }, secret));
} else if (option == 'verify') {
  console.log(verifyToken(nameOrToken, secret));
} else {
  console.log('Obtion needs to ve verify or sign')
}
