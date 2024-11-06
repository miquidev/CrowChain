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

# Exponer el puerto 3000
EXPOSE 3000

# Copia los archivos generados a la carpeta de Nginx
COPY --from=build /app/.next /usr/share/nginx/html

# Configura nginx para servir en el puerto 3000
CMD ["nginx", "-g", "daemon off;", "-p", "3000"]
