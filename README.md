# Ticket Management API

This repository contains the source code for the Ticket Management API, the backend service for a ticket management application. It is built with Node.js, Express, and TypeScript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. You can download them from [https://nodejs.org/](https://nodejs.org/).

### Installation

1.  Clone the repository:
    ```sh
    git clone https://github.com/depicon/ticket-management-api.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd ticket-management-api
    ```
3.  Install the dependencies:
    ```sh
    npm install
    ```

## Available Scripts

In the project directory, you can run the following scripts:

-   `npm start`: Starts the server in production mode.
-   `npm run dev`: Starts the server in development mode with nodemon for live reloading.
-   `npm run lint`: Lints the source code using ESLint.
-   `npm run build`: Compiles the TypeScript code to JavaScript.

## API Endpoints

The following API endpoints are available:

-   `POST /api/tickets`: Creates a new ticket.
-   `GET /api/tickets`: Retrieves all tickets.
-   `GET /api/tickets/:id`: Retrieves a single ticket by its ID.
-   `PUT /api/tickets/:id`: Updates a ticket by its ID.
-   `GET /health`: Health check endpoint.

## Environment Variables

This project uses environment variables to configure the application. Create a `.env` file in the root of the project and add the following variables:

```
PORT=3000
ALLOWED_ORIGINS=http://localhost:5173
```

-   `PORT`: The port on which the server will run.
-   `ALLOWED_ORIGINS`: A comma-separated list of allowed origins for CORS.
