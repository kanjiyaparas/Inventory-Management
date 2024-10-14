 
# Inventory Management System (IMS)

An Inventory Management System built with Vite, React.js for the frontend, and Node.js, Express, and MongoDB for the backend.

## Live URL
- *Frontend*: [Project App Frontend](https://inventory-management-2wmy7jaoi-paras-patels-projects-ebd7dde8.vercel.app/)
- *Backend*: [Project App Backend](https://inventory-management-8lgj.onrender.com)


## Table of Contents

- [Features](#features)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Manage products, companies, locations, and brands
- Track product history
- Dashboard with analytics
- Responsive design with Tailwind CSS

## Prerequisites

- Node.js
- npm or yarn
- MongoDB

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Backend Setup:**
   ```bash
   cd Backend
   npm install
   ```

3. **Frontend Setup:**
   ```bash
   cd ../Frontend
   npm install
   ```

## Running the Application

1. **Run Backend:**
   ```bash
   cd Backend
   npm start
   ```

2. **Run Frontend:**
   ```bash
   cd ../Frontend
   npm run dev
   ```

## Environment Variables

Create a `.env` file in the Backend and Frontend directories and configure the following:

### Backend `.env`:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=3000
SECRET_KEY=your_secret_key
NODE_ENV=development
ORIGIN=http://localhost:3000
```

### Frontend `.env`:
```env
VITE_SERVER=https://inventory-management-backend-hsaf.onrender.com
VITE_MODE=PROD
VITE_LOCAL=http://localhost:3000
```

## API Endpoints

### User Routes

- **POST** `/api/v1/users/signup` - Sign up a new user
- **POST** `/api/v1/users/login` - Log in a user
- **GET** `/api/v1/users/logout` - Log out a user

### Product Routes

- **GET** `/api/v1/products` - Get all products
- **POST** `/api/v1/products` - Add a new product
- **PUT** `/api/v1/products/:id` - Update a product
- **DELETE** `/api/v1/products/:id` - Delete a product

### History Routes

- **GET** `/api/v1/history/:productId` - Get product history

### Company Routes

- **GET** `/api/v1/companies` - Get all companies
- **POST** `/api/v1/companies` - Add a new company

### Location Routes

- **GET** `/api/v1/locations` - Get all locations
- **POST** `/api/v1/locations` - Add a new location

### Analytics Routes

- **GET** `/api/v1/analytics` - Get analytics data
