
import XLSX from 'xlsx';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../public/PLACEMENT NOTES/DSA SHEET.xlsx');
const outputPath = path.join(__dirname, '../src/data/dsaSheetData.js');

try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    // Use header:1 to work with raw arrays by index
    const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    const topics = [];
    let currentTopic = null;

    // Process row by row
    rawData.forEach((row, index) => {
        // Skip empty rows
        if (!row || row.length === 0) return;

        const col0 = row[0]; // Topic
        const col3 = row[3]; // Title
        const col4 = row[4]; // Link
        const col5 = row[5]; // Difficulty
        const col6 = row[6]; // Solution Link
        const col7 = row[7]; // Companies

        // Filter out header rows or junk
        if (col3 === "Question" || col3 === "DSA Series by Shradha Ma'am" || col3 === "Link") return;
        if (!col3) return; // Must have a title

        // Check for new topic
        if (col0 && typeof col0 === 'string') {
            const potentialTopic = col0.trim();
            // Create new topic
            currentTopic = {
                title: potentialTopic,
                totalProblems: 0,
                subtopics: [{ title: "Problems", problems: [] }]
            };
            topics.push(currentTopic);
        }

        // If we have a valid problem title and we are in a topic
        if (currentTopic) {
            const problem = {
                title: col3,
                link: col4 || "#",
                platform: "Custom", // Default, will refine
                difficulty: col5 || "Medium",
                solutionLink: col6 || "#",
                companies: col7 ? col7.split(' ').filter(c => c.trim().length > 0) : [] // Split by space as seen in example "Amazon Google"
            };

            // Enhanced Platform Guesser
            if (problem.link.includes('leetcode.com')) problem.platform = 'LeetCode';
            else if (problem.link.includes('geeksforgeeks.org')) problem.platform = 'GeeksForGeeks';
            else if (problem.link.includes('codingninjas.com')) problem.platform = 'CodingNinjas';
            else if (problem.link.includes('youtube.com')) problem.platform = 'YouTube';

            currentTopic.subtopics[0].problems.push(problem);
            currentTopic.totalProblems++;
        }
    });

    const fileContent = `export const dsaSheetData = ${JSON.stringify(topics, null, 4)};`;

    fs.writeFileSync(outputPath, fileContent);
    console.log(`Successfully generated ${outputPath} with ${topics.length} topics.`);

    // Quick verification log
    topics.forEach(t => console.log(`Topic: ${t.title}, Problems: ${t.totalProblems}`));

} catch (error) {
    console.error("Error processing file:", error);
}
