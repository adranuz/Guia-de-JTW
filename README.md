# jwt-init
Implementacion de jwt

Este proyecto es solo para demostrar como funciona jwt al generar y verificar los tokens
Mediante la terminal es como enviamos los valores de las variables usadas para generar el token y despues para verificarlo
El primer argumento sera para ejecutar node, el segundo es el archivo que ejecutara node, el tercero es el valor de le daremos a option, el cuarto sera el secret y el quinto sera el nombre o el token dependiendo que queramos obtener.

1. Clona el proyecto en tu entorno local
2. Instala las dependencias, en este caso es solo jsonwebtoken 
```npm i```
3. Crea un token ```node index.js sign secret luis```
4. Copia el token obtenido en la terminal
5. Verifica si tu token es real con ```node index.js verify secret <token>```
6. Obtendras los headers del token