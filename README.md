# My Next.js App

This is a Next.js application that can be run using Docker for both development and production environments.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Docker
- Docker Compose
- Make

## Getting Started

### Development Environment

To run the application in the development environment, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/my-next-app.git
   cd my-next-app

2. **Start the development environment:**

Use the Makefile to start the development environment.

```make dev

This command will:

Build the Docker image for development.
Start the Next.js application with live-reloading enabled.
Access the application:

Open your browser and navigate to http://localhost:3000.

Production Environment
To run the application in the production environment, follow these steps:

Build the Docker image:

```make build
This command will build the Docker image for the production environment.

Start the production environment:

```make prod

This command will:

Start the Docker containers for the Next.js application.
Run the application in production mode.
Access the application:

Open your browser and navigate to http://localhost:3000.

