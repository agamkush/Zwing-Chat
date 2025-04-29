FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci 
COPY . .

FROM node:18-alpine
WORKDIR /app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./
ENV NODE_ENV=production
EXPOSE 5001
USER appuser
CMD ["npm", "start"]
# docker build -t backend:latest -f devops/docker/Dockerfile.backend .
# docker run -d -p 5001:5001 backend:latest