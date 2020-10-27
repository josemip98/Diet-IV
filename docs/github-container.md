# GITHUB CONTAINER REGISTRY

He subido mi repositorio a gitHub Container Registry, para ello he seguido los siguientes pasos:
+ He renombrado nuestra imagen con el comando:
`docker tag <nombre_imagen> ghcr.io/josemip98/organizeudiet`
+ Creamos un token en el apartado de Settings -> Developer settings -> Personal access tokens.
+ A continuación guardamos el token en una variable de entorno
`export TOKEN=<token>`
+ Iniciamos sesión en el registro de contenedores de GitHub.
`echo $TOKEN | docker login ghcr.io -u josemip98 --password-stdin`
+ Finalmente realizamos un push de nuestra imagen al registro de contenedores.
`docker push ghcr.io/josemip98/organizeudiet:latest`

Con esto, ya tenemos nuestra imagen en GitHub Container Registry, ahora en Package settings, cambiamos la visibilidad a pública y en Connect repository indicamos el repositorio correspondiente de GitHub para que esté sincronizado. 

![Imagen](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/github-container.png)
