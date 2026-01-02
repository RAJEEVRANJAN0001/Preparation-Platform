
import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const striverPath = path.join(rootDir, 'src/data/striverSheetData.js');
const blind75Path = path.join(rootDir, 'src/data/blind75Data.js');
const targetPath = path.join(rootDir, 'src/data/dsaSheetData.js');

function extractProblems(fileContent) {
    const problems = [];
    const parts = fileContent.split(/"title":\s*"/);

    for (let i = 1; i < parts.length; i++) {
        const block = parts[i];
        const titleEnd = block.indexOf('"');
        if (titleEnd === -1) continue;

        const title = block.substring(0, titleEnd);
        const linkMatch = block.match(/"link":\s*"([^"]+)"/);
        const platformMatch = block.match(/"platform":\s*"([^"]+)"/);

        if (linkMatch && platformMatch) {
            const link = linkMatch[1];
            const platform = platformMatch[1];
            if (link !== "Problem Link" && link !== "" && link !== "null" && link !== "#" && !link.includes("Problem Link")) {
                problems.push({ title, link, platform });
            }
        }
    }
    return problems;
}

function normalize(str) {
    if (!str) return "";
    return str.toLowerCase()
        .replace(/&/g, 'and')
        .replace(/\+/g, 'plus')
        .replace(/[^\w\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .replace(/problem/g, '')
        .trim();
}

function jaccardSimilarity(str1, str2) {
    const s1 = normalize(str1);
    const s2 = normalize(str2);

    if (s1 === s2) return 1.0;
    if (s1.includes(s2) || s2.includes(s1)) return 0.95;

    const set1 = new Set(s1.split(' '));
    const set2 = new Set(s2.split(' '));
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
    return intersection.size / union.size;
}

const manualMap = {
    "merge 2 sorted array without xtra space": { link: "https://leetcode.com/problems/merge-sorted-array/", platform: "LeetCode" },
    "repeat and missing number": { link: "https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1", platform: "GeeksForGeeks" },
    "stock buy and sell": { link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", platform: "LeetCode" },
    "pow xn": { link: "https://leetcode.com/problems/powx-n/", platform: "LeetCode" },
    "container with most water": { link: "https://leetcode.com/problems/container-with-most-water/", platform: "LeetCode" },
    "sort array of 0s 1s and 2s": { link: "https://leetcode.com/problems/sort-colors/", platform: "LeetCode" },
    "search a 2d matrix": { link: "https://leetcode.com/problems/search-a-2d-matrix/", platform: "LeetCode" },
    "next permutation": { link: "https://leetcode.com/problems/next-permutation/", platform: "LeetCode" },
    "merge overlapping intervals": { link: "https://leetcode.com/problems/merge-intervals/", platform: "LeetCode" },
    "longest substring without repeating": { link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", platform: "LeetCode" },
    "set matrix zeroes": { link: "https://leetcode.com/problems/set-matrix-zeroes/", platform: "LeetCode" },
    "pascal's triangle": { link: "https://leetcode.com/problems/pascals-triangle/", platform: "LeetCode" },
    "longest consecutive sequence": { link: "https://leetcode.com/problems/longest-consecutive-sequence/", platform: "LeetCode" },
    "largest subarray with 0 sum": { link: "https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1", platform: "GeeksForGeeks" },
    "single number": { link: "https://leetcode.com/problems/single-number/", platform: "LeetCode" },
    "kadane's algorithm": { link: "https://leetcode.com/problems/maximum-subarray/", platform: "LeetCode" },
    "3sum": { link: "https://leetcode.com/problems/3sum/", platform: "LeetCode" },
    "4sum": { link: "https://leetcode.com/problems/4sum/", platform: "LeetCode" },
    "rotate matrix": { link: "https://leetcode.com/problems/rotate-image/", platform: "LeetCode" },
    "majority element": { link: "https://leetcode.com/problems/majority-element/", platform: "LeetCode" },
    "majority element n 2": { link: "https://leetcode.com/problems/majority-element/", platform: "LeetCode" },
    "majority element n 3": { link: "https://leetcode.com/problems/majority-element-ii/", platform: "LeetCode" },
    "grid unique paths": { link: "https://leetcode.com/problems/unique-paths/", platform: "LeetCode" },
    "reverse pairs": { link: "https://leetcode.com/problems/reverse-pairs/", platform: "LeetCode" },
    "count inversions": { link: "https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1", platform: "GeeksForGeeks" },
    "find duplicates in an array": { link: "https://leetcode.com/problems/find-the-duplicate-number/", platform: "LeetCode" },
};

try {
    const striverContent = fs.readFileSync(striverPath, 'utf8');
    const blind75Content = fs.readFileSync(blind75Path, 'utf8');
    const targetContent = fs.readFileSync(targetPath, 'utf8');

    const sourceProblems = [
        ...extractProblems(striverContent),
        ...extractProblems(blind75Content)
    ];

    console.log(`Loaded ${sourceProblems.length} source problems.`);

    let updatedContent = targetContent;
    let matchCount = 0;

    const targetRegex = /"title":\s*"([^"]+)"/g;
    let match;
    const matches = [];
    while ((match = targetRegex.exec(targetContent)) !== null) {
        matches.push({ title: match[1], index: match.index });
    }

    for (const m of matches) {
        const titleRaw = m.title;
        const normTitle = normalize(titleRaw);

        let bestMatch = null;
        let maxScore = 0;

        if (manualMap[normTitle]) {
            bestMatch = manualMap[normTitle];
            maxScore = 1.0;
        } else {
            for (const p of sourceProblems) {
                const score = jaccardSimilarity(titleRaw, p.title);
                if (score > maxScore) {
                    maxScore = score;
                    bestMatch = p;
                }
            }
        }

        if (bestMatch && maxScore > 0.3) {
            const escapedTitle = titleRaw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const blockRegex = new RegExp(`("title":\\s*"${escapedTitle}",\\s*[\\s\\S]{0,350}?"link":\\s*")Problem Link("[,]\\s*[\\s\\S]{0,100}?"platform":\\s*")Custom(")`, "g");

            if (blockRegex.test(updatedContent)) {
                updatedContent = updatedContent.replace(blockRegex, `$1${bestMatch.link}$2${bestMatch.platform}$3`);
                matchCount++;
            }
        }
    }

    console.log(`Updated ${matchCount} problems with real links.`);
    fs.writeFileSync(targetPath, updatedContent);

} catch (err) {
    console.error("Error:", err);
}
