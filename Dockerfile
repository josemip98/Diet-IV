#node con la versión 15
FROM node:14.0

LABEL maintainer="j_miguel98@hotmail.com"

WORKDIR /organizeudiet

#usamos el asterisco para copiar directamente package.json y package-lock.json
COPY package*.json ./

COPY gulpfile.js ./

COPY ./tests ./tests

#para ejecutar los tests
CMD ["npm","test"]
