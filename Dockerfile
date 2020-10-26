#node con la versión 15
FROM node:14.0

LABEL maintainer="j_miguel98@hotmail.com"

WORKDIR /organizeudiet

#usamos el asterisco para copiar directamente package.json y package-lock.json
COPY package*.json ./

COPY gulpfile.js ./

#instalamos las dependencias con npm y creamos un usuario con el parámetro -D
#para crearlo con los valores por defecto
RUN adduser -D useriv && npm install

#variable de entorno para gestionar node_modules
ENV PATH=/node_modules/.bin:$PATH

#añadimos un usuario
USER useriv

#creamos el directorio test
WORKDIR /test

#para ejecutar los tests
CMD ["npm","test"]
