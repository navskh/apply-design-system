# Base Node.js image
FROM node:latest AS build

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .
RUN npm run build

# Stage 2: Run with Nginx
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=build /app/.next/static /usr/share/nginx/html/_next/static
COPY --from=build /app/public /usr/share/nginx/html

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
# EXPOSE 80

# Start Nginx server
# CMD ["nginx", "-g", "daemon off;"]
