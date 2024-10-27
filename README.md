# aws-docker-s3


Build Docker:
docker build -t sathishvisar/my-image-name:latest .

Publish Docker:
docker push sathishvisar/my-image-name:latest


Run Docker:
docker run -d --name my-node-app -p 3000:3000 sathishvisar/my-image-name:latest
