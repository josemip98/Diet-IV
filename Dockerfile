#node con la versión 14
FROM node:14-alpine

#Persona encargada del contenedor
LABEL maintainer="j_miguel98@hotmail.com"

RUN mkdir /node_modules 

RUN chown -R node /node_modules && chown -R node /usr/local/lib/node_modules && chown -R node /usr/local/bin 

#Uso el asterisco para copiar ambos ficheros package.json y package-lock.json
COPY package*.json ./

COPY gulpfile.js ./

USER node

#Instalación de dependencias
RUN npm install && npm install -g jest-cli && npm install -g gulp && npm install gulp-jest --save && rm package*.json

VOLUME /test
WORKDIR /test

#para ejecutar los tests
CMD ["gulp","test"]
