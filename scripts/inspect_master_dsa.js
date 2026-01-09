
import XLSX from 'xlsx';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const filePath = '/Users/rajeevranjanpratapsingh/Downloads/untitled folder/Master DSA using GFG and Leetcode.xlsx';

try {
    const workbook = XLSX.readFile(filePath);
    const sheetNames = workbook.SheetNames;

    console.log('Sheet Names:', sheetNames);


    const sheet = workbook.Sheets['Sheet1']; // Focusing on Sheet1
    const range = XLSX.utils.decode_range(sheet['!ref']);

    console.log('Inspecting Sheet1 for hyperlinks...');

    for (let R = range.s.r; R <= range.e.r; ++R) {
        const cellAddress = { c: 1, r: R }; // Column B (Problem Name)
        const cellRef = XLSX.utils.encode_cell(cellAddress);
        const cell = sheet[cellRef];

        if (cell && cell.v === "Print all Divisors of a number") {
            console.log(`Found row ${R} with 'Print all Divisors of a number'`);

            // Check Column C (Link)
            const linkAddress = { c: 2, r: R };
            const linkRef = XLSX.utils.encode_cell(linkAddress);
            const linkCell = sheet[linkRef];

            console.log('Column C Cell:', linkCell);
            if (linkCell && linkCell.l) {
                console.log('Hyperlink found:', linkCell.l);
            } else {
                console.log('No hyperlink object found in Col C. Value:', linkCell ? linkCell.v : 'null');
            }

            // Check Column D (Video Link)
            const videoAddress = { c: 3, r: R };
            const videoRef = XLSX.utils.encode_cell(videoAddress);
            const videoCell = sheet[videoRef];
            console.log('Column D Cell (Video):', videoCell);
            if (videoCell && videoCell.l) {
                console.log('Hyperlink found in Video:', videoCell.l);
            }
        }
    }


} catch (error) {
    console.error('Error reading file:', error);
}
