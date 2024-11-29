# Book Search Engine 📚🔍

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Apollo GraphQL](https://img.shields.io/badge/-Apollo%20GraphQL-311C87?style=for-the-badge&logo=apollo-graphql)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description
A full-stack web application that allows users to search for books using the Google Books API, with the ability to save and manage their favorite books. This project demonstrates a modern web application using GraphQL, Apollo Server, React, MongoDB, and Node.js.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Screenshoots](#screenshoots)

## Features
- 🔎 Search for books using Google Books API
- 👤 User authentication (signup/login)
- 💾 Save favorite books to personal collection
- 🗑️ Remove books from saved collection
- 🌐 Responsive GraphQL-powered interface

## Technologies Used
- **Frontend**
  - React
  - Apollo Client
  - React Router
  - Tailwind CSS (optional styling)

- **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - GraphQL
  - Apollo Server
  - JSON Web Token (JWT) for authentication

- **APIs**
  - Google Books API
  - Custom GraphQL API

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB Atlas account
- Google Books API access

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/book-search-engine.git
cd book-search-engine
```

2. Install dependencies
```bash
# install
npm i
npm run build
```

3. Set up environment variables
Create a `.env` file in the server directory with:
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Running the Application

```bash
npm run develop
```

## Usage Walkthrough
1. **Search Books**
   - Enter a book title or keyword
   - Browse search results
   - View book details

2. **User Authentication**
   - Click "Login/Signup"
   - Toggle between login and signup
   - Create an account or log in

3. **Saving Books**
   - While logged in, save books to your collection
   - View saved books in "My Books" section
   - Remove books from your collection

## Deployment
Deployed on Render with MongoDB Atlas:
- Frontend: Render Web Service
- Backend: Render Web Service
- Database: MongoDB Atlas

**Deployment Steps**
1. Push code to GitHub
2. Connect Render to your GitHub repository
3. Configure environment variables
4. Deploy backend and frontend services

## GraphQL Schema
```graphql
type User {
  _id: ID!
  username: String!
  email: String!
  savedBooks: [Book]
}

type Book {
  bookId: ID!
  authors: [String]
  description: String
  title: String!
  image: String
  link: String
}

type Query {
  me: User
  searchBooks(query: String!): [Book]
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  saveBook(bookData: BookInput!): User
  removeBook(bookId: ID!): User
}
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ScreenShoots

![image](https://github.com/user-attachments/assets/dc51c4d0-ccb1-4005-951f-5c402923e8fc)
![image](https://github.com/user-attachments/assets/14410386-ee0e-4959-8718-ef764ec1df67)



## Additional Resources
- [React Documentation](https://reactjs.org/)
- [GraphQL Specification](https://graphql.org/)
- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
