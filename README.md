# 🎓 Creata Mentor - Placement Preparation Platform

A comprehensive, AI-powered placement preparation platform designed to help students ace their technical interviews and land their dream jobs. Built with React, Vite, and powered by Google's Gemini 2.5 Flash AI.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?logo=vite)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## ✨ Features

### 🤖 AI-Powered Learning
- **AI Chat Assistant** - Get instant answers to technical questions with context-aware responses
- **Interview Practice** - Receive detailed AI feedback on your interview answers with structured analysis
- **Mock Interviews** - AI-generated technical questions tailored to your experience and tech stack

### 📚 Comprehensive Resources
- **Knowledge Base** - 52+ PDF notes covering DSA, System Design, DBMS, OS, Networks, and more
- **Interactive Quizzes** - 50+ quizzes to test your knowledge across multiple topics
- **Learning Roadmaps** - Structured learning paths for different tech roles
- **Coding Practice** - Role-based interview questions with hints and solutions

### 🎯 Career Tools
- **Job Tracker** - Manage job applications with status tracking
- **Resume Analyzer** - AI-powered resume analysis and improvement suggestions
- **Study Planner** - Create personalized study schedules

### 🎨 Modern UI/UX
- Clean, professional interface with dark mode support
- Responsive design for all devices
- Smooth animations and transitions
- Intuitive navigation

---

## 🚀 Quick Start

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
```bash
cp .env.example .env
```

Edit `.env` and add your Gemini API key:
```env
VITE_GEMINI_API_KEY=your_api_key_here
VITE_GEMINI_MODEL=gemini-2.5-flash
```

4. **Start the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:5173`

---

## 🏗️ Project Structure

```
Preparation-Platform/
├── public/
│   ├── PLACEMENT NOTES/        # 52+ PDF resources
│   └── knowledge_base.json     # AI knowledge base
├── src/
│   ├── components/             # Reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── PageHeader.jsx
│   │   └── ...
│   ├── data/                   # Static data
│   │   ├── quizData.js
│   │   ├── topicsData.js
│   │   └── ...
│   ├── pages/                  # Page components
│   │   ├── Home.jsx            # Dashboard
│   │   ├── Chat.jsx            # AI Assistant
│   │   ├── Interview.jsx       # Interview Practice
│   │   ├── Notes.jsx           # PDF Resources
│   │   ├── Quiz.jsx            # Interactive Quizzes
│   │   ├── Roadmap.jsx         # Learning Paths
│   │   └── ...
│   ├── utils/                  # Utility functions
│   │   └── interviewManager.js # Mock interview logic
│   ├── App.jsx                 # Main app component
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── .env.example                # Environment template
├── package.json
├── vite.config.js
└── vercel.json                 # Vercel deployment config
```

---

## 🎯 Key Features Breakdown

### 1. AI Chat Assistant
- **Technology**: Google Gemini 2.5 Flash
- **Features**:
  - Context-aware responses
  - Knowledge base integration
  - Voice input support
  - Text-to-speech output
  - Markdown formatting

### 2. Interview Practice
- **5 Role Categories**:
  - Frontend Developer
  - Backend Developer
  - Full Stack Developer
  - Data Analyst
  - DevOps Engineer
- **Features**:
  - 25+ curated questions
  - Difficulty levels (Easy, Medium, Hard)
  - AI-powered feedback with:
    - Strengths analysis
    - Areas for improvement
    - Score out of 10
    - Specific suggestions
  - Progress tracking

### 3. Mock Interview System
- **Conversational Flow**:
  - Candidate information collection
  - Tech stack assessment
  - Dynamic question generation
  - Real-time feedback
- **AI-Generated Questions** based on:
  - Experience level
  - Technology stack
  - Previous answers

### 4. Knowledge Base
- **52+ PDF Resources** covering:
  - Data Structures & Algorithms
  - System Design
  - Database Management
  - Operating Systems
  - Computer Networks
  - Cloud Computing
  - And more...
- **Features**:
  - In-browser PDF viewing
  - Download capability
  - Search and filter

### 5. Interactive Quizzes
- **50+ Quizzes** across multiple topics
- **Features**:
  - Multiple choice questions
  - Instant feedback
  - Score tracking
  - Detailed explanations

---

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite 5.4.2** - Build tool
- **React Router 6.26.0** - Routing
- **React Markdown 10.1.0** - Markdown rendering
- **Lucide React** - Icon library

### AI Integration
- **Google Generative AI 0.24.1** - Gemini API client
- **Model**: gemini-2.5-flash

### Styling
- **Vanilla CSS** - Custom styling
- **CSS Variables** - Theme management
- **Responsive Design** - Mobile-first approach

---

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Import to Vercel**
- Go to [Vercel](https://vercel.com)
- Click "Import Project"
- Select your repository

3. **Configure Environment Variables**
In Vercel dashboard → Settings → Environment Variables:
```
VITE_GEMINI_API_KEY = your_api_key_here
VITE_GEMINI_MODEL = gemini-2.5-flash
```

4. **Deploy**
- Click "Deploy"
- Wait for build to complete
- Your app is live! 🎉

### Build for Production
```bash
npm run build
```

The optimized build will be in the `dist/` directory.

---

## 📝 Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_GEMINI_API_KEY` | Google Gemini API key | Yes | - |
| `VITE_GEMINI_MODEL` | Gemini model name | No | `gemini-2.5-flash` |

> **Note**: All environment variables must be prefixed with `VITE_` to be accessible in the client-side code.

---

## 🎨 Customization

### Theme
The app supports light and dark modes. Theme colors are defined in `src/index.css` using CSS variables:

```css
:root {
  --primary: #3b82f6;
  --bg-main: #ffffff;
  --text-main: #1f2937;
  /* ... */
}

[data-theme="dark"] {
  --bg-main: #0f172a;
  --text-main: #f1f5f9;
  /* ... */
}
```

### Adding New Features
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in relevant components
4. Add styling in component's CSS file

---

## 🧪 Testing

### Manual Testing
```bash
npm run dev
```

Test the following features:
- ✅ AI Chat responses
- ✅ Interview feedback generation
- ✅ Mock interview flow
- ✅ Quiz functionality
- ✅ PDF viewing
- ✅ Navigation

### Build Testing
```bash
npm run build
npm run preview
```

---

## 📊 Performance

- **Build Size**: ~562 KB (gzipped: ~176 KB)
- **First Load**: < 2s
- **AI Response Time**: ~5s average
- **Lighthouse Score**: 90+

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Google Gemini AI** - For powering the AI features
- **Lucide Icons** - For beautiful icons
- **React Community** - For amazing tools and libraries
- **Vercel** - For seamless deployment

---

## 📞 Support

For support, email rajeevranjanpratapsinghj94@gmail.com or open an issue in the GitHub repository.

---

## 🗺️ Roadmap

- [ ] Add more interview questions
- [ ] Implement user authentication
- [ ] Add progress analytics dashboard
- [ ] Create mobile app version
- [ ] Add collaborative study rooms
- [ ] Integrate video interview practice
- [ ] Add company-specific interview prep

---



## ⚡ Quick Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Deployment
git push origin main # Auto-deploy to Vercel (if configured)
```

---

<div align="center">

**Built with ❤️ for aspiring developers**

[⭐ Star this repo](https://github.com/yourusername/Preparation-Platform) | [🐛 Report Bug](https://github.com/yourusername/Preparation-Platform/issues) | [✨ Request Feature](https://github.com/yourusername/Preparation-Platform/issues)

</div>
