// Load in dependencies
var fs = require('fs');
var Spritesmith = require('spritesmith');

let spritesmithPaths = [];

//Search for all directories in collections
const subDirs = getSubDirectories(__dirname);

//Loop over all directories
for (const directoryName of subDirs) {
    console.log(`Adding sprites from folder: ${directoryName}`)
    const currentDirectory = `${__dirname}/${directoryName}/`;

    //Generate Sourcepaths from all files in current directory
    let srcPaths = fs.readdirSync(currentDirectory);
    for (let index in srcPaths) {
        srcPaths[index] = currentDirectory + srcPaths[index];
    }

    spritesmithPaths = spritesmithPaths.concat(srcPaths);
}


const spritesmithOptions = {
    src: spritesmithPaths
};

// Generate our spritesheet
//console.log(spritesmithPaths);
Spritesmith.run(spritesmithOptions, handleResult);


function handleResult(err, result) {
    // If there was an error, throw it
    if (err) {
        throw err;
    }

    console.log(`--------------------------------------------`);

    // Output the image
    fs.writeFileSync(__dirname + '/../spritesmith_spritesheet.png', result.image);
    console.log(`Saving spritesheet to spritesmith_spritesheet.png`);

    //Prepare Json data
    let jsonData = {
        items: {},
        properties: result.properties
    }

    for (const key in result.coordinates) {
        if (result.coordinates.hasOwnProperty(key)) {
            const element = result.coordinates[key];
            const newKey = key.substring(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
            jsonData.items[newKey] = element;
        }
    }

    fs.writeFileSync(__dirname + '/../spritesmith_spritesheet.json', JSON.stringify(jsonData));
    console.log(`Saving data to spritesmith_spritesheet.json`);

}

function getSubDirectories(path) {
    return fs.readdirSync(path, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
}