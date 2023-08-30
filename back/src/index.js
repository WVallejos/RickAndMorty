const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./routes/routes')
const server = express()
const PORT = 3001


server.use(morgan('dev'))
server.use(cors())
server.use(express.json());



server.use('/rickandmorty', router)

server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
})












// ---- Server levantado con Node Web Server ----

// const http = require('http');
// const getCharById = require('./controllers/getCharById') 

// http.createServer(function(req, res) {

//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;
//     // const characters = fs.readFileSync(__dirname + '/utils/data.js')
//     if(url.includes("/rickandmorty/character/")){
//         const id = url.split('/').at(-1);
//         getCharById(res, id)

//         // HW de web server, para promises usamos el controller
//         // const character = characters.find((char) => char.id === Number(id))
//         // if (character) {
//         //     res.writeHead(200, { "Content-Type": "application/json"})
//         //     return res.end(JSON.stringify(character))
//         // } else {
//         //     res.writeHead(404, { "Content-Type": "application/json"})
//         //     return res.end(JSON.stringify({error: "Character Not Found"}))
//         // }

//     }

//     // if(req.url === "/rickandmorty/character"){
//     //     res.writeHead(200, { "Content-Type": "application/json"});
//     //     res.end(JSON.stringify(characters));
//     // } else if(req.url.startsWith("/rickandmorty/character/")){
//     //     const params = req.url.split('/');
//     //     const id = Number(params[3])
//     //     res.writeHead(200, {"Content-Type": 'application/json'})
//     //     const character = characters[id-1]
//     //     res.end(JSON.stringify(character))
//     // }





// }).listen(3001, "localhost")