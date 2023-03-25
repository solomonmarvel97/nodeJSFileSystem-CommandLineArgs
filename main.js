const fs = require('fs')

function readFile() {
    // read a file using the fs module
    fs.readFile('example.txt', 'utf-8', (err, data) => {
        if(err) throw Error(err) // throw an error if there was one
        
        // if there was no error, print out the data in the file
        console.log(data)
    })
}

function writeFile(file, text) {
    // write some texts to the file
    fs.writeFile(file, text, 'utf-8', (err) => {
        if(err) throw err // throw an error if there was one
        
        // if there was no error, print out this response
        console.log("The data was saved")
    })
}

// let fileName = 'example.txt'
// let text = `Hello World`
// writeFile(fileName, text)


// Deleting files using the fs module
function deleteFile() {
    fs.unlink('fileToDelete.txt', (err) => {
        if (err) throw err // if there was an error, we throw that error
        // if the operation was successful, show this message
        console.log("File was deleted")
    })
}

function createDirectories(directoryName) {
    directoryName.forEach(element => {
        fs.mkdir(element, (err) => {
            if (err) throw err // if there was an error, we throw that error
            // if the operation was successful, show this message
            console.log("Direcory was created")
        })
    });
}
// createDirectories(["marv", "solomon", "emdes"])


function readFile() {
    // read a file using the fs module
    fs.readFile('example1.txt', 'utf-8', (err, data) => {
        if(err) throw err // throw an error if there was one
        
        // if there was no error, print out the data in the file
        console.log(data)
    })
}
// readFile()