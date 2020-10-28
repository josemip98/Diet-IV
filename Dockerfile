#node con la versión 14
FROM node:14-slim

#Persona encargada del contenedor
LABEL maintainer="j_miguel98@hotmail.com"

#Uso el asterisco para copiar ambos ficheros package.json y package-lock.json
COPY package*.json ./

COPY gulpfile.js ./

#Instalación de dependencias
RUN npm install && npm install -g gulp && npm install -g jest-cli && npm install --save-dev gulp-shell

# Indica el directorio donde se montará todo
VOLUME /test
WORKDIR /test

#para ejecutar los tests
CMD ["npm","test"]
