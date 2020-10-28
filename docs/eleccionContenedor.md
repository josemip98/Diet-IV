# Elección imagen Docker

Para elegir la imagen base de Docker tenemos 3 opciones:

+ node:<version>
+ node:<version>-alpine
+ node:<version>-slim

La primera es la imagen por defecto, es la más pesada ya que ocupa unos 315MB como desventaja pero como ventaja podemos decir que si no sabemos cuáles van a ser nuestras necesidades esta es una buena opción.
La segunda opción está basada en a distribución de Linux Alpine, tiene un tamaño menor ya que ocupa unos 41MB.
Y la uĺtima opción la version slim, es una versión que sólo contiene los paquetes mínimos para ejecutar node y ocupa unos 57MB.

En un principio iba a elegir la versión por defecto por el tema de si no estamos seguros de qué necesitamos, ésta es una buena opción pero hay mucha diferencia de espacio.
Por tanto estoy entre la version Alpine y la versión Slim.

Para decidirme entre una de éstas dos voy a comprobar cuanto tarda en construirse cada una.

Para el caso de la versión **Slim** vemos que tarda 3 minutos.

![slim](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/slim.png)

Y para el caso de la versión **Alpine** tarda lo mismo, 3 minutos.

![alpine](https://github.com/josemip98/OrganizeUDiet/blob/master/docs/img/alpine.png)

Por tanto como ambas versiones tardan lo mismo me voy a decantar por la versión **node:14-Alpine** que ocupa menos.
