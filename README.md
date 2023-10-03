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
- https://book-catallog-backend-phi.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- https://book-catallog-backend-phi.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
- https://book-catallog-backend-phi.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

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


