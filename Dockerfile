# Usar la imagen oficial de Node.js
FROM node:16

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install --force

# Copiar el resto del código de la aplicación
COPY . .


# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "start:dev"]
