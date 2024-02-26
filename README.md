# Backend for Shopify Next.js Frontend

This is the backend application for the Shopify Next.js project. It provides APIs to manage staff members, products, and orders, as well as simulate commissions based on specific commission plans.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project.
3. Install dependencies using Yarn:

```bash
yarn install
```

## Configuration

Ensure you have a MongoDB database set up. You can use a local or remote instance. Set the MongoDB connection URI in the .env file:

```plaintext
MONGODB_URI=mongodb+srv://<username>:<password>@<host>/<dbname>?retryWrites=true&w=majority&appName=Cluster0
```

Replace `<username>`, `<password>`, `<host>`, and `<dbname>` with your MongoDB credentials.

## Seed Data

To populate the database with seed data, run the following commands:

```bash
npx ts-node seeds/seedProducts.ts
npx ts-node seeds/seedOrders.ts
npx ts-node seeds/seedStaffMembers.ts
```

This will initialize the database with sample products, orders, and staff members.

## Running the Application

To run the application locally, follow these steps:

1. Start the backend server and database using Docker Compose:

```bash
docker-compose up
```

2. Once the Docker containers are running, you can access the application at `http://localhost:9000`.

## Usage

Provide instructions on how to use the backend APIs here.

## License

This project is licensed under the [License Name] License - see the [LICENSE.md](LICENSE.md) file for details.
