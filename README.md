# Node.js Docker Container

This Docker container provides a pre-configured environment for running Node.js applications. It includes Node.js and npm, making it easy to build and deploy Node.js applications in a consistent and isolated environment.

## Features

- Lightweight Node.js environment
- Easy to use with Docker
- Suitable for development, testing, and production environments
- Customizable configuration options

## Getting Started

### Prerequisites

- Docker installed on your machine ([installation instructions](https://docs.docker.com/get-docker/))

### Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/Deepak18-06/docker-nodeapp
2. Build the Docker image:
   ```bash
   docker build -t my-node-app .
   ```
3. Run the Docker container:
   ```bash
   docker run -p 8080:8080 my-node-app
   ```
4. Run multiple instances of this
   ```bash
   docker run -d -p 8081:8080 my-node-app
   docker run -d -p 8082:8080 my-node-app
   docker run -d -p 8083:8080 my-node-app
   ```
5. Stoping docker container instances
   ```bash
   docker stop $(docker ps -aq)
   ```
6. Removing docker dangling docker images
   ```bash
   docker rmi $(docker images -f "dangling=true" -q)
   ```


