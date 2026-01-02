
import { quizData } from './src/data/quizData.js';

try {
    const topics = Object.keys(quizData);
    console.log(`Successfully loaded quizData. Found ${topics.length} topics.`);
    topics.forEach(topic => {
        console.log(`Topic: ${topic}, Questions: ${quizData[topic].length}`);
    });
    console.log("Validation Successful.");
} catch (e) {
    console.error("Validation Failed:", e);
    process.exit(1);
}
