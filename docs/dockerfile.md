# Dockerfile

En este documento voy a justificar el dockerfile

Esta es la imagen que he decidido utilizar, en el README.md está enlazado la explicación de mi elección.
`FROM node:14-alpine`

Con esta linea especifico el autor, en mi caso he puesto mi correo electrónico.
`LABEL maintainer="j_miguel98@hotmail.com"`

Con esto copio el paquete gulpfile.js, package.json y el package-lock.json ya que son imprescindibles para para ejecutar los tests.
`COPY package*.json ./`
`COPY gulpfile.js ./`

Con esto instalamos las dependencias, en mi caso necesitamos instalar npm, jest y gulp. Después eliminamos los ficheros package.json y package-lock.json ya que ya no los necesitamos.
`RUN npm install && npm install -g jest-cli && npm install -g gulp && npm install gulp-jest --save && rm package*.json`

Utilizo el usuario que nos da por defecto node para no tener que utilizar el superusuario.
`USER node`

Aquí especifico el directorio de trabajo.
`WORKDIR /test`

Y creo un punto de montaje en el directorio creado anteriormente.
`VOLUME /test`

Por último, ejecutamos el comando gulp test para lanzar los tests.
`CMD ["gulp","test"]`
