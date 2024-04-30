const fs = require('fs');

// Function to write content to a file
function writeToFile(fileName, data) {
  // Use the 'writeFile' method for writing
  fs.writeFile(fileName, data, 'utf-8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Successfully wrote content to ${fileName}`);
    }
  });
}

const contentToWrite = "This is the content to be written to a.txt\n";

// Call the writeToFile function to write the content
writeToFile('a.txt', contentToWrite);