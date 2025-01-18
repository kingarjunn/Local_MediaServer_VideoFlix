const { Console } = require('console');
const fs=require('fs');
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');


function Vidstream(req,res,Fstr,Fmaps){
    try{
        const fileName = req.params.content;
        const filePath =Fstr+"/"+fileName+"/"+Fmaps.get(fileName);
        
        const stat = fs.statSync(filePath);
        const fileSize = stat.size;
        const range = req.headers.range;
    
        if(range){
            const parts = range.replace(/bytes=/, '').split('-')
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    
            const chunksize = end - start + 1;
            const file = fs.createReadStream(filePath, {start, end});
            const head = {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': 'video/mp4'
            };
            res.writeHead(206, head);
            file.pipe(res);
        }
        else{
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4'
            };
            res.writeHead(200, head);
            fs.createReadStream(filePath).pipe(res)
        }
    
    
        }
        catch(err){
            res.status(404).send('error check the file or url');
            console.log(err.message);
    
        }
}

function Vidstream(req,res,filePath){
    try{
        const stat = fs.statSync(filePath);
        const fileSize = stat.size;
        const range = req.headers.range;
    
        if(range){
            const parts = range.replace(/bytes=/, '').split('-')
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    
            const chunksize = end - start + 1;
            const file = fs.createReadStream(filePath, {start, end});
            const head = {
                'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': 'video/mp4'
            };
            res.writeHead(206, head);
            file.pipe(res);
        }
        else{
            const head = {
                'Content-Length': fileSize,
                'Content-Type': 'video/mp4'
            };
            res.writeHead(200, head);
            fs.createReadStream(filePath).pipe(res)
        }
    
    
        }
        catch(err){
            res.status(404).send('error check the file or url');
            console.log(err.message);
    
        }
}

function dVidstream(req,res,filePath){

    res.sendFile(filePath);

}
module.exports={Vidstream,dVidstream};