const axios = require('axios')

function getCharById(res, id) {
    axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-wvallejos`)
        .then(({data}) => {
            const {id, name, gender, species, origin, image, status} = data
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({id, name, gender, species, origin, image, status}))
        })
        .catch((error) => {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            res.end(error.message)
        })
}

module.exports = getCharById