# Next.js with MongoDB Auth

This is a sample project that uses Next.js and MongoDB to create users. This project illustrates how to use JWT cookies to authorize user access to protected routes.

### The backend contains 3 API routes:

- Signup
- Login
- Profile

With these routes, new users can sign up, login, and view a protected route, like the `/profile` page.

### The frontend uses Next.js to:

- Create new users
- Log users in
- Do client side validation for protected routes, like `/profile`

<br/>

## How the backend works:

![Backend User Authentication Flow](./README_Imgs/Backend-Flow.jpg)

<br/>

## How the frontend works:

![Frontend User Authentication Flow](./README_Imgs/Frontend-Flow.jpg)

<br/>

# Getting Started

### Create a new MongoDB cluster

To use this project, you will need to create a new MongoDB cluster via a new project. This can be done on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Create a new `.env` file

In the root of the `mongo-auth-jwt` directory create a new `.env` file with the following information:

```
PORT = <AnyPortNumber>
DB_ENV = "testing"
FRONTEND_URL = <YourFrontendURL>
MONGO_URL = <YourMongodbURL>
SECRET_JWT_KEY = <AnySuperSecretKey>
```

### Install dependencies and start up the servers:

Make sure you are in the root directory of this project. Then, in your terminal:

```
npm run setup
npm run dev
```

These commands will install of the dependencies for you frontend and backend and start their servers up.

The backend is available at `http://localhost:<PORT>`, where `PORT` is the one you designated in the `.env` file.

### Create a new user

Create new user, using the Next js frontend. Visit `http://localhost:3000/signup` and create a new user.

```
"username": "henry",
"email": "henry@gmail.com",
"password": "1234RTD2"
```

A few things should happen:

- MongoDB Atlas should now show that new user.
- You should get a response that includes the JWT cookie (check Dev Tools > Application > Cookies)
- The client should automatically transition to the `/profile` page and showcase the new `username`.

<br/>

# The Backend Project Structure

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

<br/>

# The Frontend Project Structure

### state

This folder provides some global context to our entire app. It provides core functionality for:

- signing new users up
- logging users in
- logging users out
- fetching users

### components

All of the next js components. Much of the `Form` logic has been abstracted away. The primary thing to keep in mind is that when the `submit` button is clicked, the client fires off a request to the backend with that users information.

### pages

All of the next js pages. For the most part these just display a `Form` component.

### lib and `withAuth`

This directory contains a very important Higher Order Function, `withAuth`. This function can wrap any protected page, like `profile`, and validate whether the user is signed in via a JWT Cookie. It does this by checking for the cookie via `getServerSideProps`. If this user is signed in, let them proceed to the route. Otherwise, navigate them to the `login` page.

In practice, it looks like this:

```
export const getServerSideProps = (context) => {
  return withAuth.isAuthorized(context);
};

function ProfilePage(props) {
  return (
    <ProfilePageStyles>
      <Profile />
    </ProfilePageStyles>
  );
}

export default withAuth(ProfilePage);
```

# Resources:

Here are a few articles that helped with making this project:

- [Remaining Stateless - JWT + Cookies in Node JS by Ogbonna Basil](https://dev.to/mr_cea/remaining-stateless-jwt-cookies-in-node-js-3lle)

- [Client-side Authentication the Right Way (Cookies vs. Local Storage)](https://www.taniarascia.com/full-stack-cookies-localstorage-react-express/)

- [Express JS Cookies](https://www.tutorialspoint.com/expressjs/expressjs_cookies.htm)

- [JWT authentication: When and how to user it](https://blog.logrocket.com/jwt-authentication-best-practices/)

- [Manage Cookies with Express](https://flaviocopes.com/express-cookies/)

- [Learn how HTTP Cookies work](https://flaviocopes.com/cookies/#set-a-cookie-expiration-date)

- [Hashing in Action: Understanding bcrypt](https://auth0.com/blog/hashing-in-action-understanding-bcrypt/)

- [Next.js redirect after user logs in](https://nextjs.org/docs/api-reference/next/router#usage-2)

- [Next.js Authenticating Server-Rendered Page](https://nextjs.org/docs/authentication#authenticating-server-rendered-pages)

- [Middleware in Next.js](https://hoangvvo.com/blog/nextjs-middleware)

- [Next.js API Middlewares](https://nextjs.org/docs/api-routes/api-middlewares)

- [The Ultimate Guide to handling JWTs on frontend clients (GraphQL)](https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/#jwt_structure)

# Next Steps

From here, you can test out the different pieces, and see how it all works. The next step for this project is to try out using Next.js `useSWR` package for all client requests. And, eventually transferring the entire backend over to Next.js, serverless functions via the `api` folder.
