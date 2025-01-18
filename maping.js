const fs=require('fs');
const path = require('path');


function mapfiles(str)
{
    const map=new Map();
    const files=fs.readdirSync(str)
    files.forEach(element => {
        //console.log(element)
        try{
            p1=element.split(/[\s.]+/)
            //console.log(p1)
            l=p1[p1.length - 1];
            if(l==="mp4" || l==="mkv"){
                //console.log(l)
                map.set(element,element);
            }
            else{
            var xx=str+element+'/';
            const infiles=fs.readdirSync(xx);
            infiles.forEach(data=>{
                pieces = data.split(/[\s.]+/);
                last = pieces[pieces.length - 1];
                if(last==="mp4" || last==="mkv")
                {
                    map.set(element,data);

                }
            })
            }
        }
        catch
        {
            
        }
    });
    return map;

}


const videoExtensions = ['.mp4', '.mkv', '.avi', '.mov', '.wmv', '.flv', '.webm', '.mpeg'];
const maps = new Map();

function scan(str)
{
    maps.clear()
    var x= getVideoFiles(str)
    //console.log(maps)
    return maps
}
// Function to walk through directories and find video files
function getVideoFiles(dirPath) {
  let videoFiles = [];

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
        maps.set(String(file),String(fullPath));
      }
    }
  }

  return videoFiles;
}







function mapSfiles(str){
    const maps=new Map();
    const files=fs.readdirSync(str)
    //console.log(files);
    files.forEach(element => {
        var xx=str+element+'/';
        const infiles=fs.readdirSync(xx);
        //console.log(infiles);
        const a=[];
        const inmap=new Map();
        infiles.forEach(data=>{
            //console.log(data);
            var xxx=xx+data+"/";
            //console.log("xxx= "+xxx);
            const indata=fs.readdirSync(xxx)
            //console.log(indata);
            indata.forEach(indata=>{
                pieces = indata.split(/[\s.]+/);
                last = pieces[pieces.length - 1];
                if(last==="mp4" || last==="mkv")
                {
                    a.push(xxx+indata);
                }

            })
            inmap.set(data,a);


        })
        maps.set(element,inmap);

    });
    //console.log(maps);
    return maps;

}



module.exports={mapfiles,mapSfiles,scan};