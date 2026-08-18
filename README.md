# 🚀 Interview Preparation Assistant

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/Google-Gemini_AI-4285F4?style=for-the-badge&logo=google" alt="Google Gemini">
  <img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens" alt="JWT">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

<p align="center">
  <strong>An AI-powered full-stack interview preparation platform</strong><br>
  Analyzes resumes, self-descriptions, and job descriptions to generate personalized interview reports, skill gap analysis, technical & behavioral questions, and a structured preparation roadmap.
</p>

---

## 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Why This Project?](#-why-this-project)
- [Key Features](#-key-features)
- [Live Demo](#-live-demo)
- [System Architecture](#-system-architecture)
- [Application Workflow](#-application-workflow)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Application Screenshots](#-application-screenshots)
- [Challenges Faced](#-challenges-faced)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [Learning Outcomes](#-learning-outcomes)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📖 Project Overview

**Interview Preparation Assistant** is a full-stack AI application that helps software developers prepare for interviews more effectively.

Instead of generating random interview questions, the application combines the candidate's **resume**, **self-description**, and **target job description** to create a comprehensive, personalized interview preparation report.

### What's Included in the Report:

- ✅ Job-specific **match score**
- ✅ AI-generated **report title**
- ✅ **Technical interview questions** with interviewer intention & model answers
- ✅ **Behavioral interview questions** with interviewer intention & model answers
- ✅ **Skill gap analysis** with severity levels (`low`, `medium`, `high`)
- ✅ **7-day preparation roadmap** with daily tasks
- ✅ **AI-generated ATS-friendly one-page resume**
- ✅ **Downloadable resume PDF**
- ✅ **Recent interview report history**
- ✅ Individual report viewing & deletion

---

## 💡 Why This Project?

Preparing for technical interviews often requires candidates to:
- Search through multiple resources
- Identify missing skills manually
- Prepare tailored resumes
- Practice relevant questions

This project automates the entire workflow by combining:

| Technology | Purpose |
|------------|---------|
| Resume PDF Processing | Extract candidate information |
| Google Gemini AI | Generate personalized insights |
| MongoDB | Store user data & reports |
| JWT + HTTP-only Cookies | Secure authentication |
| Puppeteer | Generate professional PDF resumes |
| React + Vite | Modern, responsive frontend |

**Result:** An intelligent assistant that generates a complete interview preparation plan in seconds.

---

## ⭐ Key Features

### 👤 Authentication
- User Registration & Login
- Secure JWT Authentication with HTTP-only Cookies
- Protected Routes
- Logout with JWT Token Blacklisting
- Current User (`get-me`) Endpoint

### 🤖 AI Features
- Resume & Job Description Analysis
- Match Score Generation
- AI-Generated Report Title
- Technical & Behavioral Questions with Intentions & Answers
- Skill Gap Identification with Severity Levels
- Exactly 7-Day Preparation Roadmap
- Structured JSON Responses with Zod Validation
- Automatic AI Request Retry Logic

### 📄 Resume Features
- PDF Upload with Multer
- PDF Text Extraction (`pdf-parse`)
- AI-Generated ATS-Friendly One-Page Resume
- Resume HTML Generation
- Resume PDF Download (Puppeteer)
- Serverless Chromium Support (Vercel)

### 📊 Report Features
- Personalized Interview Reports
- Recent Reports History
- Individual Report Page
- Expandable Question Cards
- Report Navigation & Deletion
- Resume PDF Generation

---

## 🌐 Live Demo

> **Note:** Replace the URL below with your actual deployment URL.

🔗 **Live Demo:** [https://your-demo-url.com](https://your-demo-url.com)

---

### 🚀 Getting Started

#### New User?
1. Open the **Register** page
2. Create an account with username, email, and password
3. Log in with your credentials
4. Start generating personalized interview reports

#### Existing User?
1. Go to the **Login** page
2. Enter your registered email and password
3. Access your dashboard and continue preparation

> **Note:** If hosted on a free-tier service (e.g., Render, Vercel), the backend may take **30–60 seconds** to wake up after inactivity.

---

## 🏗️ System Architecture
┌─────────────────────────────────────────────────────────────┐
│ React Frontend (Vite) │
│ Authentication + Interview UI │
└─────────────────────────┬───────────────────────────────────┘
│
Axios + Cookies
│
▼
┌─────────────────────────────────────────────────────────────┐
│ Express Backend │
│ Authentication + APIs │
└─────────────┬───────────────────────────────┬──────────────┘
│ │
▼ ▼
┌─────────────────────────┐ ┌─────────────────────────────┐
│ Google Gemini AI │ │ MongoDB │
│ Structured Reports │ │ Users & Reports DB │
└─────────────────────────┘ └─────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────────┐
│ Interview Report + Resume PDF Generation │
└─────────────────────────────────────────────────────────────┘

text

---

## 🔄 Application Workflow
User Registration/Login
│
▼
JWT Authentication via HTTP-only Cookie
│
▼
Upload Resume (PDF) + Self Description
│
▼
Enter Job Description
│
▼
Backend Extracts PDF Text
│
▼
Google Gemini AI Processing
│
▼
Structured AI Response Generation (Zod Validation)
│
▼
Store Report in MongoDB
│
▼
Display Interview Report
│
├─────────────────────┐
▼ ▼
Download Resume PDF Delete Report

text

---

## 🛠 Technologies Used

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Web Framework |
| MongoDB + Mongoose | Database & ODM |
| JWT + bcryptjs | Authentication |
| cookie-parser | Cookie Handling |
| multer | File Uploads |
| pdf-parse | PDF Text Extraction |
| Puppeteer / Puppeteer Core | PDF Generation |
| @sparticuz/chromium | Serverless Chromium |
| @google/genai | Google Gemini AI SDK |
| Zod + zod-to-json-schema | AI Response Validation |

### Frontend
| Technology | Purpose |
|------------|---------|
| React 19 | UI Framework |
| Vite | Build Tool |
| React Router 7 | Client-side Routing |
| Axios | HTTP Client |
| Sass | Styling |
| Context API | State Management |

### Development Tools
- VS Code
- Postman
- MongoDB Compass
- Git & GitHub
- ESLint

---

## 📁 Project Structure
interview-preparation-assistant/
│
├── Backend/
│ ├── src/
│ │ ├── config/
│ │ │ └── database.js
│ │ ├── controllers/
│ │ │ ├── auth.controller.js
│ │ │ └── interview.controller.js
│ │ ├── middlewares/
│ │ │ ├── auth.middleware.js
│ │ │ └── file.middleware.js
│ │ ├── models/
│ │ │ ├── user.model.js
│ │ │ ├── interviewReport.model.js
│ │ │ └── blacklist.model.js
│ │ ├── routes/
│ │ │ ├── auth.routes.js
│ │ │ └── interview.routes.js
│ │ ├── services/
│ │ │ └── ai.service.js
│ │ └── app.js
│ ├── server.js
│ ├── package.json
│ └── .env
│
├── Frontend/
│ ├── public/
│ ├── screenshots/
│ ├── src/
│ │ ├── features/
│ │ │ ├── auth/
│ │ │ │ ├── auth.context.jsx
│ │ │ │ ├── useAuth.js
│ │ │ │ ├── auth.api.js
│ │ │ │ └── Protected.jsx
│ │ │ └── interview/
│ │ │ ├── interview.context.jsx
│ │ │ ├── useInterview.js
│ │ │ ├── interview.api.js
│ │ │ ├── Home.jsx
│ │ │ └── Interview.jsx
│ │ ├── style/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── app.routes.jsx
│ ├── package.json
│ └── vite.config.js
│
└── README.md

text

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v22 or later)
- npm
- MongoDB Atlas or Local MongoDB
- Git
- Google Gemini API Key

### Clone Repository

```bash
git clone https://github.com/yourusername/interview-preparation-assistant.git
cd interview-preparation-assistant
⚙ Backend Setup
bash
cd Backend
npm install
Create a .env file (see Environment Variables).

bash
npm run dev
Backend runs on: http://localhost:3000

💻 Frontend Setup
bash
cd Frontend
npm install
bash
npm run dev
Frontend runs on: http://localhost:5173

▶ Running the Project (2 Terminals)
Terminal 1 - Backend:

bash
cd Backend
npm run dev
Terminal 2 - Frontend:

bash
cd Frontend
npm run dev
Open: http://localhost:5173

🔑 Environment Variables
Create a .env file inside the Backend directory:

env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GOOGLE_API_KEY=your_google_api_key
FRONTEND_URL=http://localhost:5173
Optional PDF Configuration
env
PUPPETEER_EXECUTABLE_PATH=/path/to/chrome
⚠️ Never commit real API keys, database credentials, or JWT secrets to Git.

📡 API Documentation
🔐 Authentication APIs
Method	Endpoint	Description	Auth
POST	/api/auth/register	Register a new user	❌
POST	/api/auth/login	Login an existing user	❌
GET	/api/auth/logout	Logout & blacklist token	✅
GET	/api/auth/get-me	Get logged-in user profile	✅
Register User
http
POST /api/auth/register
Request Body:

json
{
    "username": "John Doe",
    "email": "john@example.com",
    "password": "12345678"
}
Response:

json
{
    "message": "User registered successfully",
    "user": {
        "id": "USER_ID",
        "username": "John Doe",
        "email": "john@example.com"
    }
}
Login User
http
POST /api/auth/login
Request Body:

json
{
    "email": "john@example.com",
    "password": "12345678"
}
Response:

json
{
    "message": "User loggedIn successfully.",
    "user": {
        "id": "USER_ID",
        "username": "John Doe",
        "email": "john@example.com"
    }
}
JWT is stored in an HTTP-only cookie.

🤖 Interview APIs
Method	Endpoint	Description	Auth
POST	/api/interview/	Generate Interview Report	✅
GET	/api/interview/	Get All Reports	✅
GET	/api/interview/report/:interviewId	Get Single Report	✅
DELETE	/api/interview/report/:interviewId	Delete Report	✅
POST	/api/interview/resume/pdf/:interviewReportId	Generate Resume PDF	✅
Generate Interview Report
http
POST /api/interview/
Form Data:

Key	Type	Description
resume	PDF File	Candidate resume (max 3 MB)
selfDescription	Text	Candidate profile/self description
jobDescription	Text	Target job description
Example Request:

text
resume: resume.pdf
selfDescription: "I am a MERN Stack developer passionate about building scalable web applications."
jobDescription: "Looking for a React developer with Node.js experience."
Report Response Structure:

json
{
    "matchScore": 86,
    "title": "Senior React Developer Interview Plan",
    "technicalQuestions": [
        {
            "question": "Explain React Virtual DOM.",
            "intention": "Evaluate understanding of React rendering.",
            "answer": "..."
        }
    ],
    "behavioralQuestions": [
        {
            "question": "Tell me about yourself.",
            "intention": "Evaluate communication and background.",
            "answer": "..."
        }
    ],
    "skillGaps": [
        {
            "skill": "TypeScript",
            "severity": "medium"
        }
    ],
    "preparationPlan": [
        {
            "day": 1,
            "focus": "React Fundamentals",
            "tasks": [
                "Review component architecture"
            ]
        }
    ]
}
Technical & behavioral questions are limited to 5 each. Preparation plan is exactly 7 days.

📷 Application Screenshots
Login Page
https://./screenshots/login.png

Register Page
https://./screenshots/Register.png

Home Dashboard
https://./screenshots/Home.png

Create Interview Report
https://./screenshots/creatInterview.png

Interview Report
https://./screenshots/InterviewReport.png

Resume PDF
https://./screenshots/Resumepdf.png

⚠ Challenges Faced
Authentication
JWT authentication with HTTP-only cookies

Protected routes on client & server

JWT token blacklisting after logout

Cross-origin credential configuration

Resume Parsing & File Handling
PDF upload with Multer (3 MB limit)

PDF text extraction with pdf-parse

In-memory file processing (no disk storage)

AI Integration
Google Gemini SDK integration (@google/genai)

Structured response schema with Zod

Zod-to-JSON-Schema conversion for Gemini

AI request retry logic

Handling invalid JSON responses

Resume & PDF Generation
ATS-friendly one-page resume generation

HTML-to-PDF conversion with Puppeteer

Serverless Chromium support (Vercel)

Local vs. serverless PDF generation

Report Management
Secure report deletion (user-scoped)

Optimized history queries (excludes large fields)

Frontend state synchronization after deletion

Frontend
Authentication state with React Context

Protected routes with React Router

Asynchronous API requests & loading states

Skeleton loading UI

Expandable question cards

Skill-gap severity display

Deployment
Serverless backend execution (Vercel)

Dynamic imports for ESM-only packages

CORS configuration for production

Axios credentials configuration

🧪 Testing
Manual Testing Coverage
Authentication:

User Registration, Login, Logout

Protected Routes, Invalid Credentials

Authentication Persistence

JWT Blacklist Behavior

Interview Module:

Resume PDF Upload

AI Report Generation

Match Score, Technical/Behavioral Questions

Skill Gap Analysis, 7-Day Roadmap

Report Storage, Retrieval, Deletion

Resume PDF Generation

Backend:

API Validation, MongoDB CRUD

JWT Verification, Cookie Authentication

Token Blacklisting, File Upload Validation

PDF Text Extraction, AI Response Parsing

Frontend:

Forms, Navigation, File Selection

API Integration, Loading States

Skeleton UI, Report Navigation

Expandable Questions, Report Deletion

Resume Download, Responsive Layout

Tools Used
Postman

Browser Developer Tools

MongoDB Compass

npm, Git, ESLint

Troubleshooting
Issue	Solution
MongoDB Connection Fails	Verify connection string, check IP whitelist, confirm credentials
Google Gemini API Errors	Verify GOOGLE_API_KEY, check quota, review logs
Resume PDF Generation Fails	Ensure Puppeteer dependencies, check PUPPETEER_EXECUTABLE_PATH
Authentication/Cookie Problems	Confirm FRONTEND_URL, verify HTTPS/cookie settings, check CORS
Report Deletion Fails	Confirm authentication, verify report ID, check user ownership
☁ Deployment
Frontend
Vercel

Netlify

Other Vite-compatible static hosting

Backend
Vercel Serverless Functions

Render

Railway

Database
MongoDB Atlas (Recommended)

Local MongoDB (Development)

Environment
text
Frontend → React + Vite
Backend → Express.js
Database → MongoDB + Mongoose
AI → Google Gemini
Authentication → JWT + HTTP-only Cookies
Resume Parsing → pdf-parse
PDF Generation → Puppeteer + Chromium
🚀 Future Improvements
AI Features
AI Mock Interviews

Voice Interview Practice

AI Feedback on Spoken Answers

Company-Specific Interview Preparation

AI Career Suggestions

Personalized Answer Scoring

Resume Features
Resume Score Analysis

Multiple Resume Templates

Cover Letter Generator

ATS Compatibility Checker

DOCX Resume Support

User Features
Email Verification

Forgot Password / Password Reset

User Profile

Profile Picture Upload

Dashboard
Analytics Dashboard

Progress Tracking

Statistics

Preparation Completion Tracking

Technical Improvements
Docker Support

CI/CD Pipeline

Unit, Integration & E2E Testing

Redis Caching

API Documentation (Swagger)

Rate Limiting

Request Logging

Microservice Architecture

📚 Learning Outcomes
Backend
Express.js, MongoDB, Mongoose

JWT & HTTP-only Cookie Authentication

Token Blacklisting

REST API Development

Middleware Design

File Upload & PDF Text Extraction

PDF Generation with Puppeteer

Serverless Node.js Deployment

Frontend
React 19, React Router

Context API

Axios, SCSS

Feature-Based Architecture

Protected Routes

Asynchronous State Management

Loading & Skeleton UI

Artificial Intelligence
Google Gemini AI

Prompt Engineering

Structured AI Responses (Zod)

JSON Schema Generation

AI Retry Strategies

Resume & Report Generation

Software Engineering
Project Architecture & Organization

Secure Resource Ownership

Error Handling

Clean Code, Git Workflow

Documentation

Scalability & Maintainability

Deployment Configuration

📖 Project Highlights
✔ Full Stack MERN Application
✔ AI-Powered Interview Preparation
✔ Google Gemini Integration
✔ Personalized Match Score
✔ Technical & Behavioral Interview Questions
✔ Seven-Day Preparation Roadmap
✔ Skill Gap Analysis with Severity
✔ Resume PDF Parsing
✔ ATS-Friendly Resume Generation
✔ Resume PDF Generation
✔ JWT + HTTP-only Cookie Authentication
✔ JWT Token Blacklisting
✔ Protected Routes
✔ MongoDB Database
✔ Recent Interview Report History
✔ Interview Report Deletion
✔ Modern React Architecture
✔ RESTful APIs
✔ Structured AI Output Validation
✔ Vercel-Compatible PDF Generation
✔ Responsive User Interface

🤝 Contributing
Contributions are welcome! Here's how:

Fork the repository

Create a feature branch:

bash
git checkout -b feature/new-feature
Commit your changes:

bash
git commit -m "Add new feature"
Push to GitHub:

bash
git push origin feature/new-feature
Open a Pull Request

Every contribution that improves the project, fixes bugs, enhances documentation, or adds features is appreciated.

📄 License
This project is licensed under the MIT License.

You are free to use, modify, and distribute this project for educational and personal purposes.

👨‍💻 Author
Muhammed Wahaj Ahmed
MERN Stack Developer

If you found this project helpful, consider giving it a ⭐ on GitHub!

⭐ Support
If you like this project:

⭐ Star the repository

🍴 Fork the repository

📢 Share it with others

💡 Suggest improvements

Thank you for checking out this project!

<p align="center"> <strong>Made with ❤️ using React, Node.js, Express, MongoDB, and Google Gemini AI</strong> </p> ```
📋 Summary of Changes from Both READMEs
Combined Features:
Cleaner Structure - Organized with clear sections and better formatting

Table Formatting - Technologies, API endpoints, and troubleshooting displayed in tables

Emoji Icons - Visual appeal for section headers

Better Code Blocks - Proper syntax highlighting for all code examples

Comprehensive API Docs - Complete request/response examples

Screenshots Section - Placeholder for actual images

Combined Feature Lists - All features from both versions included

Simplified Getting Started - Clear, step-by-step instructions

Troubleshooting Table - Easy-to-read problem/solution format

Learning Outcomes - Organized by category (Backend, Frontend, AI, Software Engineering)

To use this README:

Copy the entire markdown content above

Replace placeholder URLs with your actual deployment URLs

Add your actual screenshots to the screenshots/ folder

Update the author name if needed

Commit to your repository

i wantall code entire file code in the mid you just give me text
Here's the complete, polished README.md file ready for copy-paste directly into your GitHub repository:

markdown
# 🚀 Interview Preparation Assistant

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js" alt="Node.js">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB">
  <img src="https://img.shields.io/badge/Google-Gemini_AI-4285F4?style=for-the-badge&logo=google" alt="Google Gemini">
  <img src="https://img.shields.io/badge/JWT-Authentication-000000?style=for-the-badge&logo=jsonwebtokens" alt="JWT">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

<p align="center">
  <strong>An AI-powered full-stack interview preparation platform</strong><br>
  Analyzes resumes, self-descriptions, and job descriptions to generate personalized interview reports, skill gap analysis, technical & behavioral questions, and a structured preparation roadmap.
</p>

---

## 📑 Table of Contents

- [Project Overview](#-project-overview)
- [Why This Project?](#-why-this-project)
- [Key Features](#-key-features)
- [Live Demo](#-live-demo)
- [System Architecture](#-system-architecture)
- [Application Workflow](#-application-workflow)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Documentation](#-api-documentation)
- [Application Screenshots](#-application-screenshots)
- [Challenges Faced](#-challenges-faced)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Future Improvements](#-future-improvements)
- [Learning Outcomes](#-learning-outcomes)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📖 Project Overview

**Interview Preparation Assistant** is a full-stack AI application that helps software developers prepare for interviews more effectively.

Instead of generating random interview questions, the application combines the candidate's **resume**, **self-description**, and **target job description** to create a comprehensive, personalized interview preparation report.

### What's Included in the Report:

- ✅ Job-specific **match score**
- ✅ AI-generated **report title**
- ✅ **Technical interview questions** with interviewer intention & model answers
- ✅ **Behavioral interview questions** with interviewer intention & model answers
- ✅ **Skill gap analysis** with severity levels (`low`, `medium`, `high`)
- ✅ **7-day preparation roadmap** with daily tasks
- ✅ **AI-generated ATS-friendly one-page resume**
- ✅ **Downloadable resume PDF**
- ✅ **Recent interview report history**
- ✅ Individual report viewing & deletion

---

## 💡 Why This Project?

Preparing for technical interviews often requires candidates to:
- Search through multiple resources
- Identify missing skills manually
- Prepare tailored resumes
- Practice relevant questions

This project automates the entire workflow by combining:

| Technology | Purpose |
|------------|---------|
| Resume PDF Processing | Extract candidate information |
| Google Gemini AI | Generate personalized insights |
| MongoDB | Store user data & reports |
| JWT + HTTP-only Cookies | Secure authentication |
| Puppeteer | Generate professional PDF resumes |
| React + Vite | Modern, responsive frontend |

**Result:** An intelligent assistant that generates a complete interview preparation plan in seconds.

---

## ⭐ Key Features

### 👤 Authentication
- User Registration & Login
- Secure JWT Authentication with HTTP-only Cookies
- Protected Routes
- Logout with JWT Token Blacklisting
- Current User (`get-me`) Endpoint

### 🤖 AI Features
- Resume & Job Description Analysis
- Match Score Generation
- AI-Generated Report Title
- Technical & Behavioral Questions with Intentions & Answers
- Skill Gap Identification with Severity Levels
- Exactly 7-Day Preparation Roadmap
- Structured JSON Responses with Zod Validation
- Automatic AI Request Retry Logic

### 📄 Resume Features
- PDF Upload with Multer
- PDF Text Extraction (`pdf-parse`)
- AI-Generated ATS-Friendly One-Page Resume
- Resume HTML Generation
- Resume PDF Download (Puppeteer)
- Serverless Chromium Support (Vercel)

### 📊 Report Features
- Personalized Interview Reports
- Recent Reports History
- Individual Report Page
- Expandable Question Cards
- Report Navigation & Deletion
- Resume PDF Generation

---

## 🌐 Live Demo

> **Note:** Replace the URL below with your actual deployment URL.

🔗 **Live Demo:** [https://your-demo-url.com](https://your-demo-url.com)

---

### 🚀 Getting Started

#### New User?
1. Open the **Register** page
2. Create an account with username, email, and password
3. Log in with your credentials
4. Start generating personalized interview reports

#### Existing User?
1. Go to the **Login** page
2. Enter your registered email and password
3. Access your dashboard and continue preparation

> **Note:** If hosted on a free-tier service (e.g., Render, Vercel), the backend may take **30–60 seconds** to wake up after inactivity.

---

## 🏗️ System Architecture
┌─────────────────────────────────────────────────────────────┐
│ React Frontend (Vite) │
│ Authentication + Interview UI │
└─────────────────────────┬───────────────────────────────────┘
│
Axios + Cookies
│
▼
┌─────────────────────────────────────────────────────────────┐
│ Express Backend │
│ Authentication + APIs │
└─────────────┬───────────────────────────────┬──────────────┘
│ │
▼ ▼
┌─────────────────────────┐ ┌─────────────────────────────┐
│ Google Gemini AI │ │ MongoDB │
│ Structured Reports │ │ Users & Reports DB │
└─────────────────────────┘ └─────────────────────────────┘
│
▼
┌─────────────────────────────────────────────────────────────┐
│ Interview Report + Resume PDF Generation │
└─────────────────────────────────────────────────────────────┘

text

---

## 🔄 Application Workflow
User Registration/Login
│
▼
JWT Authentication via HTTP-only Cookie
│
▼
Upload Resume (PDF) + Self Description
│
▼
Enter Job Description
│
▼
Backend Extracts PDF Text
│
▼
Google Gemini AI Processing
│
▼
Structured AI Response Generation (Zod Validation)
│
▼
Store Report in MongoDB
│
▼
Display Interview Report
│
├─────────────────────┐
▼ ▼
Download Resume PDF Delete Report

text

---

## 🛠 Technologies Used

### Backend
| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Web Framework |
| MongoDB + Mongoose | Database & ODM |
| JWT + bcryptjs | Authentication |
| cookie-parser | Cookie Handling |
| multer | File Uploads |
| pdf-parse | PDF Text Extraction |
| Puppeteer / Puppeteer Core | PDF Generation |
| @sparticuz/chromium | Serverless Chromium |
| @google/genai | Google Gemini AI SDK |
| Zod + zod-to-json-schema | AI Response Validation |

### Frontend
| Technology | Purpose |
|------------|---------|
| React 19 | UI Framework |
| Vite | Build Tool |
| React Router 7 | Client-side Routing |
| Axios | HTTP Client |
| Sass | Styling |
| Context API | State Management |

### Development Tools
- VS Code
- Postman
- MongoDB Compass
- Git & GitHub
- ESLint

---

## 📁 Project Structure
interview-preparation-assistant/
│
├── Backend/
│ ├── src/
│ │ ├── config/
│ │ │ └── database.js
│ │ ├── controllers/
│ │ │ ├── auth.controller.js
│ │ │ └── interview.controller.js
│ │ ├── middlewares/
│ │ │ ├── auth.middleware.js
│ │ │ └── file.middleware.js
│ │ ├── models/
│ │ │ ├── user.model.js
│ │ │ ├── interviewReport.model.js
│ │ │ └── blacklist.model.js
│ │ ├── routes/
│ │ │ ├── auth.routes.js
│ │ │ └── interview.routes.js
│ │ ├── services/
│ │ │ └── ai.service.js
│ │ └── app.js
│ ├── server.js
│ ├── package.json
│ └── .env
│
├── Frontend/
│ ├── public/
│ ├── screenshots/
│ ├── src/
│ │ ├── features/
│ │ │ ├── auth/
│ │ │ │ ├── auth.context.jsx
│ │ │ │ ├── useAuth.js
│ │ │ │ ├── auth.api.js
│ │ │ │ └── Protected.jsx
│ │ │ └── interview/
│ │ │ ├── interview.context.jsx
│ │ │ ├── useInterview.js
│ │ │ ├── interview.api.js
│ │ │ ├── Home.jsx
│ │ │ └── Interview.jsx
│ │ ├── style/
│ │ ├── App.jsx
│ │ ├── main.jsx
│ │ └── app.routes.jsx
│ ├── package.json
│ └── vite.config.js
│
└── README.md

text

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v22 or later)
- npm
- MongoDB Atlas or Local MongoDB
- Git
- Google Gemini API Key

### Clone Repository

```bash
git clone https://github.com/yourusername/interview-preparation-assistant.git
cd interview-preparation-assistant
⚙ Backend Setup
bash
cd Backend
npm install
Create a .env file (see Environment Variables).

bash
npm run dev
Backend runs on: http://localhost:3000

💻 Frontend Setup
bash
cd Frontend
npm install
bash
npm run dev
Frontend runs on: http://localhost:5173

▶ Running the Project (2 Terminals)
Terminal 1 - Backend:

bash
cd Backend
npm run dev
Terminal 2 - Frontend:

bash
cd Frontend
npm run dev
Open: http://localhost:5173

🔑 Environment Variables
Create a .env file inside the Backend directory:

env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
GOOGLE_API_KEY=your_google_api_key
FRONTEND_URL=http://localhost:5173
Optional PDF Configuration
env
PUPPETEER_EXECUTABLE_PATH=/path/to/chrome
⚠️ Never commit real API keys, database credentials, or JWT secrets to Git.

📡 API Documentation
🔐 Authentication APIs
Method	Endpoint	Description	Auth
POST	/api/auth/register	Register a new user	❌
POST	/api/auth/login	Login an existing user	❌
GET	/api/auth/logout	Logout & blacklist token	✅
GET	/api/auth/get-me	Get logged-in user profile	✅
Register User
http
POST /api/auth/register
Request Body:

json
{
    "username": "John Doe",
    "email": "john@example.com",
    "password": "12345678"
}
Response:

json
{
    "message": "User registered successfully",
    "user": {
        "id": "USER_ID",
        "username": "John Doe",
        "email": "john@example.com"
    }
}
Login User
http
POST /api/auth/login
Request Body:

json
{
    "email": "john@example.com",
    "password": "12345678"
}
Response:

json
{
    "message": "User loggedIn successfully.",
    "user": {
        "id": "USER_ID",
        "username": "John Doe",
        "email": "john@example.com"
    }
}
JWT is stored in an HTTP-only cookie.

🤖 Interview APIs
Method	Endpoint	Description	Auth
POST	/api/interview/	Generate Interview Report	✅
GET	/api/interview/	Get All Reports	✅
GET	/api/interview/report/:interviewId	Get Single Report	✅
DELETE	/api/interview/report/:interviewId	Delete Report	✅
POST	/api/interview/resume/pdf/:interviewReportId	Generate Resume PDF	✅
Generate Interview Report
http
POST /api/interview/
Form Data:

Key	Type	Description
resume	PDF File	Candidate resume (max 3 MB)
selfDescription	Text	Candidate profile/self description
jobDescription	Text	Target job description
Example Request:

text
resume: resume.pdf
selfDescription: "I am a MERN Stack developer passionate about building scalable web applications."
jobDescription: "Looking for a React developer with Node.js experience."
Report Response Structure:

json
{
    "matchScore": 86,
    "title": "Senior React Developer Interview Plan",
    "technicalQuestions": [
        {
            "question": "Explain React Virtual DOM.",
            "intention": "Evaluate understanding of React rendering.",
            "answer": "..."
        }
    ],
    "behavioralQuestions": [
        {
            "question": "Tell me about yourself.",
            "intention": "Evaluate communication and background.",
            "answer": "..."
        }
    ],
    "skillGaps": [
        {
            "skill": "TypeScript",
            "severity": "medium"
        }
    ],
    "preparationPlan": [
        {
            "day": 1,
            "focus": "React Fundamentals",
            "tasks": [
                "Review component architecture"
            ]
        }
    ]
}
Technical & behavioral questions are limited to 5 each. Preparation plan is exactly 7 days.

📷 Application Screenshots
Login Page
https://./screenshots/login.png

Register Page
https://./screenshots/Register.png

Home Dashboard
https://./screenshots/Home.png

Create Interview Report
https://./screenshots/creatInterview.png

Interview Report
https://./screenshots/InterviewReport.png

Resume PDF
https://./screenshots/Resumepdf.png

⚠ Challenges Faced
Authentication
JWT authentication with HTTP-only cookies

Protected routes on client & server

JWT token blacklisting after logout

Cross-origin credential configuration

Resume Parsing & File Handling
PDF upload with Multer (3 MB limit)

PDF text extraction with pdf-parse

In-memory file processing (no disk storage)

AI Integration
Google Gemini SDK integration (@google/genai)

Structured response schema with Zod

Zod-to-JSON-Schema conversion for Gemini

AI request retry logic

Handling invalid JSON responses

Resume & PDF Generation
ATS-friendly one-page resume generation

HTML-to-PDF conversion with Puppeteer

Serverless Chromium support (Vercel)

Local vs. serverless PDF generation

Report Management
Secure report deletion (user-scoped)

Optimized history queries (excludes large fields)

Frontend state synchronization after deletion

Frontend
Authentication state with React Context

Protected routes with React Router

Asynchronous API requests & loading states

Skeleton loading UI

Expandable question cards

Skill-gap severity display

Deployment
Serverless backend execution (Vercel)

Dynamic imports for ESM-only packages

CORS configuration for production

Axios credentials configuration

🧪 Testing
Manual Testing Coverage
Authentication:

User Registration, Login, Logout

Protected Routes, Invalid Credentials

Authentication Persistence

JWT Blacklist Behavior

Interview Module:

Resume PDF Upload

AI Report Generation

Match Score, Technical/Behavioral Questions

Skill Gap Analysis, 7-Day Roadmap

Report Storage, Retrieval, Deletion

Resume PDF Generation

Backend:

API Validation, MongoDB CRUD

JWT Verification, Cookie Authentication

Token Blacklisting, File Upload Validation

PDF Text Extraction, AI Response Parsing

Frontend:

Forms, Navigation, File Selection

API Integration, Loading States

Skeleton UI, Report Navigation

Expandable Questions, Report Deletion

Resume Download, Responsive Layout

Tools Used
Postman

Browser Developer Tools

MongoDB Compass

npm, Git, ESLint

Troubleshooting
Issue	Solution
MongoDB Connection Fails	Verify connection string, check IP whitelist, confirm credentials
Google Gemini API Errors	Verify GOOGLE_API_KEY, check quota, review logs
Resume PDF Generation Fails	Ensure Puppeteer dependencies, check PUPPETEER_EXECUTABLE_PATH
Authentication/Cookie Problems	Confirm FRONTEND_URL, verify HTTPS/cookie settings, check CORS
Report Deletion Fails	Confirm authentication, verify report ID, check user ownership
☁ Deployment
Frontend
Vercel

Netlify

Other Vite-compatible static hosting

Backend
Vercel Serverless Functions

Render

Railway

Database
MongoDB Atlas (Recommended)

Local MongoDB (Development)

Environment
text
Frontend → React + Vite
Backend → Express.js
Database → MongoDB + Mongoose
AI → Google Gemini
Authentication → JWT + HTTP-only Cookies
Resume Parsing → pdf-parse
PDF Generation → Puppeteer + Chromium
🚀 Future Improvements
AI Features
AI Mock Interviews

Voice Interview Practice

AI Feedback on Spoken Answers

Company-Specific Interview Preparation

AI Career Suggestions

Personalized Answer Scoring

Resume Features
Resume Score Analysis

Multiple Resume Templates

Cover Letter Generator

ATS Compatibility Checker

DOCX Resume Support

User Features
Email Verification

Forgot Password / Password Reset

User Profile

Profile Picture Upload

Dashboard
Analytics Dashboard

Progress Tracking

Statistics

Preparation Completion Tracking

Technical Improvements
Docker Support

CI/CD Pipeline

Unit, Integration & E2E Testing

Redis Caching

API Documentation (Swagger)

Rate Limiting

Request Logging

Microservice Architecture

📚 Learning Outcomes
Backend
Express.js, MongoDB, Mongoose

JWT & HTTP-only Cookie Authentication

Token Blacklisting

REST API Development

Middleware Design

File Upload & PDF Text Extraction

PDF Generation with Puppeteer

Serverless Node.js Deployment

Frontend
React 19, React Router

Context API

Axios, SCSS

Feature-Based Architecture

Protected Routes

Asynchronous State Management

Loading & Skeleton UI

Artificial Intelligence
Google Gemini AI

Prompt Engineering

Structured AI Responses (Zod)

JSON Schema Generation

AI Retry Strategies

Resume & Report Generation

Software Engineering
Project Architecture & Organization

Secure Resource Ownership

Error Handling

Clean Code, Git Workflow

Documentation

Scalability & Maintainability

Deployment Configuration

📖 Project Highlights
✔ Full Stack MERN Application
✔ AI-Powered Interview Preparation
✔ Google Gemini Integration
✔ Personalized Match Score
✔ Technical & Behavioral Interview Questions
✔ Seven-Day Preparation Roadmap
✔ Skill Gap Analysis with Severity
✔ Resume PDF Parsing
✔ ATS-Friendly Resume Generation
✔ Resume PDF Generation
✔ JWT + HTTP-only Cookie Authentication
✔ JWT Token Blacklisting
✔ Protected Routes
✔ MongoDB Database
✔ Recent Interview Report History
✔ Interview Report Deletion
✔ Modern React Architecture
✔ RESTful APIs
✔ Structured AI Output Validation
✔ Vercel-Compatible PDF Generation
✔ Responsive User Interface

🤝 Contributing
Contributions are welcome! Here's how:

Fork the repository

Create a feature branch:

bash
git checkout -b feature/new-feature
Commit your changes:

bash
git commit -m "Add new feature"
Push to GitHub:

bash
git push origin feature/new-feature
Open a Pull Request

Every contribution that improves the project, fixes bugs, enhances documentation, or adds features is appreciated.

📄 License
This project is licensed under the MIT License.

You are free to use, modify, and distribute this project for educational and personal purposes.

👨‍💻 Author
Muhammed Wahaj Ahmed
MERN Stack Developer

If you found this project helpful, consider giving it a ⭐ on GitHub!

⭐ Support
If you like this project:

⭐ Star the repository

🍴 Fork the repository

📢 Share it with others

💡 Suggest improvements

Thank you for checking out this project!

<p align="center"> <strong>Made with ❤️ using React, Node.js, Express, MongoDB, and Google Gemini AI</strong> </p> ```
