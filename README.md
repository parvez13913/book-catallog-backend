# book-catallog-backend
It is a book catalog backend project.  Which use node, typescript, express.js, prisma, and Postgresql as a database

# Book Catelog Project

# API Documentation

## Live Server Link : https://book-catallog-backend-phi.vercel.app/

## Application Routes

#### User

- https://book-catallog-backend-phi.vercel.app/api/v1/auth/signup (POST)
- https://book-catallog-backend-phi.vercel.app/api/v1/auth/signin (POST)
- https://book-catallog-backend-phi.vercel.app/api/v1/users (GET)
- https://book-catallog-backend-phi.vercel.app/api/v1/users/aaa0b4a5-65df-40b9-99f8-4d36392fff35 (Single GET) 
- https://book-catallog-backend-phi.vercel.app/api/v1/users/aaa0b4a5-65df-40b9-99f8-4d36392fff35 (PATCH)
- https://book-catallog-backend-phi.vercel.app/api/v1/users/aaa0b4a5-65df-40b9-99f8-4d36392fff35 (DELETE) 
- https://book-catallog-backend-phi.vercel.app/api/v1/profile (GET)

### Category

- https://book-catallog-backend-phi.vercel.app/api/v1/categories/create-category (POST)
- https://book-catallog-backend-phi.vercel.app/api/v1/categories (GET)
- https://book-catallog-backend-phi.vercel.app/api/v1/categories/4c28bfe1-21e2-448d-87a0-adfa7b7b80eb (Single GET) 
- https://book-catallog-backend-phi.vercel.app/api/v1/categories/4c28bfe1-21e2-448d-87a0-adfa7b7b80eb (PATCH)
- https://book-catallog-backend-phi.vercel.app/api/v1/categories/4c28bfe1-21e2-448d-87a0-adfa7b7b80eb (DELETE) 

### Books

- https://book-catallog-backend-phi.vercel.app/api/v1/books/create-book (POST)
- https://book-catallog-backend-phi.vercel.app/api/v1/books (GET)
- https://book-catallog-backend-phi.vercel.app/api/v1/books/:categoryId/category (GET)
- https://book-catallog-backend-phi.vercel.app/api/v1/books/:id (GET)
- https://book-catallog-backend-phi.vercel.app/api/v1/books/:id (PATCH)
- https://book-catallog-backend-phi.vercel.app/api/v1/books/:id (DELETE)

### Orders

- https://book-catallog-backend-phi.vercel.app/api/v1/orders/create-order (POST)
- https://book-catallog-backend-phi.vercel.app/api/v1/orders (GET) 
- https://book-catallog-backend-phi.vercel.app/api/v1/orders/:orderId (GET)


