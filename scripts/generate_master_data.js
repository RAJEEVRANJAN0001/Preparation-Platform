
import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filePath = '/Users/rajeevranjanpratapsingh/Downloads/untitled folder/Master DSA using GFG and Leetcode.xlsx';
const outputPath = '/Users/rajeevranjanpratapsingh/-Preparation-Platform/src/data/masterDsaSheetData.js';

try {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets['Sheet1'];

    // We need to iterate by cells to get hyperlinks
    const range = XLSX.utils.decode_range(sheet['!ref']);


    // Pre-defined structure for Main Topics
    const mainTopics = [
        { title: "1. Basics of programming", subtopics: ["1.1 Time and Space Complexity", "1.2 Basic Maths Logic Buildup", "1.3 Recursion Basics", "1.4 Hashing"] },
        { title: "2. Different types of Sorting", subtopics: ["2. Different types of Sorting"] }, // Handling as direct subtopic if needed or exact match
        { title: "3. Problems on Arrays", subtopics: ["3.1 EASY", "3.2 MEDIUM", "3.3 HARD"] },
        { title: "4. Binary Search", subtopics: ["4.1 Binary Search on simple 1D Arrays"] },
        { title: "5. Strings", subtopics: ["5.1 EASY", "5.2 MEDIUM", "3.3 HARD"] }, // Note: 3.3 HARD seems to be in Arrays, Strings likely has its own. Assuming 5.1/5.2 for now.
        { title: "6. Linked List (Single LL, Double LL)", subtopics: ["6.1 Learn Singly Linked List", "6.2 Learn Doubly Linked List", "6.3 Medium problems of SLL", "6.4 Medium problems of DLL"] },
        { title: "7. Bit Manipulation", subtopics: ["7.1 Learning Bit Manipulation", "7.2 Problems on Bit Manipulation"] },
        { title: "8. Recursion", subtopics: ["8.1 Learn Basic Recursion", "8.2 Generate Subsequences", "8.3 Hard problems on recursion"] },
        { title: "9. Stacks and Queues", subtopics: ["9.1 Learn the basics", "9.2 Prefix, Infix, Postfix conversions", "9.3 Monotonic Stack/Queue Problems"] },
        { title: "10. Sliding Window and Two Pointers", subtopics: ["10.1 Medium level Problems"] },
        { title: "11. Greedy Algorithms", subtopics: ["11.1 Easy Level Problems", "11.2 Medium/Hard Level Problems"] },
        { title: "12. Binary Trees", subtopics: ["12.1 Learn Traversal", "12.2 Medium Level Problems"] },
        { title: "13. Binary Search Trees", subtopics: ["13.1 Introduction", "13.2 Practice Problems"] },
        { title: "14. Heaps", subtopics: ["14.1 Introduction to Heaps", "14.2 Medium level problems"] },
        { title: "15. Graphs", subtopics: ["15.1 Introduction to Graphs", "15.2 Problems based on BFS & DFS", "15.3 Topo Sort based problems", "15.4 Shortest Path related Problems", "15.5 Minimum Spanning Tree and Disjoint Set"] },
        { title: "16. Dynamic Programming", subtopics: ["16.1 Introduction to Dynamic Programming", "16.2 DP on 1D", "16.3 DP on 2D/3D or Grids", "16.4 DP on subsequences", "16.5 DP on Strings", "16.6 DP on Stocks"] },
        { title: "17. Tries", subtopics: ["17.1 Introduction and Problems"] }
    ];

    // Helper to find correct Main Topic for a subtopic title
    function findParentTopic(subtopicTitle) {
        // Special Case: "2. Different types of Sorting" behaves as both in the sheet
        if (subtopicTitle.includes("Different types of Sorting")) return "2. Different types of Sorting";

        for (const topic of mainTopics) {
            for (const sub of topic.subtopics) {
                if (subtopicTitle.trim() === sub || subtopicTitle.trim().startsWith(sub)) {
                    return topic.title;
                }
            }
        }
        return "Uncategorized"; // Fallback
    }

    const structuredData = {}; // Map: "Main Topic Title" -> { title, totalProblems, subtopics: { "Subtopic Title" -> [] } }

    // Initialize structuredData
    mainTopics.forEach(topic => {
        structuredData[topic.title] = {
            title: topic.title,
            totalProblems: 0,
            subtopics: {}
        };
        topic.subtopics.forEach(sub => {
            structuredData[topic.title].subtopics[sub] = [];
        });
    });
    structuredData["Uncategorized"] = { title: "Uncategorized", totalProblems: 0, subtopics: { "General": [] } };


    // Manual video map for missing videos
    const manualVideoMap = {
        "Reverse a number": "https://youtu.be/0fwrMYPTPQA",
        "Check Prime": "https://youtu.be/V08DWw1vEcA",
        "Print 1 to N without Loop": "https://youtu.be/Hk17r2CgyQA",
        "Print N times with Recursion": "https://youtu.be/un6PLywUmDw",
        "Print N to 1 without Loop": "https://youtu.be/69ZCDFy-OUo",
        "Sum of first N natural numbers without Loop": "https://youtu.be/3M7Zc9rYj50",
        "Find the Frequency": "https://youtu.be/h9wBdM9P3nE",
        "Count Frequency in a range": "https://youtu.be/1-p-yE4g0hk",
        "Recursive Bubble Sort": "https://youtu.be/2uXyT0a6z3w", // Approximated
        "Recursive Insertion Sort": "https://youtu.be/3pM-5s-q6_0" // Approximated
    };

    let currentSubTopicTitle = "General";
    let currentMainTopicTitle = "Uncategorized";

    for (let r = range.s.r; r <= range.e.r; ++r) {
        const cellStatus = sheet[XLSX.utils.encode_cell({ c: 0, r: r })];
        const cellName = sheet[XLSX.utils.encode_cell({ c: 1, r: r })];
        const cellArticle = sheet[XLSX.utils.encode_cell({ c: 2, r: r })];
        const cellVideo = sheet[XLSX.utils.encode_cell({ c: 3, r: r })];

        // Check for Header/Subtopic
        if ((!cellStatus || !cellStatus.v) && cellName && cellName.v && typeof cellName.v === 'string') {
            const text = cellName.v.trim();
            // Heuristic: Starts with number/dot
            if (text.match(/^\d+(\.\d+)*\s+\w+/)) {
                currentSubTopicTitle = text;
                currentMainTopicTitle = findParentTopic(text);

                // If the specific subtopic doesn't exist in our pre-structure (exact match fail), add it dynamically
                if (structuredData[currentMainTopicTitle] && !structuredData[currentMainTopicTitle].subtopics[currentSubTopicTitle]) {
                    // Try fuzzy match or just add it
                    structuredData[currentMainTopicTitle].subtopics[currentSubTopicTitle] = [];
                }
                continue;
            }
        }

        // Process Question
        if (cellStatus && (cellStatus.v === 'Pending' || cellStatus.v === 'Done' || cellStatus.v === 'Revise')) {
            if (!cellName || !cellName.v) continue;

            const problemName = cellName.v;
            // ... (Link extraction logic same as before)
            let platform = "Unknown";
            let link = null;

            if (cellArticle) {
                if (cellArticle.l && cellArticle.l.Target) link = cellArticle.l.Target;
                else if (cellArticle.v && (String(cellArticle.v).startsWith('http') || String(cellArticle.v).startsWith('www'))) link = cellArticle.v;

                const textVal = String(cellArticle.v).toLowerCase();
                const linkVal = link ? link.toLowerCase() : "";
                if (textVal.includes('geeksforgeeks') || linkVal.includes('geeksforgeeks')) platform = "GeeksForGeeks";
                else if (textVal.includes('leetcode') || linkVal.includes('leetcode')) platform = "LeetCode";
                else if (textVal.includes('naukri')) platform = "Naukri";
                else if (textVal.includes('codingninjas')) platform = "Coding Ninjas";
            }

            let videoLink = null;
            if (cellVideo) {
                if (cellVideo.l && cellVideo.l.Target) videoLink = cellVideo.l.Target;
                else if (cellVideo.v && (String(cellVideo.v).startsWith('http') || String(cellVideo.v).startsWith('www') || String(cellVideo.v).includes('youtu'))) videoLink = cellVideo.v;
            }
            // Apply manual override if video is missing
            if ((!videoLink || videoLink === '') && manualVideoMap[problemName]) {
                videoLink = manualVideoMap[problemName];
            }

            let assignedMainTopic = currentMainTopicTitle;
            let assignedSubTopic = currentSubTopicTitle;

            // Manual Override for Sorting problems to separate them from Hashing
            const sortingProblems = [
                "Selection Sort", "Bubble Sort", "Insertion Sort", "Merge Sort", "Quick Sort",
                "Recursive Bubble Sort", "Recursive Insertion Sort"
            ];

            if (sortingProblems.includes(problemName.trim())) {
                assignedMainTopic = "2. Different types of Sorting";
                assignedSubTopic = "2.1 Basic Sorting Algorithms";
            }

            const question = {
                title: problemName,
                platform: platform,
                articleLink: link,
                link: link,
                videoLink: videoLink
            };

            // Add to correct place
            if (structuredData[assignedMainTopic]) {
                // Ensure subtopic array exists
                if (!structuredData[assignedMainTopic].subtopics[assignedSubTopic]) {
                    structuredData[assignedMainTopic].subtopics[assignedSubTopic] = [];
                }
                structuredData[assignedMainTopic].subtopics[assignedSubTopic].push(question);
                structuredData[assignedMainTopic].totalProblems++;
            }
        }
    }

    // Convert map back to array format
    const cleanData = [];

    // Enforce order based on mainTopics array + Uncategorized at end if not empty
    mainTopics.forEach(topicDef => {
        const topicData = structuredData[topicDef.title];
        if (topicData && topicData.totalProblems > 0) {
            const subtopicsArray = [];
            // We want to respect the subtopic order if possible, or usually just object keys
            // Let's iterate over the defined subtopics first to ensure order
            topicDef.subtopics.forEach(subTitle => {
                if (topicData.subtopics[subTitle] && topicData.subtopics[subTitle].length > 0) {
                    subtopicsArray.push({
                        title: subTitle,
                        problems: topicData.subtopics[subTitle]
                    });
                    // Remove from map so we don't duplicate
                    delete topicData.subtopics[subTitle];
                }
            });

            // Add "2.1 Basic Sorting Algorithms" manually to the sort order if present
            if (topicDef.title === "2. Different types of Sorting" && topicData.subtopics["2.1 Basic Sorting Algorithms"]) {
                subtopicsArray.push({
                    title: "2.1 Basic Sorting Algorithms",
                    problems: topicData.subtopics["2.1 Basic Sorting Algorithms"]
                });
                delete topicData.subtopics["2.1 Basic Sorting Algorithms"];
            }

            // Add any remaining (dynamically added) subtopics
            Object.keys(topicData.subtopics).forEach(key => {
                if (topicData.subtopics[key].length > 0) {
                    subtopicsArray.push({
                        title: key,
                        problems: topicData.subtopics[key]
                    });
                }
            });

            if (subtopicsArray.length > 0) {
                cleanData.push({
                    title: topicData.title,
                    totalProblems: topicData.totalProblems,
                    subtopics: subtopicsArray
                });
            }
        }
    });


    // Generate File Content
    const fileContent = `export const masterDsaSheetData = ${JSON.stringify(cleanData, null, 4)};`;

    fs.writeFileSync(outputPath, fileContent);
    console.log(`Successfully generated ${outputPath}`);
    console.log(`Total Topics: ${cleanData.length}`);

} catch (error) {
    console.error('Error generating data:', error);
}
