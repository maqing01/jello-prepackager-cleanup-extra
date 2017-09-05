module.exports = function(content, file, conf) {
    var fs = require('fs');
	var path = require('path');
    var execSync = require('child_process').execSync;

    if(typeof conf === 'object' &&
        conf.extraPath !== undefined &&
        conf.extraPath !== '') {

        var extraPath = path.resolve(conf.extraPath);
        if(fs.existsSync(extraPath)) {
			// console.log(process.cwd());
			execSync(`rm -rf ${extraPath}`)
			console.log('Clean up successfully!');
        } else {
            console.log("Directory is empty!");
        }
    } else {
        throw new Error("Path configure error!");
    }

    // function deleteFolder(path) {
    //     if(path)
    // }
}
