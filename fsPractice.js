const fs = require('fs');

// Create a new file using the appendFile() method:

// The fs.appendFile() method appends specified content to a file.
// If the file does not exist, the file will be created:

fs.appendFile('mynewfile1.txt', 'Hello content!', (err) => {
  if (err) throw (err);
  console.log('Saved!');
});


// Create a new, empty file using the open() method:

// The fs.open() method takes a "flag" as the second argument, 
// if the flag is "w" for "writing", the specified file is opened 
// for writing. If the file does not exist, an empty file is created:

fs.open('mynewfile2.txt', 'w', (err, file) => {
  if (err) throw (err);
  console.log('Saved!');
});


// Create a new file using the writeFile() method:

// The fs.writeFile() method replaces the specified file and content
// if it exists. If the file does not exist, a new file, containing the
// specified content, will be created:

fs.writeFile('mynewfile3.txt', 'Hello content!', (err) => {
  if (err) throw err;
  console.log('Saved!');
});


// Append "This is my text." to the end of the file "mynewfile1.txt":

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});


// The fs.writeFile() method replaces the specified file and content:
// Replace the content of the file "mynewfile3.txt":

fs.writeFile('mynewfile3.txt', 'This is my text', (err) => {
  if (err) throw err;
  console.log('Replaced!');
});


// To delete a file with the File System module,  use the fs.unlink() method.
// The fs.unlink() method deletes the specified file:
// Delete "mynewfile2.txt":

fs.unlink('mynewfile2.txt', (err) => {
  if (err) throw err;
  console.log('File deleted!');
});


// To rename a file with the File System module,  use the fs.rename() method.
// The fs.rename() method renames the specified file:
// Rename "mynewfile1.txt" to "myrenamedfile.txt":

fs.rename('mynewfil1.txr', 'myrenamedfile.txt', (err) => {
  if (err) throw err;
  console.log('File Renamed!');
});