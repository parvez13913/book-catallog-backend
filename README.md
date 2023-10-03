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
- https://book-catallog-backend-phi.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) 
- https://book-catallog-backend-phi.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
- https://book-catallog-backend-phi.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) 
- https://book-catallog-backend-phi.vercel.app/api/v1/profile (GET)

### Category

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
- api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

### Books

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/:categoryId/category (GET)
- api/v1/books/:id (GET)
- api/v1/books/:id (PATCH)
- api/v1/books/:id (DELETE)

### Orders

- api/v1/orders/create-order (POST)
- api/v1/orders (GET) 
- api/v1/orders/:orderId (GET)


