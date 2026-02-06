# IT342 G4 - User Registration and Authentication System
### Lab 2: Backend + Web Application

A modern, full-stack user authentication system built with Spring Boot (Backend) and React (Frontend), featuring enterprise-grade security with BCrypt password encryption and JWT token-based authentication.

---

## 🎯 Project Overview

This project implements a complete user registration and authentication system with the following features:

- **User Registration** with validation
- **User Login** with JWT token generation
- **Protected Dashboard** (authenticated users only)
- **Secure Logout** functionality
- **Password Encryption** using BCrypt
- **Modern UI/UX** with Tailwind CSS and custom animations
- **Responsive Design** for all screen sizes

---

## 🏗️ Project Structure

```
IT342_G4_<Lastname>_Lab1/
├── backend/                    # Spring Boot Backend
│   ├── src/
│   │   └── main/
│   │       ├── java/com/example/it342/backend/
│   │       │   ├── config/
│   │       │   │   ├── SecurityConfig.java
│   │       │   │   └── JwtAuthenticationFilter.java
│   │       │   ├── controller/
│   │       │   │   ├── AuthController.java
│   │       │   │   └── UserController.java
│   │       │   ├── dto/
│   │       │   │   ├── RegisterRequest.java
│   │       │   │   ├── LoginRequest.java
│   │       │   │   ├── AuthResponse.java
│   │       │   │   └── UserResponse.java
│   │       │   ├── entity/
│   │       │   │   └── User.java
│   │       │   ├── repository/
│   │       │   │   └── UserRepository.java
│   │       │   ├── service/
│   │       │   │   ├── AuthService.java
│   │       │   │   └── CustomUserDetailsService.java
│   │       │   ├── util/
│   │       │   │   └── JwtUtil.java
│   │       │   └── BackendApplication.java
│   │       └── resources/
│   │           └── application.properties
│   └── pom.xml
│
├── web/                       # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Dashboard.jsx
│   │   ├── services/
│   │   │   └── authService.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── docs/                      # Documentation
│   └── FRS.pdf               # Functional Requirements (with ERD, UML, Screenshots)
│
├── mobile/                    # (Empty - for next lab)
│
├── README.md                  # This file
└── TASK_CHECKLIST.md         # Task progress tracker

```

---

## 🚀 Technology Stack

### Backend
- **Framework**: Spring Boot 3.2.0
- **Language**: Java 17
- **Database**: MySQL 8.0
- **Security**: Spring Security + JWT
- **Password Encryption**: BCrypt
- **Build Tool**: Maven

### Frontend
- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Styling**: Tailwind CSS 3.3.6
- **Routing**: React Router DOM 6.20.0
- **HTTP Client**: Axios 1.6.2
- **Icons**: Lucide React 0.263.1

---

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Java Development Kit (JDK)** 17 or higher
- **Maven** 3.6 or higher
- **Node.js** 16 or higher
- **MySQL** 8.0 or higher
- **Git**

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/IT342_G4_<Lastname>_Lab1.git
cd IT342_G4_<Lastname>_Lab1
```

### 2. Database Setup

Create a MySQL database:

```sql
CREATE DATABASE auth_db;
```

### 3. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Update `src/main/resources/application.properties` with your MySQL credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/auth_db?createDatabaseIfNotExist=true
spring.datasource.username=your_mysql_username
spring.datasource.password=your_mysql_password
```

Build and run the backend:

```bash
mvn clean install
mvn spring-boot:run
```

The backend server will start on `http://localhost:8080`

### 4. Frontend Setup

Open a new terminal and navigate to the web directory:

```bash
cd web
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The frontend application will start on `http://localhost:3000`

---

## 🎮 API Endpoints

### Authentication Endpoints

#### 1. Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123",
  "fullName": "John Doe",
  "phoneNumber": "+1234567890"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "type": "Bearer",
  "id": 1,
  "username": "johndoe",
  "email": "john@example.com",
  "fullName": "John Doe"
}
```

#### 2. Login User
```http
POST /api/auth/login
Content-Type: application/json

