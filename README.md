Sure, here's the updated section regarding running the application:

## Running the Application

You can choose to run the application using Docker Compose or by setting it up locally.

### Using Docker Compose

To run the application with Docker Compose, follow these steps:

1. Ensure you have Docker installed on your machine.
2. Clone this repository to your local machine.
3. Navigate to the root directory of the project.
4. Run the following command to start the backend server and database:

```bash
docker-compose up
```

5. Once the Docker containers are running, you can access the application at `http://localhost:9000`.

### Running Locally

If you prefer to run the application locally without Docker, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project.
3. Install dependencies using Yarn:

```bash
yarn install
```

4. Start the backend server:

```bash
yarn start
```

5. The application will be accessible at `http://localhost:9000`.
