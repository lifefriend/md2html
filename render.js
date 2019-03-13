var fs = require('fs');
var Remarkable = require('remarkable');
var md = new Remarkable('full');

function render(dir,writeDir) {
    console.log('writeDir: ', writeDir);
    console.log('dir: ', dir);
    if(!dir.toString().endsWith('/')){
        dir = dir + '/'
    }
    if(!writeDir.toString().endsWith('/')){
        writeDir = writeDir + '/'
    }
    var files = fs.readdirSync(dir);
    for (let file in files) {
        var file_name = files[file];

        if (file_name.substr(file_name.length - 3) === ".md") {
            console.log("File: " + file_name + " found!");            
            var txt = fs.readFileSync(dir + file_name);

            fs.writeFileSync(
                writeDir + file_name.substr(0,file_name.length - 3) + ".html",
                md.render(txt.toString()));
            console.log("File: " + 
                    file_name.substr(0,file_name.length - 3) + 
                    ".html" + " Write Success!")
        }
    }
}

module.exports = render