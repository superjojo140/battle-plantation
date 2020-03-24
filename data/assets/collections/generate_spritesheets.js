// Load in dependencies
var fs = require('fs');
var Spritesmith = require('spritesmith');

//Search for all directories in collections

//Loop over all directories

//Generate Sourcepaths from all files in current directory
const srcPaths = [
    __dirname + '/TntPumpkin/pumpkin_idle.png',
    __dirname + '/TntPumpkin/pumpkin_explode_1.png',
    __dirname + '/TntPumpkin/pumpkin_explode_2.png'
];

const spritesmithOptions = {
    src: srcPaths,
    algorithm: 'top-down'
};

// Generate our spritesheet
Spritesmith.run(spritesmithOptions, handleResult);




function handleResult(err, result) {
    // If there was an error, throw it
    if (err) {
        throw err;
    }

    // Output the image
    fs.writeFileSync(__dirname + '/../spritesheets/TntPumpkin.png', result.image);

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

    fs.writeFileSync(__dirname + '/../spritesheets/TntPumpkin.json', JSON.stringify(jsonData));

}