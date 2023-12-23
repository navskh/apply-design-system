# Base Node.js image
FROM node:latest AS build

# Create app directory
RUN mkdir /ads
WORKDIR /ads

# Install dependencies
COPY package.json .
RUN npm install

# Bundle app source
FROM base AS dependencies
RUN npm install

FROM base AS builder
COPY --from=dependencies /ads/node_modules ./node_modules
COPY . .

RUN npm run build
# Expose port
EXPOSE 80
# Start Nginx server
CMD ["npm", "start"]
