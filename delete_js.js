const fs = require('fs');
const path = require('path');

function removeFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      removeFiles(fullPath);
    } else if (fullPath.endsWith('.js')) {
      try {
        fs.unlinkSync(fullPath);
        console.log(`Deleted: ${fullPath}`);
      } catch (err) {
        console.error(`Failed to delete: ${fullPath} - ${err.message}`);
      }
    }
  }
}

removeFiles('c:\\Users\\upsc\\Desktop\\NJ\\src');
console.log('Script finished.');
