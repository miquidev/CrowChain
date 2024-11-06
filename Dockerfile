# Etapa 1: Construcción
FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json para instalar dependencias
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar todos los archivos del proyecto
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación utilizando un servidor web ligero
FROM nginx:alpine

# Copiar los archivos compilados desde la etapa de construcción
# Cambia dist a .next si usas Next.js y la aplicación construye en .next en lugar de dist
COPY --from=build /app/.next /usr/share/nginx/html

# Exponer el puerto donde correrá Nginx (actualizado a 3000)
EXPOSE 3000

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
