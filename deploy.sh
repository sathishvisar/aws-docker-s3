#!/bin/bash

# Stop and remove the old container if it exists
echo "Stopping the old container..."
docker stop my-node-app

# Wait for a moment to ensure the container has stopped
sleep 2

echo "Removing the old container..."
docker rm my-node-app

sleep 2
# Pull the latest image
echo "Pulling the latest image from Docker Hub..."
docker pull sathishvisar/my-image-name:latest

sleep 2
# Build the latest image
echo "Build latest code"
docker build -t sathishvisar/my-image-name:latest .

sleep 2
# Run the new container
echo "Running the new container..."
docker run --platform linux/amd64 -d --name my-node-app -p 3000:3000 sathishvisar/my-image-name:latest