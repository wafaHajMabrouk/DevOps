# Utiliser une image Node.js pour le build
FROM node:16-alpine as build

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et installer les dépendances
COPY frontend/package*.json ./
RUN npm install

# Copier le reste des fichiers et construire l'application React
COPY frontend/ .
RUN npm run build

# Utiliser Nginx pour servir l'application React
FROM nginx:alpine

# Copier le build de React dans le répertoire de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port
EXPOSE 80
