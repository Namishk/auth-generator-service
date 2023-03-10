JWT-Auth
This is a simple example of a Node.js application with JWT (JSON Web Tokens) Authentication.

This application is a starting point for building web applications that require user authentication.

Requirements
Node.js 12+
MongoDB
Installation
Clone the repository:
sh
Copy code
git clone https://github.com/Namishk/jwt-auth.git
Install the dependencies:
sh
Copy code
cd jwt-auth
npm install
Set the environment variables:
sh
Copy code
cp .env.example .env
Update the .env file with the correct values for your environment.

Start the application:
sh
Copy code
npm start
Usage
Register a User
sh
Copy code
curl --request POST \
  --url http://localhost:3000/api/auth/register \
  --header 'content-type: application/json' \
  --data '{
	"name": "John Doe",
	"email": "johndoe@example.com",
	"password": "password123"
}'
Login
sh
Copy code
curl --request POST \
  --url http://localhost:3000/api/auth/login \
  --header 'content-type: application/json' \
  --data '{
	"email": "johndoe@example.com",
	"password": "password123"
}'
Access Protected Routes
sh
Copy code
curl --request GET \
  --url http://localhost:3000/api/posts \
  --header 'authorization: Bearer <JWT_TOKEN>'
Replace <JWT_TOKEN> with the token you received after logging in.

Contributing
Feel free to open an issue or submit a pull request if you find any bugs or have any suggestions for improvement.

License
GPL-3.0