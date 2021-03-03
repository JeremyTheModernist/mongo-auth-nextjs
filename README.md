# Mongo-Auth-JWT

This is a sample project that uses Mongoose and MongoDB to create users. This project illustrates how to use JWT's to authorize user access to protected routes.

It contains 3 API routes:

- Signup
- Login
- Profile

With these routes, new users can sign up, login, and view a protected route, the `/profile` page.

### How It Works:

![User Authentication Flow](./README-imgs/User-Auth-Flow-3.jpg)

<br/>

# Getting Started

### Create a new MongoDB cluster

To use this project, you will need to create a new MongoDB cluster via a new project.

### Create a new `.env` file

In the root create a new `.env` file with the following information:

```
PORT = <AnyPortNumber>
MONGO_URL = <YourMongodbURL>
SECRET_JWT_KEY = <AnySuperSecretKey>
```

### Install dependencies and start the dev server:

In your terminal:

```
npm install
npm run dev
```

### Create a new user

Create new user, using Postman or Insomnia. Using `http://localhost:4002/signup` as the endpoint, make the following JSON POST request:

```
{
	"username": "henry",
	"email": "henry@gmail.com",
	"password": "1234RTD2"
}
```

You should get a response that includes the JWT.

### Use the JWT to access the profile endpoint:

Next, you can test this JWT to ensure it is working and used in the `Auth` process. In your `client`, navigate to the headers and provide your `JWT` like so:

```
token: <yourJWT>
```

Now, make a `GET` request to the following endpoint: `http://localhost:4002/profile`. The full user should be returned.

<br/>

# The Project Structure

### connectDB

This file is responsible for connecting mongoose to mongodb.

### models

This contains the `User` model. This is used in the `resolvers` to create new users and find existing ones.

### resolvers

These are the functions responsible for responding to incoming requests. They create new users, logging existing ones in, and returning JWT to the client.

### routes

These are all of the API routes. They each take a `resolver` function

### middleware

These are functions that run for certain routes when requests are made. There's an `Auth` middleware function that is responsible for verifying incoming JWT's, when a User tries to access the `Profile` route which is protected. The auth route looks for the JWT in the `req.header.token`. However, for security purposes this should be transferred over to an `httpOnly` cookie.

### app.js

This file wires all of these pieces up:

- It starts up your express server
- It creates a connection to your database
- It spins up your API
