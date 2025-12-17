import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

// Load environment variables
dotenv.config({ path: '.env.server' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Gemini AI
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error('ERROR: GEMINI_API_KEY is not set in .env.server');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Backend server is running' });
});

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message, context } = req.body;

        if (!message) {
            return res.status(400).json({ error: 'Message is required' });
        }

        // Use model from environment variable (Vercel) or default
        const modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
        const model = genAI.getGenerativeModel({ model: modelName });
        const prompt = `System: Helpful Technical Mentor. Context: ${context || ''}. User: ${message}`;

        const result = await model.generateContent(prompt);
        const text = result.response.text();

        res.json({ response: text });
    } catch (error) {
        console.error('Chat API Error:', error);

        // Better error messages for quota issues
        let errorMessage = 'Error processing chat request';
        if (error.message && error.message.includes('quota')) {
            errorMessage = 'API quota exceeded. Please try again in a few moments or use a different API key.';
        } else if (error.message && error.message.includes('API key')) {
            errorMessage = 'Invalid API key. Please check your API key configuration.';
        }

        res.status(500).json({
            error: errorMessage,
            details: error.message
        });
    }
});

// Interview analysis endpoint
app.post('/api/interview/analyze', async (req, res) => {
    try {
        const { question, answer, difficulty, category } = req.body;

        if (!question || !answer) {
            return res.status(400).json({ error: 'Question and answer are required' });
        }

        // Use model from environment variable (Vercel) or default
        const modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
        const model = genAI.getGenerativeModel({ model: modelName });

        const prompt = `You are an expert technical interviewer. Analyze this interview answer and provide detailed feedback.

Question: ${question}
Difficulty: ${difficulty}
Category: ${category}

Candidate's Answer:
${answer}

Provide feedback in this format:
1. **Strengths:** What the candidate did well
2. **Areas for Improvement:** What could be better
3. **Score:** Rate out of 10
4. **Suggestions:** Specific tips to improve the answer

Be constructive, encouraging, and specific.`;

        const result = await model.generateContent(prompt);
        const feedbackText = result.response.text();

        res.json({ feedback: feedbackText });
    } catch (error) {
        console.error('Interview Analysis Error:', error);

        // Better error messages for quota issues
        let errorMessage = 'Error analyzing interview answer';
        if (error.message && error.message.includes('quota')) {
            errorMessage = 'API quota exceeded. Please try again in a few moments or use a different API key.';
        } else if (error.message && error.message.includes('API key')) {
            errorMessage = 'Invalid API key. Please check your API key configuration.';
        }

        res.status(500).json({
            error: errorMessage,
            details: error.message
        });
    }
});

// Start server if not running in Vercel (or similar serverless environment)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`✅ Backend server running on http://localhost:${PORT}`);
        console.log(`📡 API endpoints:`);
        console.log(`   - GET  /api/health`);
        console.log(`   - POST /api/chat`);
        console.log(`   - POST /api/interview/analyze`);
    });
}

// Export the Express API
export default app;
