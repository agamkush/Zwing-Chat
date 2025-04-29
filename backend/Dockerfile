FROM node:18-alpine AS builder
WORKDIR /app

# Install only prod dependencies in builder
COPY package*.json ./
RUN npm install --production
COPY . .

# ---- Final image ----
FROM node:18-alpine
WORKDIR /app

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy built app and node_modules from builder
COPY --from=builder /app /app

ENV NODE_ENV=production
EXPOSE 5001
USER appuser
CMD ["npm", "run", "dev"]
