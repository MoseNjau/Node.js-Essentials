const fs = require('fs');

//reading files
// fs.readFile('./docs/blogs.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })
// console.log('Last line')

// writing files

// fs.writeFile('./docs/blogs.txt', 'Hello, Moses uko vipi', () => {
//     console.log('This file is overritten')
// })
// Directories
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder created!!');
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Folder deleted');
    })
}


// Deleting files

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File you said is deleted!!');
    })
}
