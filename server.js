import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import path from 'path';
import { fileURLToPath } from 'url';
import { getAllCompanies, getCompanyFiles, searchFiles, getFilePath } from './api/companyNotesScanner.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: '.env.server' });

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve Company NOTES directory as static files
// Serve Company NOTES directory as static files
// app.use('/company-files', express.static(path.join(__dirname, 'Company NOTES')));

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

        const systemPrompt = `You are Creata Mentor, an AI assistant specialized in study and interview preparation. Your role is to help users with:

ALLOWED TOPICS:
- Technical skills and programming concepts (algorithms, data structures, system design, etc.)
- Interview preparation (coding interviews, behavioral questions, technical assessments)
- Career development (resume building, job search strategies, skill development)
- Learning resources and study strategies
- Course recommendations and educational content
- Technical problem-solving and debugging
- UI/UX issues, bugs, or technical problems within this application

STRICTLY PROHIBITED - DO NOT engage with:
- Celebrities, singers, actors, or entertainment figures
- Sports players, teams, or sports events
- General news or current events
- Personal advice unrelated to career/learning
- Off-topic entertainment or gossip
- Any content not directly related to education, career growth, or technical learning

INSTRUCTIONS:
- If a user asks about prohibited topics, politely decline and redirect them to study/interview preparation topics
- Keep responses concise, structured, and directly relevant to learning or career goals
- Maintain context awareness within the application flow
- For UI issues or bugs, acknowledge the problem, explain the likely cause, and provide clear technical guidance
- Be encouraging and supportive while staying focused on educational content

Context: ${context || ''}

User Question: ${message}`;

        const result = await model.generateContent(systemPrompt);
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

        const prompt = `You are an expert technical interviewer specializing in professional interview preparation. 

IMPORTANT: Only analyze questions related to:
- Technical interviews (coding, system design, algorithms, data structures)
- Behavioral interviews (leadership, teamwork, problem-solving)
- Professional career development
- Industry-specific technical knowledge

If the question is about celebrities, sports, entertainment, or other off-topic content, politely decline and explain this is for professional interview preparation only.

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

Be constructive, encouraging, and specific. Focus on professional interview skills.`;

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

// ============================================
// COMPANY NOTES API ENDPOINTS
// ============================================

// Get all companies
app.get('/api/company-notes', (req, res) => {
    try {
        const companies = getAllCompanies();
        res.json({ success: true, companies });
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch companies' });
    }
});

// Get files for a specific company
app.get('/api/company-notes/:companyName', (req, res) => {
    try {
        const { companyName } = req.params;
        const companyData = getCompanyFiles(companyName);

        if (!companyData) {
            return res.status(404).json({ success: false, error: 'Company not found' });
        }

        res.json({ success: true, data: companyData });
    } catch (error) {
        console.error('Error fetching company files:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch company files' });
    }
});

// Search files across all companies
app.get('/api/company-notes/search', (req, res) => {
    try {
        const { q } = req.query;

        if (!q) {
            return res.status(400).json({ success: false, error: 'Search query is required' });
        }

        const results = searchFiles(q);
        res.json({ success: true, results, count: results.length });
    } catch (error) {
        console.error('Error searching files:', error);
        res.status(500).json({ success: false, error: 'Failed to search files' });
    }
});

// Serve individual file using query parameter
app.get('/api/company-notes/file/:companyName', (req, res) => {
    try {
        const { companyName } = req.params;
        const { path: filePath } = req.query;

        if (!filePath) {
            return res.status(400).json({ success: false, error: 'File path is required' });
        }

        // Construct absolute path to the file in public/Company NOTES
        const fullPath = path.join(__dirname, 'public', 'Company NOTES', companyName, filePath);

        // Security check to prevent directory traversal
        if (!fullPath.startsWith(path.join(__dirname, 'public', 'Company NOTES'))) {
            return res.status(403).json({ success: false, error: 'Access denied' });
        }

        // Check if file exists (optional, res.sendFile handles it but good for debugging)
        // For now, let res.sendFile handle it or catch the error

        res.sendFile(fullPath, (err) => {
            if (err) {
                console.error('Error sending file:', fullPath, err);
                if (!res.headersSent) {
                    res.status(404).json({ success: false, error: 'File not found or unreadable' });
                }
            }
        });
    } catch (error) {
        console.error('Error serving file:', error);
        res.status(500).json({ success: false, error: 'Failed to serve file' });
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
        console.log(`   - GET  /api/company-notes`);
        console.log(`   - GET  /api/company-notes/:companyName`);
        console.log(`   - GET  /api/company-notes/search?q=query`);
        console.log(`   - GET  /api/company-notes/file/:companyName/*`);
    });
}

// Export the Express API
export default app;
