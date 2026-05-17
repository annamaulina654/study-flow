# Stage 1: Build the React application
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine
# Copy the custom Nginx configuration to listen on port 8080
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the built assets from the build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Cloud Run expects the container to listen on port 8080 by default
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
