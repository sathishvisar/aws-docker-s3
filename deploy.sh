#!/bin/bash

# Stop and remove the old container if it exists
if [ "$(docker ps -q -f name=my-node-app)" ]; then
    echo "Stopping the old container..."
    docker stop my-node-app

    # Wait for a moment to ensure the container has stopped
    sleep 2

    echo "Removing the old container..."
    docker rm my-node-app
fi

# Pull the latest image
echo "Pulling the latest image..."
docker pull sathishvisar/my-image-name:latest

# Check if the image was pulled successfully
if [ $? -ne 0 ]; then
    echo "Failed to pull the latest image. Exiting..."
    exit 1
fi

# Run the container with the latest image
echo "Running the new container..."
docker run -d --name my-node-app -p 3000:3000 sathishvisar/my-image-name:latest

# Check if the container was started successfully
if [ $? -eq 0 ]; then
    echo "Container is running successfully."
else
    echo "Failed to run the container."
    exit 1
fi
