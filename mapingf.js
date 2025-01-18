const fs=require('fs');
const path = require('path');

const videoExtensions = ['.mp4', '.mkv', '.avi', '.mov', '.wmv', '.flv', '.webm', '.mpeg'];
const mapf = new Map();

function scanf(str)
{
    mapf.clear()
    var x= getVideoFiles(str)
    //console.log(maps)
    return mapf
}
// Function to walk through directories and find video files
function getVideoFiles(dirPath) {
  let videoFiles = [];
  let map=new Map();

  // Read the contents of the directory
  const files = fs.readdirSync(dirPath);

  // Loop through each file/directory in the current directory
  for (let file of files) {
    const fullPath = path.join(dirPath, file); // Get full file path
    const stat = fs.statSync(fullPath); // Get stats of the file/folder

    // If it's a directory, recurse into it
    if (stat.isDirectory()) {
      videoFiles = videoFiles.concat(getVideoFiles(fullPath));
    } else {
      // If it's a file, check if it's a video file by its extension
      const ext = path.extname(file).toLowerCase();
      if (videoExtensions.includes(ext)) {
        videoFiles.push(fullPath); // Add video file to the result array
        mapf.set(String(file),String(fullPath));
      }
    }
  }

  return videoFiles;
}
module.exports={scanf};