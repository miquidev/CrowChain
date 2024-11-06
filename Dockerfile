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

# Etapa 2: Servir la aplicación con Nginx o directamente desde Next.js
FROM node:18 AS production

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios desde la etapa de construcción
COPY --from=build /app /app

# Exponer el puerto donde Next.js correrá
EXPOSE 3000

# Iniciar la aplicación con Next.js en modo producción
CMD ["npm", "run", "start"]
