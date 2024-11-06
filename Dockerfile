# Etapa de construcción
FROM node:18 AS build

WORKDIR /app

# Copiar archivos de configuración y dependencias
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos y construir la aplicación
COPY . .
RUN npm run build  # Esto generará la carpeta .next

# Etapa de producción
FROM nginx:alpine

# Copiar la carpeta .next generada en la etapa de construcción a Nginx
COPY --from=build /app/.next /usr/share/nginx/html

# Exponer el puerto 80 en lugar de 3000, que es el puerto por defecto de Nginx
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
