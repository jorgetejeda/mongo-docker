# Especificamos la version de node que vamos a utilizar
FROM node:19
# Creamos el directorio de la aplicacion
# Debe ser /home/app porque es el directorio que se crea por defecto en el contenedor
RUN mkdir -p /home/app
# Establecemos el directorio de trabajo
# Haremos una copia de nuestro proyecto hacia el directorio de trabajo
COPY . /home/app
# Exponemos el puerto 3000
EXPOSE 3000
# Ejecutamos el comando node index.js
# Esto se hace en un array, donde el primer argumento es el comando y el segundo el archivo
CMD ["node", "/home/app/index.js"]
