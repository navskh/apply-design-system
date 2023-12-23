# Base Node.js image
FROM node:latest AS base

# Create app directory
RUN mkdir /ads
WORKDIR /ads

# Install dependencies
FROM base AS dependencies
COPY package.json .
RUN npm install

# Bundle app source
FROM base AS builder
COPY --from=dependencies /ads/node_modules ./node_modules
COPY ./src ./src
COPY ./public ./public 

RUN npm run build
# Expose port
EXPOSE 80
# Start Nginx server
CMD ["npm", "start"]
