FROM node:20-bullseye

WORKDIR /workspaces/website

# Copy package files
COPY package*.json ./

# Switch to non-root user *before* installing
USER node

RUN npm install

# Then copy the rest
COPY . .
