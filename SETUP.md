# Running the Application

This application now uses a **secure backend server** to protect the Gemini API key.

## 🚀 Quick Start

### 1. Start the Backend Server

Open a terminal and run:

```bash
npm run server
```

You should see:
```
✅ Backend server running on http://localhost:3001
📡 API endpoints:
   - GET  /api/health
   - POST /api/chat
   - POST /api/interview/analyze
```

### 2. Start the Frontend

Open a **second terminal** and run:

```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

### 3. Access the Application

Open your browser and navigate to `http://localhost:5173`

---

## 📁 Environment Variables

### Backend (`.env.server`)
```env
GEMINI_API_KEY=your_api_key_here
PORT=3001
GEMINI_MODEL=gemini-2.5-flash
```

### Frontend (`.env`)
```env
VITE_API_URL=http://localhost:3001
VITE_YOUTUBE_API_KEY=your_youtube_key
```

> **Important:** The `.env.server` file contains your Gemini API key and is gitignored for security.

---

## 🔧 API Endpoints

### Health Check
```bash
GET http://localhost:3001/api/health
```

### Chat
```bash
POST http://localhost:3001/api/chat
Content-Type: application/json

{
  "message": "Your question here",
  "context": "Optional context"
}
```

### Interview Analysis
```bash
POST http://localhost:3001/api/interview/analyze
Content-Type: application/json

{
  "question": "Interview question",
  "answer": "Your answer",
  "difficulty": "Medium",
  "category": "Technical"
}
```

---

## 🔒 Security

✅ **API Key is now secure!**
- The Gemini API key is stored only on the backend server
- It is never exposed to the client-side code
- The `.env.server` file is gitignored

---

## 🐛 Troubleshooting

### Backend server won't start
- Make sure port 3001 is not in use
- Check that `.env.server` exists and contains `GEMINI_API_KEY`

### Frontend can't connect to backend
- Verify backend server is running on port 3001
- Check that `VITE_API_URL` in `.env` is set to `http://localhost:3001`

### AI Chat not working
- Open browser console (F12) to check for errors
- Verify backend server logs for API errors
- Make sure your Gemini API key is valid

---

## 📦 Production Deployment

For production, you'll need to:

1. Deploy the backend server separately (Heroku, Railway, Render, etc.)
2. Update `VITE_API_URL` in `.env` to your production backend URL
3. Set `GEMINI_API_KEY` in your production environment variables
4. Build the frontend: `npm run build`
5. Deploy the `dist` folder to a static hosting service

---

## 🎯 Features

- **AI Chat**: Get study help from Creata Mentor
- **Interview Practice**: Practice interview questions with AI feedback
- **Video Feed**: Search YouTube for learning videos
- **Notes**: Access your knowledge base
- **Quiz**: Test your knowledge
- **Roadmap**: View learning paths
- **Mobile Responsive**: Works on all devices with hamburger menu
