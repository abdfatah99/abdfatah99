const fs = require("fs");
const path = require("path");

// Function to recursively read all files in a directory
function readAllFiles(dir) {
  fs.readdirSync(dir).forEach((file) => {
    let filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      // If the item is a directory, recursively read its contents
      readAllFiles(filePath);
    } else {
      console.log(`Reading file: ${filePath}`);
      // If the item is a file, read its contents and log it to console
      fs.readFileSync(filePath, "utf8", (err, data) => {
        if (err) throw err;
        console.log(`File content: ${data}`);
      });
    }
  });
}

// Function to recursively list all directories in a directory
function listAllDirectories(dir) {
  fs.readdirSync(dir).forEach((file) => {
    let filePath = path.join(dir, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      // If the item is a directory, log its name to console and recursively list its contents
      console.log(`Directory: ${filePath}`);
      listAllDirectories(filePath);
    } else {
      // If the item is not a directory, do nothing
      return;
    }
  });
}

// function listAllDirectories(dir) {
//   fs.readdirSync(dir).forEach((file) => {
//     let filePath = path.join(dir, file);
//     if (fs.lstatSync(filePath).isDirectory()) {
//       // If the item is a directory, log its name to console
//       console.log(`${filePath}`);
//     } else {
//       // If the item is not a directory, do nothing
//       return;
//     }
//   });
// }

// Read all files in the current directory
// readAllFiles('./');

listAllDirectories("./");
