FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --production
COPY . .

FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app /app

ENV NODE_ENV=production
EXPOSE 5001

CMD ["npm", "start"]
