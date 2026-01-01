# 🎓 Creata Mentor - Placement Preparation Platform

A comprehensive, AI-powered placement preparation platform designed to help students ace their technical interviews and land their dream jobs. Built with React, Vite, Express, and powered by Google's Gemini 2.5 Flash AI.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite)
![Node](https://img.shields.io/badge/Node-20.x-green.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## ✨ Features

### 🤖 AI-Powered Learning
- **AI Chat Assistant** - Get instant answers to technical questions with context-aware responses
- **Interview Practice** - Receive detailed AI feedback on your interview answers with structured analysis
- **Mock Interviews** - AI-generated technical questions tailored to your experience and tech stack

### 📚 Comprehensive Resources
- **Company Placement Notes** - Access company-specific preparation materials and notes
- **Knowledge Base** - 52+ PDF notes covering DSA, System Design, DBMS, OS, Networks, and more
- **Video Feed** - Curated and searchable YouTube video feed for learning
- **Interactive Quizzes** - 50+ quizzes to test your knowledge across multiple topics
- **Learning Roadmaps** - Structured learning paths for different tech roles
- **Coding Practice** - Role-based interview questions with hints and solutions

### 🎯 Career Tools
- **Resume Analyzer** - AI-powered resume analysis and improvement suggestions (planned)
- **Study Planner** - Create personalized study schedules

### 🎨 Modern UI/UX
- Clean, professional interface with dark mode support
- Responsive design for all devices
- Smooth animations and transitions
- Intuitive navigation

---

## 🚀 Quick Start

This application uses a **secure backend server** to protect the Gemini API key. You must run both the backend and frontend.

### Prerequisites
- Node.js 20.x or higher
- npm or yarn
- Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Preparation-Platform.git
   cd Preparation-Platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   **For Backend:**
   Create `.env.server` in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=3001
   GEMINI_MODEL=gemini-2.5-flash
   ```

   **For Frontend:**
   Create `.env` in the root directory:
   ```env
   VITE_API_URL=http://localhost:3001
   VITE_YOUTUBE_API_KEY=your_youtube_api_key (Optional for Video Feed)
   ```

4. **Start the Application**

   **Step 1: Start the Backend Server** (Open Terminal 1)
   ```bash
   npm run server
   ```
   *You should see: ✅ Backend server running on http://localhost:3001*

   **Step 2: Start the Frontend** (Open Terminal 2)
   ```bash
   npm run dev
   ```
   *The frontend will start on http://localhost:5173*

5. **Access the App**
   Open `http://localhost:5173` in your browser.

---

## 🏗️ Project Structure

```
Preparation-Platform/
├── public/
│   ├── PLACEMENT NOTES/        # PDF resources & Company Notes
│   └── knowledge_base.json     # AI knowledge base
├── server.js                   # Backend server (Express)
├── src/
│   ├── components/             # Reusable components
│   ├── data/                   # Static data & Roadmaps
│   ├── pages/                  # Page components
│   │   ├── CompanyNotes.jsx    # Company Placement Notes
│   │   ├── VideoFeed.jsx       # YouTube Video Feed
│   │   ├── JobTracker.jsx      # Job Application Tracker
│   │   ├── Home.jsx            # Dashboard
│   │   ├── Chat.jsx            # AI Assistant
│   │   └── ...
│   ├── utils/                  # Utility functions
│   ├── App.jsx                 # Main app component
│   └── main.jsx                # Entry point
├── .env.example                # Environment template
├── .env.server                 # Backend config (gitignored)
├── .env                        # Frontend config
├── package.json
└── vite.config.js
```

---

## 🎯 Key Features Breakdown

### 1. Secure AI Integration
- **Architecture**: Client-Server
- **Security**: Gemini API keys are stored server-side in `.env.server` and never exposed to the client.
- **Backend**: Express.js server proxies requests to Google Gemini.

### 2. Company Placement Notes
- **Features**:
  - Browse notes by company
  - View/Download PDF/DOCX materials
  - Search and filter companies
  - Favorites and Recently Viewed

### 3. Video Feed
- **Features**:
  - Search for educational content directly within the app
  - Powered by YouTube Data API (optional)
  - Distraction-free learning environment

### 5. Interview Practice & Mock Interviews
- **Features**:
   - Role-specific questions (Frontend, Backend, etc.)
   - Real-time AI feedback on your answers
   - Difficulty levels (Easy, Medium, Hard)

---

## 🛠️ Tech Stack

### Frontend
- **React 18**
- **Vite**
- **React Router 6**
- **Tailwind CSS / Vanilla CSS**

### Backend
- **Node.js**
- **Express.js**
- **Google Generative AI SDK**

### Data & Assets
- **PDF Parse** (for note processing)
- **Local Storage** (for user progress)

---

## 🌐 Deployment

For production, you need to deploy both the backend and frontend.

1. **Backend**: Deploy `server.js` to a Node.js host (e.g., Render, Railway, Heroku).
   - Set `GEMINI_API_KEY` and `GEMINI_MODEL` environment variables on the host.
2. **Frontend**: Deploy to a static host (e.g., Vercel, Netlify).
   - Set `VITE_API_URL` to your deployed backend URL (e.g., `https://my-backend.onrender.com`).
   - Run `npm run build` to generate the `dist` folder.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ⚡ Quick Commands

```bash
# Development
npm run server       # Start backend (Port 3001)
npm run dev          # Start frontend (Port 5173)

# Production
npm run build        # Build frontend
npm run preview      # Preview build
```
