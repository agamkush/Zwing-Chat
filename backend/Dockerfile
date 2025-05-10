# Use the official Node.js image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json for the backend
COPY backend/package*.json ./backend/

# Set the working directory to the backend folder
WORKDIR /app/backend

# Install dependencies for the backend
RUN npm install

# Copy the rest of the backend application code
COPY backend/ .

# Expose the application port
EXPOSE 5001

# Set the default command to run the application
CMD ["npm", "run", "start"]