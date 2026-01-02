
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to handle __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataFilePath = path.join(__dirname, '../src/data/striverSheetData.js');

async function populatePlaceholders() {
    try {
        // Dynamic import to read the data file
        const { striverSheetData } = await import(dataFilePath);

        let updated = false;

        const updatedData = striverSheetData.map(topic => {
            return {
                ...topic,
                subtopics: topic.subtopics.map(subtopic => {
                    return {
                        ...subtopic,
                        problems: subtopic.problems.map(problem => {
                            // If problem already has content or articleLink, skip
                            if (problem.content || problem.articleLink) {
                                return problem;
                            }

                            // Add placeholder content
                            updated = true;
                            return {
                                ...problem,
                                content: {
                                    description: `Solution for ${problem.title}. Logic and implementation details coming soon.`,
                                    code: {
                                        cpp: `// C++ Solution for ${problem.title}\n// This solution is currently being prepared.\n\nvoid solve() {\n    // TODO: Implement solution\n}`,
                                        java: `// Java Solution for ${problem.title}\n// This solution is currently being prepared.\n\nclass Solution {\n    public void solve() {\n        // TODO: Implement solution\n    }\n}`,
                                        python: `# Python Solution for ${problem.title}\n# This solution is currently being prepared.\n\ndef solve():\n    # TODO: Implement solution\n    pass`
                                    }
                                }
                            };
                        })
                    };
                })
            };
        });

        if (updated) {
            // Write back to file
            const fileContent = `export const striverSheetData = ${JSON.stringify(updatedData, null, 4)};\n`;
            fs.writeFileSync(dataFilePath, fileContent, 'utf8');
            console.log('Successfully added placeholder solutions to all problems.');
        } else {
            console.log('No updates needed.');
        }

    } catch (error) {
        console.error('Error updating placeholder solutions:', error);
    }
}

populatePlaceholders();
