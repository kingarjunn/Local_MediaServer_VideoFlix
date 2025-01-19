const express=require('express');
const fs=require('fs');
const cors=require('cors');
const Stream=require('./Stream');
const app=express();
const tools=require('./maping');
const toolsf= require('./mapingf');
const htmls = require('./html');


//place your folder paths for movies abd series.@fstr=path for films folder && @Sstr=path for series.
const Fstr="E:/Arjun_New_backup/volume_E/Movies/";
const Sstr="E:/Arjun_New_backup/volume_F/Series/";
//use Fstr for films & Sstr for series 


const os = require('os');

const networkInterfaces = os.networkInterfaces();

let ipAddress = '';

for (let interfaceName in networkInterfaces) {
    for (let iface of networkInterfaces[interfaceName]) {
        if (!iface.internal && iface.family === 'IPv4') {
            ipAddress = iface.address;
            break;
        }
    }
    if (ipAddress) break;
}

ipAddress = String('http://'+ipAddress+':3000');

console.log('Local IP Address: ', ipAddress);




////



//const map=new Map();

const Smaps = tools.scan(Sstr);
const Skeys = Array.from(Smaps.keys());
Skeys.sort();
const Fmaps=toolsf.scanf(Fstr);
const Fkeys=Array.from(Fmaps.keys());
Fkeys.sort();
//console.log(Smaps);
//console.log(Fmaps);
//var Smaps=tools.mapSfiles(Sstr)
//var Skeys=Array.from(Smaps.keys());

console.log(Smaps.size);
console.log(Fmaps.size);


///

//change port to desired port if needed
const port=3000;

app.use(cors());

app.get('/video/:content',function(req,res){
    const itm=String(req.params.content).replaceAll('@',' ');
    console.log(itm)
    
    let pth = String(Fmaps.get(itm));
    console.log(pth);
    if(pth.length===0)
    {
        pth = Fmaps.get(itm)
        console.log(pth)
    }
    //console.log(pth);
    if(pth.length>0){
    Stream.Vidstream(req,res,pth);
    }
    else{
        res.status(400).send("file not found")
    }
    
})


app.get('/movies/:content',function(req,res){
    const itm=String(req.params.content);
    const pth = String(Fmaps.get(itm));
    if(pth.length>0){
        Stream.Vidstream(req,res,pth);
    }
    else{
        res.status(400).send("file not found");
    }
    
})

app.get('/series/:content',function(req,res){
    const itm=String(req.params.content);
    const pth = String(Smaps.get(itm));
    if(pth.length>0){
        Stream.Vidstream(req,res,pth);
    }
    else{
        res.status(400).send("file not found");
    }
    
})

//Test
app.get('/dvideo',function(req,res){

    Stream.dVidstream(req,res,"http://localhost:3000/video/[Anime Time] Attack on Titan - 01.mkv");
})

app.get('/hls',function(req,res){

    res.sendFile(__dirname+'/main.html');
})
app.get('/',function(req,res){

    //res.sendFile(__dirname+'/test.html');
    var fil = String(ipAddress);
    res.send(htmls.getindex(fil));
})
app.get('/icon',function(req,res){
    res.sendFile(__dirname+'/favicon.ico');
})


app.get('/pop/series/:val',function(req,res){
    const itm=String(req.params.val);
    console.log(itm);
    var xy = String(ipAddress+'/series/'+itm);
    res.send(htmls.getroot(xy,ipAddress,itm));
})
app.get('/pop/movies/:val',function(req,res){
    const itm=String(req.params.val);
    var xy = String(ipAddress+'/movies/'+itm);
    res.send(htmls.getroot(xy,ipAddress,itm));
})


app.get('/get/:val',function(req,res){

    const value=req.params.val;
    if(value=='movies')
    {
        //res.send(JSON.stringify(Object.fromEntries(maps)));
        res.send(JSON.stringify(Fkeys));
    }
    else if(value=='series')
    {
        res.send(JSON.stringify(Skeys));
    }
    else if(value==-1)
    {
        //console.log(Smaps);
        res.send(JSON.stringify(Object.fromEntries(Smaps)));
    }


})

//you can change the port no if another server is running in the port.
app.listen(port,()=>{
    console.log("server running in port "+port+' http://localhost:'+port);
})
