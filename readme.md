## E-commerce Repository
This repository contains the code for an e-commerce application with two folders: client and server. The server-side is built using Node.js, Express, and MongoDB, and it runs on port 5000. The client-side is developed with React, Material-UI, and other libraries, and it runs on port 3000.

# Server-side
The server-side folder (server/) contains the code responsible for the backend functionality of the e-commerce application. It includes the following dependencies:

crypto-js: A library for cryptographic operations.
cors: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express.
dotenv: Loads environment variables from a .env file.
express: Web application framework for Node.js.
jsonwebtoken: Library for creating and verifying JSON Web Tokens (JWT).
mongoose: MongoDB object modeling for Node.js.
nodemon: Utility that automatically restarts the server when changes are detected.
stripe: Node.js library for interacting with the Stripe API.
To start the server, run the following command in the terminal:

npm start
The server will be up and running on http://localhost:5000.

# Client-side
The client-side folder (client/) contains the code responsible for the frontend of the e-commerce application. It is built with React, Material-UI, and other related libraries. The client/ directory includes the following dependencies:

@emotion/react and @emotion/styled: Styling libraries used by Material-UI.
@mui/icons-material and @mui/material: Material-UI components and icons.
@reduxjs/toolkit, react-redux, redux, redux-persist, and redux-thunk: Libraries for managing state in React.
axios: Promise-based HTTP client for making API requests.
react-router-dom: Library for declarative routing in React.
react-stripe-checkout: React component for integrating Stripe payments.
styled-components: Library for styling React components with CSS-in-JS.
web-vitals: Library for measuring web performance.

To start the client, run the following command in the terminal:


npm start
The client will be accessible on http://localhost:3000.

# Usage
To use this e-commerce application, you need to ensure that both the server-side and client-side are running simultaneously. The server handles the backend logic and communicates with the database, while the client provides the user interface and interacts with the server's APIs.

You can customize and extend the functionalities according to your requirements by modifying the code within the server/ and client/ folders.

# License
This project is licensed under the ISC License. Feel free to use and modify the code as per the terms of the license.