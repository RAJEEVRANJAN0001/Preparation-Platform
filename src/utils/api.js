/**
 * Analyzes an interview answer using the backend API.
 * @param {string} question - The interview question.
 * @param {string} answer - The user's answer.
 * @param {string} role - The job role (context).
 * @param {string} difficulty - The difficulty level (default: 'Intermediate').
 * @returns {Promise<string>} - The feedback from the AI.
 */
export const analyzeAnswer = async (question, answer, role, difficulty = 'Intermediate') => {
    try {
        const response = await fetch('/api/interview/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                question,
                answer,
                category: role,
                difficulty
            }),
        });

        // Check if response is ok
        if (!response.ok) {
            // Try to parse error as JSON, fallback to text
            let errorMessage = 'Failed to analyze answer';
            try {
                const errorData = await response.json();
                errorMessage = errorData.error || errorMessage;
            } catch (e) {
                // If JSON parsing fails, try to get text
                const errorText = await response.text();
                errorMessage = errorText || `Server error (${response.status})`;
            }
            throw new Error(errorMessage);
        }

        // Parse successful response
        const data = await response.json();
        return data.feedback;
    } catch (error) {
        console.error('Error analyzing answer:', error);

        // Provide more helpful error messages
        if (error.message.includes('fetch')) {
            throw new Error('Cannot connect to server. Please ensure the backend server is running on port 3001.');
        }
        throw error;
    }
};
