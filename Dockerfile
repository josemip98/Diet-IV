#node con la versión 14
FROM node:14-alpine

#Persona encargada del contenedor
LABEL maintainer="j_miguel98@hotmail.com"

#Uso el asterisco para copiar ambos ficheros package.json y package-lock.json
COPY package*.json ./
COPY tests/* ./

#Instalación de dependencias
RUN npm install && npm install -g jest-cli && rm package*.json

USER node

WORKDIR /test
VOLUME /test

#para ejecutar los tests
CMD ["npm","test"]
