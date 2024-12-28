# Build stage
FROM node:14 as build

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the React app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to Nginx's web directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose the port Nginx is running on
EXPOSE 80

# Command to run Nginx
CMD ["nginx", "-g", "daemon off;"]
