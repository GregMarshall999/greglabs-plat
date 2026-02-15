FROM node:20-bookworm AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html