# **Travel Guide Web Application**

This project is a fullstack web application that showcases popular destinations in New Jersey, including Cape May, Atlantic City, and Long Beach Island. Each destination page provides details such as a description, images, and links to local resources.

🚀 **The app is built using React for the frontend and Express.js with PostgreSQL for the backend.**  
🔐 **User authentication (JWT) is included to protect private routes.**  
🌤 **Integration with external APIs (e.g., weather services) for real-time data.**

---

## **🌟 Features**

✅ **Frontend**
- Dynamic routing to display information about each destination.
- Integration with React Router for seamless navigation.
- Beautiful, responsive design with images and descriptions.
- External links to official resources for each destination.
- User authentication (JWT) with login and registration.

✅ **Backend**
- REST API using **Express.js**.
- User authentication with **JWT (JSON Web Tokens)**.
- **PostgreSQL & Sequelize ORM** for the database.
- **Weather API integration** (optional feature).
- **CORS handling** to allow frontend-backend communication.

✅ **Deployment**
- **Frontend deployed on Netlify / Vercel**.
- **Backend deployed on Render / Heroku**.
- **Database hosted on PostgreSQL (Railway, ElephantSQL, or Supabase).**

---

## **🛠️ Technologies Used**

### **Frontend**
- **React**: For building the user interface.
- **React Router**: For client-side routing.
- **Vite**: For fast development and optimized builds.
- **Axios**: For API requests.
- **CSS Modules**: For styling.

### **Backend**
- **Node.js & Express.js**: RESTful API development.
- **PostgreSQL & Sequelize ORM**: Database management.
- **jsonwebtoken (JWT)**: Authentication and security.
- **dotenv**: For managing environment variables.
- **CORS**: Allow frontend to communicate with backend.

---

## **🚀 Getting Started**

### **1️⃣ Prerequisites**
Ensure you have the following installed:
- **Node.js**: Version 16 or higher
- **npm**: Comes with Node.js installation
- **PostgreSQL**: For database setup

---

### **2️⃣ Setup Instructions**

#### **🔹 Clone the repository**
```bash
git clone https://github.com/mauricek12d/the-travel-guide.git
cd the-travel-guide

npm run install

Set up the database
CREATE DATABASE travelguide_db;

Configure a .env file in the server folder 
DB_NAME=travelguide_db
DB_USER=your_psql_username
DB_PASSWORD=your_psql_password
JWT_SECRET_KEY=your_super_secret_key
DATABASE_URL=postgres://postgres:your_password@localhost:5432/travelguide_db

Build the frontend and backend 
npm run build 

Run the frontend and backend from the root folder
npm run start

