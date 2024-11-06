# Etapa de compilación
FROM node:18 AS build

WORKDIR /app

# Copia solo los archivos de dependencias primero
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Compila el proyecto para generar la carpeta .next
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copia el archivo de configuración personalizado de Nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copia los archivos compilados al contenedor de Nginx
COPY --from=build /app/.next /usr/share/nginx/html

# Expone el puerto 3000
EXPOSE 3000

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]
