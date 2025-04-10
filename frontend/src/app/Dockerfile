# Étape 1 : Utiliser Node.js pour builder l'application React
FROM node:16-alpine AS build

# Créer un répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY frontend/package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du frontend dans le conteneur
COPY frontend/ ./

# Construire l'application React
RUN npm run build

# Étape 2 : Utiliser Nginx pour servir l'app React
FROM nginx:alpine

# Copier les fichiers construits vers Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port sur lequel Nginx écoute
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
