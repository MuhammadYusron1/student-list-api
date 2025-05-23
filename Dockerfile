# Step 1: Build React frontend
FROM node:18-alpine as frontend
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Step 2: Setup Express backend
FROM node:18-alpine
WORKDIR /app

# Copy everything except node_modules
COPY package*.json ./
RUN npm install
COPY . .

# Copy built React files
COPY --from=frontend /app/dist ./dist

EXPOSE 5000
CMD ["npm", "run", "dev"]