NestFlix

NestFlix is a movie and TV series application built with NestJS.

Development Environment Setup
To set up the development environment for NestFlix, follow these steps:

Clone the repository:
git clone <https://github.com/litcoder-banik/SS-BACKEND-TASK-PARTHIB_BANIK.git>

Navigate to the project directory:
cd nest-flix

Install the dependencies:
npm install

Set up the PostgreSQL database:
Ensure you have PostgreSQL installed and running on your machine.
Create a new database for "nestflix".
Update the database configuration in the .env file with your PostgreSQL database details.

Start the development server:
npm run start:dev

The server will run at http://localhost:3000.

Running with Docker
You can also run the NestFlix application using Docker. Docker allows you to easily package the application and its dependencies into a container.

To run NestFlix with Docker, follow these steps:

Make sure Docker is installed and running on your machine.

Build the Docker image:
docker build -t nestflix/nest-flix .

Run the Docker container:
docker run -p 3000:3000 --env-file .env nestflix/nest-flix
The application will be accessible at http://localhost:3000.

Security Implementations
NestFlix incorporates the following security implementations:

Middleware with UseGuards: The application uses middleware with the UseGuards to protect routes that require authentication. The UseGuards checks for a valid user session before allowing access to protected resources.

Input Validation: The application validates user input and implements proper validation checks to prevent common security vulnerabilities, such as cross-site scripting (XSS) and SQL injection attacks.

Testing with Postman
NestFlix provides a Postman collection for testing the API endpoints. Follow the steps below to test the endpoints using Postman:

Install Postman: Download Postman.
Import the Postman collection:

Open Postman and click on the Import button.
Select the NestFlix.postman_collection.json file from the project's root directory.
The collection will be imported into Postman.
Update environment variables:

Click on the gear icon to manage environments in Postman.
Add a new environment and update the necessary variables like base_url to match your local development URL (http://localhost:3000).
Test the API endpoints:

Use the imported collection to send requests to the NestFlix API endpoints.

Ensure you include any required headers or parameters as specified in the collection.
Contributing

Contributions to NestFlix are welcome! If you find any issues or have suggestions for improvements, please suggest me.