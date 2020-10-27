#node con la versión 15
FROM node:14-slim

#Persona encargada del contenedor
LABEL maintainer="j_miguel98@hotmail.com"

#Uso el asterisco para copiar ambos ficheros package.json y package-lock.json
COPY package*.json ./

COPY gulpfile.js ./

RUN adduser -D jose

#Instalación de dependencias
RUN npm install
RUN npm install -g jest-cli
RUN npm install -g gulp

# Usuario
USER jose

WORKDIR /test

#para ejecutar los tests
CMD ["gulp","test"]
