#node con la versión 15
FROM node:15.0

LABEL maintainer="Jose Miguel Pelegrina Pelegrina"

WORKDIR /organizeudiet

#usamos el asterisco para copiar directamente package.json y package-lock.json
COPY package*.json ./

COPY gulpfile.js ./

#ejecutamos npm install para instalar las dependencias y  además borramos los archivos de dependencias
RUN npm install  &&  npm install && rm package*.json

#para ejecutar los tests
CMD ["gulp","test"]
