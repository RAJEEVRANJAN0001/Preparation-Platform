
import XLSX from 'xlsx';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../public/PLACEMENT NOTES/DSA SHEET.xlsx');

try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    // Use header:1 to get raw array of arrays, which helps see all columns including those without headers
    const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    // Log the first 20 rows to understand structure
    console.log(JSON.stringify(data.slice(0, 20), null, 2));

    // Also log a few rows from the middle to see how topics transition
    console.log(JSON.stringify(data.slice(50, 60), null, 2));
} catch (error) {
    console.error("Error reading file:", error);
}
