# Stage 1: Install Dependencies
FROM node:18 AS dependencies

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Stage 2: Production Stage
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy only the necessary files from the dependencies stage
COPY --from=dependencies /app /app

# Install only production dependencies
RUN npm install --production

# Expose the application port
EXPOSE 5001

# Set the default command to run the application
CMD ["node", "src/index.js"]