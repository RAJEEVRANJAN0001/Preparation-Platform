const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const NOTES_DIR = path.join(process.cwd(), 'PLACEMENT NOTES');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'knowledge_base.json');

// Ensure public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

function getFiles(dir, fileList = []) {
    try {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const filePath = path.join(dir, file);
            if (fs.statSync(filePath).isDirectory()) {
                getFiles(filePath, fileList);
            } else {
                if (path.extname(file).toLowerCase() === '.pdf') {
                    fileList.push(filePath);
                }
            }
        });
    } catch (err) {
        console.error(`Error reading directory ${dir}:`, err.message);
    }
    return fileList;
}

async function extractText() {
    console.log('🔍 Scanning notes directory...');

    try {
        if (!fs.existsSync(NOTES_DIR)) {
            console.error(`❌ Directory not found: ${NOTES_DIR}`);
            fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2));
            return;
        }

        const pdfFiles = getFiles(NOTES_DIR);
        console.log(`📄 Found ${pdfFiles.length} PDF files.`);

        const knowledgeBase = [];

        for (const file of pdfFiles) {
            const fileName = path.basename(file);
            console.log(`Processing: ${fileName}`);

            try {
                const dataBuffer = fs.readFileSync(file);
                const data = await pdf(dataBuffer);

                // Clean text
                const cleanText = data.text.replace(/\s+/g, ' ').trim();

                // Chunk text
                const chunks = [];
                const chunkSize = 1500;
                for (let i = 0; i < cleanText.length; i += chunkSize) {
                    chunks.push(cleanText.substring(i, i + chunkSize));
                }

                knowledgeBase.push({
                    id: fileName,
                    title: fileName.replace('.pdf', ''),
                    fullPath: file,
                    contentChunks: chunks
                });

            } catch (err) {
                console.error(`Error processing ${fileName}:`, err.message);
                // Add file with empty content if parsing fails, so at least it's searchable by title
                knowledgeBase.push({
                    id: fileName,
                    title: fileName.replace('.pdf', ''),
                    fullPath: file,
                    contentChunks: []
                });
            }
        }

        fs.writeFileSync(OUTPUT_FILE, JSON.stringify(knowledgeBase, null, 2));
        console.log(`✅ Knowledge base successfully saved to ${OUTPUT_FILE}`);
        console.log(`📊 Total documents indexed: ${knowledgeBase.length}`);

    } catch (error) {
        console.error('Fatal error:', error);
    }
}

extractText();
