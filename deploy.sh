#!/bin/bash

# Stop and remove the old container if it exists
if [ $(docker ps -q -f name=my-node-app) ]; then
    echo "Stopping and removing old container..."
    docker stop my-node-app
    docker rm my-node-app
fi

# Pull the latest image
echo "Pulling the latest image..."
docker pull sathishvisar/my-image-name:latest

# Run the container with the latest image
echo "Running the new container..."
docker run -d --name my-node-app -p 3000:3000 sathishvisar/my-image-name:latest
