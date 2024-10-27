GNU nano 5.8                                                                  Dockerfile                                                                            
# Use the official Node.js image as a base
FROM node:18

# Set the working directory
WORKDIR /home/ec2-user/my-node-app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]