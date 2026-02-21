const fs = require('fs');
const path = require('path');

const fixRegexes = [
    { regex: /bg-white dark:bg-gray-950(\/\d+)? dark:bg-gray-950\1/g, replacement: (match, p1) => `bg-white${p1 || ''} dark:bg-gray-950${p1 || ''}` },
    { regex: /bg-gray-50(\/\d+)? dark:bg-gray-900\1 dark:bg-gray-900\1/g, replacement: (match, p1) => `bg-gray-50${p1 || ''} dark:bg-gray-900${p1 || ''}` },
    { regex: /border-gray-100(\/\d+)? dark:border-gray-800\1 dark:border-gray-800\1/g, replacement: (match, p1) => `border-gray-100${p1 || ''} dark:border-gray-800${p1 || ''}` },
    { regex: /bg-white dark:bg-gray-950(\/\d+) dark:bg-gray-950(\/\d+)/g, replacement: (match, p1, p2) => `bg-white${p1} dark:bg-gray-950${p2}` },
    { regex: /bg-gray-50 dark:bg-gray-900(\/\d+) dark:bg-gray-900(\/\d+)/g, replacement: (match, p1, p2) => `bg-gray-50${p1} dark:bg-gray-900${p2}` },
    { regex: /border-gray-100 dark:border-gray-800(\/\d+) dark:border-gray-800(\/\d+)/g, replacement: (match, p1, p2) => `border-gray-100${p1} dark:border-gray-800${p2}` }
];

function processDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) return;
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            for (const { regex, replacement } of fixRegexes) {
                content = content.replace(regex, replacement);
            }

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Fixed duplication in: ${fullPath}`);
            }
        }
    }
}

const targetDirs = [
    path.join(__dirname, 'src/components'),
    path.join(__dirname, 'src/app')
];

for (const dir of targetDirs) {
    processDirectory(dir);
}
console.log('Finished fixing duplicated classes.');
