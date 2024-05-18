# Use an official Node runtime as the base image
FROM node:20.11.1

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside the Docker image
COPY . .

# Make port 8080 available to the world outside the container
EXPOSE 5000

# Run the app when the container starts
CMD ["npm", "start"]