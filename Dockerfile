# Imagen base oficial de Node.js
FROM node:20

# Establece el directorio de trabajo
WORKDIR /app

# Copia archivos
COPY package.json .
RUN npm install

COPY server.js .

# Expone el puerto del servidor
EXPOSE 80

# Comando por defecto
CMD ["npm", "start"]