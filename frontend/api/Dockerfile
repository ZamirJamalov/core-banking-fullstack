# Use the official Node.js image as the base image
FROM node:lts

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json file to the current directory
COPY package*.json ./

# Install any needed packages specified in the package.json file
RUN npm install

COPY public public

# Copy the built app to the current directory
COPY src src

# Expose port 3000 to the host machine
EXPOSE 3000
# Start the application
CMD ["npm", "start"]
