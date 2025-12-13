import { GoogleGenerativeAI } from '@google/generative-ai';

// Test script to verify Gemini 2.5 Flash integration
const API_KEY = 'AIzaSyBdQ1jygfSNnZOs43SosTHpfyuwoNb0-xE';
const MODEL_NAME = 'gemini-2.5-flash';

async function testGeminiIntegration() {
    console.log('🧪 Testing Gemini 2.5 Flash Integration...\n');

    try {
        // Initialize Gemini AI
        console.log('📡 Initializing Google Generative AI...');
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });
        console.log(`✅ Model initialized: ${MODEL_NAME}\n`);

        // Test 1: Simple question
        console.log('Test 1: Simple Technical Question');
        console.log('Question: "What are React hooks in simple terms?"\n');

        const result1 = await model.generateContent('What are React hooks in simple terms? Give a brief 2-3 sentence answer.');
        const response1 = result1.response.text();

        console.log('Response:');
        console.log(response1);
        console.log('\n' + '='.repeat(80) + '\n');

        // Test 2: Interview feedback simulation
        console.log('Test 2: Interview Feedback Simulation');
        const interviewPrompt = `You are an expert technical interviewer. Analyze this interview answer and provide detailed feedback.

Question: Explain the Virtual DOM in React and how it improves performance.
Difficulty: Medium
Category: Technical

Candidate's Answer:
The Virtual DOM is a lightweight copy of the actual DOM. React uses it to track changes and only update the parts of the real DOM that changed. This makes React faster because updating the real DOM is slow.

Provide feedback in this format:
1. **Strengths:** What the candidate did well
2. **Areas for Improvement:** What could be better
3. **Score:** Rate out of 10
4. **Suggestions:** Specific tips to improve the answer

Be constructive, encouraging, and specific.`;

        console.log('Analyzing interview answer...\n');
        const result2 = await model.generateContent(interviewPrompt);
        const response2 = result2.response.text();

        console.log('Feedback:');
        console.log(response2);
        console.log('\n' + '='.repeat(80) + '\n');

        // Test 3: Technical question generation
        console.log('Test 3: Technical Question Generation');
        const questionPrompt = `You are an experienced technical interviewer. The candidate has 3 years of experience and knows: React, JavaScript, Node.js.

Generate ONE specific technical question about React. The question should:
- Be appropriate for their experience level
- Test practical knowledge
- Be clear and concise
- Focus on real-world scenarios

Just provide the question, nothing else.`;

        console.log('Generating technical question...\n');
        const result3 = await model.generateContent(questionPrompt);
        const response3 = result3.response.text();

        console.log('Generated Question:');
        console.log(response3);
        console.log('\n' + '='.repeat(80) + '\n');

        console.log('✅ All tests passed successfully!');
        console.log('🎉 Gemini 2.5 Flash integration is working correctly!');

    } catch (error) {
        console.error('❌ Error during testing:');
        console.error(error.message);
        console.error('\nFull error:', error);
        process.exit(1);
    }
}

// Run the tests
testGeminiIntegration();
