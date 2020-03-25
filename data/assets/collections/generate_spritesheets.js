// Load in dependencies
var fs = require('fs');
var Spritesmith = require('spritesmith');

//Search for all directories in collections

//Loop over all directories
const currentDirectory = __dirname + '/Player/';

//Generate Sourcepaths from all files in current directory
let srcPaths = fs.readdirSync(currentDirectory);
for(let index in srcPaths){
    srcPaths[index] = currentDirectory + srcPaths[index];
}

const spritesmithOptions = {
    src: srcPaths
};

// Generate our spritesheet
Spritesmith.run(spritesmithOptions, handleResult);




function handleResult(err, result) {
    // If there was an error, throw it
    if (err) {
        throw err;
    }

    // Output the image
    fs.writeFileSync(__dirname + '/../spritesmith_spritesheet.png', result.image);

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

}