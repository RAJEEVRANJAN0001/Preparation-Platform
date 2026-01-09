
import { masterDsaSheetData } from '../src/data/masterDsaSheetData.js';

let totalProblems = 0;
let missingVideos = 0;
const missingList = [];

masterDsaSheetData.forEach(topic => {
    topic.subtopics.forEach(sub => {
        sub.problems.forEach(prob => {
            totalProblems++;
            if (!prob.videoLink || prob.videoLink === '') {
                missingVideos++;
                missingList.push(prob.title);
            }
        });
    });
});

console.log(`Total Problems: ${totalProblems}`);
console.log(`Missing Videos: ${missingVideos}`);
console.log('--- Examples of missing ---');
console.log(missingList.slice(0, 10));
