# jwt-init
Implementacion de jwt

Este proyecto Muestra algunos ejemplos de como utilizar JWT de manera aislada.
1. Clona el proyecto en tu entorno local
2. Instala las dependencias
```npm i```


# token.js
Este archivo genera y verifica tokens de JWT para poder generar sesiones.
Mediante la terminal es como enviamos los valores de las variables usadas para generar el token y despues para verificarlo
El primer argumento sera para ejecutar node, el segundo es el archivo que ejecutara node, el tercero es el valor de le daremos a option, el cuarto sera el secret y el quinto sera el nombre o el token dependiendo que queramos obtener.
Como vez en este archivo usa la libreria jsonwebtoken
1. Crea un token ```node token.js sign secret luis```
2. Copia el token obtenido en la terminal
3. Verifica si tu token es real con ```node token.js verify secret <token>```
4. Obtendras los headers del token


# handle-session.js