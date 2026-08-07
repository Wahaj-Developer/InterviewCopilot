# 🚀 Interview Preparation Assistant

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)
![Google Gemini](https://img.shields.io/badge/Google-Gemini_AI-4285F4?style=for-the-badge&logo=google)
![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</p>

<p align="center">

An AI-powered full-stack interview preparation platform that analyzes a candidate's resume, self-description, and target job description to generate personalized interview reports, skill gap analysis, technical questions, behavioral questions, and a structured preparation roadmap.

</p>

---

# 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Why This Project?](#-why-this-project)
- [Key Features](#-key-features)
- [System Architecture](#-system-architecture)
- [Application Workflow](#-application-workflow)
- [Project Structure](#-project-structure)
- [Technologies Used](#-technologies-used)
- [API Documentation](#-api-documentation)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Application Screenshots](#-application-screenshots)
- [Project Documentation](#-project-documentation)
- [Challenges Faced](#-challenges-faced)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [Learning Outcomes](#-learning-outcomes)
- [Contributing](#-contributing)
- [License](#-license)

---

# 📖 Project Overview

Interview Preparation Assistant is a full-stack AI application that helps software developers prepare for interviews more effectively.

Instead of simply generating random interview questions, the application analyzes the candidate's resume, self-description, and the target job description to create a personalized interview preparation report.

The generated report includes:

- Match score
- Resume analysis
- Technical interview questions
- Behavioral interview questions
- Skill gap analysis
- Seven-day preparation roadmap
- AI-generated professional resume
- Downloadable PDF resume

The project demonstrates practical implementation of modern MERN stack development while integrating Generative AI into a real-world workflow.

---
# 🌐 Live Demo

You can explore the application using the live demo below.

🔗 **Live Demo:** Wait let me compleat the documentation

---

## 🚀 Getting Started

### New User?

If you don't have an account yet:

1. Open the **Register** page.
2. Create a new account using your username, email, and password.
3. Log in with your newly created credentials.
4. Start generating personalized interview reports.

---

### Existing User?

Already have an account?

1. Go to the **Login** page.
2. Enter your registered email and password.
3. Access your dashboard and continue your interview preparation.

---

> **Note:** If the demo is hosted on a free-tier service (e.g., Render), the backend may take **30–60 seconds** to wake up after a period of inactivity.

---


# 💡 Why This Project?

Preparing for technical interviews often requires candidates to search through multiple resources, identify missing skills, and manually prepare resumes.

This project automates that process by combining:

- Resume Parsing
- Artificial Intelligence
- Authentication
- File Uploads
- PDF Generation
- MongoDB Data Storage
- React Frontend
- REST APIs

The goal is to provide an intelligent assistant that generates a complete interview preparation plan in just a few seconds.

---

# ⭐ Key Features

## 👤 Authentication

- User Registration
- User Login
- Secure JWT Authentication
- Cookie-Based Authentication
- Protected Routes
- Logout Functionality

---

## 🤖 AI Features

- Resume Analysis
- Job Description Analysis
- Self Description Analysis
- Match Score Generation
- Technical Question Generation
- Behavioral Question Generation
- Skill Gap Identification
- Seven-Day Preparation Plan
- AI Resume Generation

---

## 📄 Resume Features

- PDF Upload
- Resume Parsing
- Resume Optimization
- Resume Generation
- Resume PDF Download

---

## 📊 Report Features

- Personalized Interview Report
- Recent Reports History
- Report Storage
- Individual Report Page
- Resume Generation
- Match Score Display

---

# 🏗️ System Architecture

```text
                        +-------------------------+
                        |      React Frontend     |
                        |       (Vite + React)    |
                        +------------+------------+
                                     |
                                 Axios API
                                     |
                                     ▼
                        +-------------------------+
                        |     Express Backend     |
                        | Authentication & APIs   |
                        +------------+------------+
                                     |
                +--------------------+--------------------+
                |                                         |
                ▼                                         ▼
      +----------------------+               +----------------------+
      |   Google Gemini AI   |               |      MongoDB         |
      | AI Report Generator  |               | Users & Reports DB   |
      +----------------------+               +----------------------+
                |
                ▼
      +-----------------------------+
      | AI Interview Report         |
      | Resume Generation           |
      | PDF Generation              |
      +-----------------------------+
```

---


# 🔄 Application Workflow

```text
User Registration/Login
          │
          ▼
JWT Authentication
          │
          ▼
Upload Resume (PDF)
          │
          ▼
Enter Self Description
          │
          ▼
Paste Job Description
          │
          ▼
Backend Extracts Resume Text
          │
          ▼
Google Gemini AI Processing
          │
          ▼
Generate Interview Report
          │
          ▼
Validate AI Response (Zod)
          │
          ▼
Store Report in MongoDB
          │
          ▼
Display Report
          │
          ▼
Generate Resume PDF
```

---

# 📁 Project Structure

```text
Interview Preparation Assistant

├── Backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── routes
│   │   ├── services
│   │   └── models
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── Frontend
│   ├── public
│   ├── src
│   │   ├── features
│   │   ├── style
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── app.routes.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🛠 Technologies Used

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- multer
- cors
- dotenv
- pdf-parse
- Puppeteer
- Google Gemini AI
- Zod
- zod-to-json-schema

---

## Frontend

- React
- Vite
- React Router DOM
- Axios
- Sass
- Lucide React
- Context API

---

## Development Tools

- VS Code
- Postman
- MongoDB Compass
- Git
- GitHub
- npm

---

## Architecture Pattern

The application follows a layered backend architecture to improve maintainability and scalability.

```text
Routes
   │
Controllers
   │
Services
   │
Database / AI
```

This separation of concerns makes the project easier to test, extend, and maintain as new features are added.



---

# 📡 API Documentation

The backend exposes RESTful APIs for authentication, interview report generation, and resume generation.

---

# 🔐 Authentication APIs

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| POST | `/api/auth/register` | Register a new user | ❌ |
| POST | `/api/auth/login` | Login an existing user | ❌ |
| GET | `/api/auth/logout` | Logout current user | ✅ |
| GET | `/api/auth/get-me` | Get logged-in user profile | ✅ |

---

## Register User

### Endpoint

```http
POST /api/auth/register
```

### Request Body

```json
{
    "username":"John Doe",
    "email":"john@example.com",
    "password":"12345678"
}
```

### Response

```json
{
    "success": true,
    "message": "User registered successfully."
}
```

---

## Login User

### Endpoint

```http
POST /api/auth/login
```

### Request Body

```json
{
    "email":"john@example.com",
    "password":"12345678"
}
```

### Response

```json
{
    "success": true,
    "token":"JWT_TOKEN"
}
```

---

# 🤖 Interview APIs

| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|----------------|
| POST | `/api/interview` | Generate Interview Report | ✅ |
| GET | `/api/interview/report/:interviewId` | Get Single Interview Report | ✅ |
| GET | `/api/interview/reports` | Get All Reports | ✅ |
| POST | `/api/interview/resume/pdf/:interviewReportId` | Generate Resume PDF | ✅ |

---

## Generate Interview Report

### Endpoint

```http
POST /api/interview
```

### Form Data

| Key | Type |
|------|------|
| resume | PDF File |
| selfDescription | Text |
| jobDescription | Text |

---

### Example Request

```text
resume: resume.pdf

selfDescription:
"I am a MERN Stack developer passionate about building scalable web applications."

jobDescription:
"Looking for a React developer with Node.js experience."
```

---

### Example Response

```json
{
    "matchScore": 86,
    "technicalQuestions": [
        {
            "question":"Explain React Virtual DOM.",
            "answer":"..."
        }
    ],
    "behaviorQuestions":[
        {
            "question":"Tell me about yourself."
        }
    ],
    "skillGaps":[
        "TypeScript",
        "Testing"
    ],
    "preparationPlan":[
        "...7 Day Roadmap..."
    ]
}
```

---

## Generate Resume PDF

### Endpoint

```http
POST /api/interview/resume/pdf/:interviewReportId
```

This endpoint generates a professionally formatted PDF resume based on the AI-generated resume content.

---
