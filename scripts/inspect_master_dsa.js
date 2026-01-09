
import XLSX from 'xlsx';

const filePath = '/Users/rajeevranjanpratapsingh/Downloads/untitled folder/Master DSA using GFG and Leetcode.xlsx';

try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = 'Sheet1';
    const sheet = workbook.Sheets[sheetName];

    if (!sheet) {
        console.log('Sheet1 not found');
    } else {
        console.log(`\n--- Inspecting Column E (Articles) ---`);
        for (let r = 7; r < 20; r++) { // Start from row 7 where data usually is
            const cellRef = XLSX.utils.encode_cell({ c: 4, r: r }); // Col E
            const cell = sheet[cellRef];
            if (cell) {
                console.log(`Row ${r}: Text='${cell.v}'`);
                if (cell.l) {
                    console.log(`   Hyperlink Target: ${cell.l.Target}`);
                } else {
                    console.log(`   No Hyperlink object`);
                }
            }
        }
    }

} catch (error) {
    console.error('Error reading file:', error);
}