{
  "usernameOrEmail": "johndoe",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "type": "Bearer",
  "id": 1,
  "username": "johndoe",
  "email": "john@example.com",
  "fullName": "John Doe"
}
```

#### 3. Logout User
```http
POST /api/auth/logout
Authorization: Bearer {token}
```

### User Endpoints

#### Get Current User (Protected)
```http
GET /api/user/me
Authorization: Bearer {token}
```

**Response:**
```json
{
  "id": 1,
  "username": "johndoe",
  "email": "john@example.com",
  "fullName": "John Doe",
  "phoneNumber": "+1234567890",
  "avatarUrl": null,
  "isActive": true,
  "createdAt": "2026-02-06T10:30:00"
}
```

---

## 🎨 Features

### Security Features
- ✅ Password encryption using BCrypt (strength: 10)
- ✅ JWT token-based authentication
- ✅ Protected routes requiring authentication
- ✅ Token expiration (24 hours)
- ✅ CORS configuration for cross-origin requests
- ✅ Input validation and sanitization

### User Experience Features
- ✅ Beautiful, modern UI with glassmorphism effects
- ✅ Smooth animations and transitions
- ✅ Responsive design for all devices
- ✅ Form validation with real-time feedback
- ✅ Loading states and success/error messages
- ✅ Professional color scheme and typography

---

## 🧪 Testing the Application

### Test User Registration
1. Navigate to `http://localhost:3000/register`
2. Fill in the registration form
3. Click "Create Account"
4. You should be automatically logged in and redirected to the dashboard

### Test User Login
1. Navigate to `http://localhost:3000/login`
2. Enter your credentials
3. Click "Sign In"
4. You should be redirected to the dashboard

### Test Protected Route
1. Try accessing `http://localhost:3000/dashboard` without logging in
2. You should be redirected to the login page
3. After logging in, you should be able to access the dashboard

### Test Logout
1. Click the "Logout" button in the dashboard
2. Confirm the logout
3. You should be redirected to the login page
4. Try accessing `/dashboard` - you should be redirected to login

---

## 📊 Database Schema

### Users Table

| Column       | Type         | Constraints                    |
|-------------|-------------|-------------------------------|
| id          | BIGINT      | PRIMARY KEY, AUTO_INCREMENT   |
| username    | VARCHAR(20) | UNIQUE, NOT NULL              |
| email       | VARCHAR(255)| UNIQUE, NOT NULL              |
| password    | VARCHAR(255)| NOT NULL (BCrypt encrypted)   |
| full_name   | VARCHAR(100)|                               |
| phone_number| VARCHAR(20) |                               |
| avatar_url  | VARCHAR(255)|                               |
| is_active   | BOOLEAN     | DEFAULT TRUE                  |
| created_at  | TIMESTAMP   | NOT NULL, AUTO                |
| updated_at  | TIMESTAMP   | AUTO UPDATE                   |

---

## 🐛 Troubleshooting

### Backend Issues

**Problem**: `Access denied for user 'root'@'localhost'`
**Solution**: Check your MySQL credentials in `application.properties`

**Problem**: Port 8080 already in use
**Solution**: Change the port in `application.properties`:
```properties
server.port=8081
```

### Frontend Issues

**Problem**: `Cannot connect to backend`
**Solution**: Ensure the backend is running on port 8080 and check CORS configuration

**Problem**: `npm install` fails
**Solution**: Delete `node_modules` and `package-lock.json`, then run `npm install` again

---

## 👥 Contributors

- **Your Name** - Full Stack Developer

---

## 📝 License

This project is created for educational purposes as part of IT342 coursework.

---

## 📞 Support

For any questions or issues, please contact:
- Email: your.email@university.edu
- GitHub Issues: [Create an issue](https://github.com/yourusername/IT342_G4_Lab1/issues)

---

## 🎓 Course Information

- **Course**: IT342 - Web Systems and Technologies
- **Lab**: Lab 2 - User Registration and Authentication
- **Institution**: Your University Name
- **Academic Year**: 2025-2026

---

**Built with ❤️ for IT342**
