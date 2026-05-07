<div align="center">
<br/>
███████╗██╗     ███████╗██╗   ██╗███████╗██╗  ████████╗
██╔════╝██║     ██╔════╝██║   ██║██╔════╝██║  ╚══██╔══╝
█████╗  ██║     █████╗  ██║   ██║█████╗  ██║     ██║   
██╔══╝  ██║     ██╔══╝  ╚██╗ ██╔╝██╔══╝  ██║     ██║   
███████╗███████╗███████╗ ╚████╔╝ ███████╗███████╗██║   
╚══════╝╚══════╝╚══════╝  ╚═══╝  ╚══════╝╚══════╝╚═╝

██╗  ██╗███╗   ██╗ ██████╗ ██╗    ██╗██╗     ███████╗██████╗  ██████╗ ███████╗
██║ ██╔╝████╗  ██║██╔═══██╗██║    ██║██║     ██╔════╝██╔══██╗██╔════╝ ██╔════╝
█████╔╝ ██╔██╗ ██║██║   ██║██║ █╗ ██║██║     █████╗  ██║  ██║██║  ███╗█████╗  
██╔═██╗ ██║╚██╗██║██║   ██║██║███╗██║██║     ██╔══╝  ██║  ██║██║   ██║██╔══╝  
██║  ██╗██║ ╚████║╚██████╔╝╚███╔███╔╝███████╗███████╗██████╔╝╚██████╔╝███████╗
╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝  ╚══╝╚══╝ ╚══════╝╚══════╝╚═════╝  ╚═════╝ ╚══════╝

🎓 Elevelt Knowledge —  Learning Management System
A full-stack learning platform to elevate knowledge, one course at a time.
Show Image
Show Image
Show Image
Show Image
Show Image
<br/>
Show Image
</div>
<br/>
📖 Table of Contents

About The Project
Live Demo
Features
Tech Stack
Project Structure
Getting Started
Environment Variables
API Endpoints
Screenshots
Contributing
License

<br/>

🚀 About The Project
Elevelt Knowledge is a modern full-stack Ed-Tech platform that empowers learners to discover, enroll in, and complete courses — all from a clean, intuitive interface. Whether you're a student aiming to upskill or an instructor sharing knowledge, Elevelt provides the tools to make learning seamless and engaging.

"Elevate your knowledge. One lesson at a time."

<br/>

🌐 Live Demo
PlatformURL🖥️ Frontend (Live)https://elevelt-knowlwdge-frontend.vercel.app/⚙️ Backend API(Add your backend URL here)
<br/>

✨ Features
🔐 Authentication & Authorization

User Sign Up / Login / Logout
JWT-based secure authentication
Role-based access control — Student & Instructor
Protected routes on both frontend and backend

📚 Courses

Browse all available courses
Course detail pages with descriptions, modules & instructor info
Enroll in courses with a single click
Progress tracking per course

🧠 Quizzes

In-course quizzes after each module
Instant result feedback with score breakdown
Quiz history and attempt records

📊 Dashboard

Student Dashboard — enrolled courses, progress, quiz scores
Instructor Dashboard — manage created courses, view student stats
Clean analytics cards and progress visualizations

<br/>

🛠️ Tech Stack
🎨 Frontend
TechnologyPurposeReact.jsUI LibraryReact Router DOMClient-side RoutingAxiosHTTP RequestsContext API / ReduxState ManagementTailwind CSS / CSS ModulesStylingVercelDeployment
⚙️ Backend
TechnologyPurposeNode.jsRuntime EnvironmentExpress.jsWeb FrameworkMongoDBDatabaseMongooseODM for MongoDBJWTAuthenticationBcrypt.jsPassword HashingCloudinaryMedia / Image UploadsdotenvEnvironment Variables
<br/>

📁 Project Structure
elevelt-knowledge/
│
├── 📂 frontend/                    # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── 📂 assets/              # Images, icons
│   │   ├── 📂 components/          # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── CourseCard.jsx
│   │   │   ├── QuizCard.jsx
│   │   │   └── ...
│   │   ├── 📂 pages/               # Route-level pages
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Courses.jsx
│   │   │   ├── CourseDetail.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Quiz.jsx
│   │   ├── 📂 context/             # Auth & global state
│   │   ├── 📂 services/            # Axios API calls
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   └── package.json
│
└── 📂 backend/                     # Node.js + Express API
    ├── 📂 config/
    │   └── db.js                   # MongoDB connection
    ├── 📂 controllers/
    │   ├── authController.js
    │   ├── courseController.js
    │   ├── quizController.js
    │   └── userController.js
    ├── 📂 models/
    │   ├── User.js
    │   ├── Course.js
    │   ├── Quiz.js
    │   └── Enrollment.js
    ├── 📂 routes/
    │   ├── authRoutes.js
    │   ├── courseRoutes.js
    │   ├── quizRoutes.js
    │   └── userRoutes.js
    ├── 📂 middlewares/
    │   ├── authMiddleware.js
    │   └── errorHandler.js
    ├── server.js
    ├── .env
    └── package.json
<br/>

🏁 Getting Started
✅ Prerequisites
Make sure you have the following installed:

Node.js >= 18.x
MongoDB (local or Atlas)
Git
