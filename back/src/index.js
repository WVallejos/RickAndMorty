const http = require('http');
const characters = require('./utils/data')

http.createServer(function(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(characters);
    // const characters = fs.readFileSync(__dirname + '/utils/data.js')
    const {url} = req;
    


    if(req.url === "/rickandmorty/character"){
        res.writeHead(200, { "Content-Type": "application/json"});
        res.end(JSON.stringify(characters));
    } else if(req.url.startsWith("/rickandmorty/character/")){
        const params = req.url.split('/');
        const id = Number(params[3])
        res.writeHead(200, {"Content-Type": 'application/json'})
        const character = characters[id-1]
        res.end(JSON.stringify(character))
    }





}).listen(3001, "localhost")