# Use an official Node runtime as the base image
FROM node:18-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Serve the app using a simple node HTTP server
CMD ["npx", "serve", "-s", "dist", "-l", "8080"]
