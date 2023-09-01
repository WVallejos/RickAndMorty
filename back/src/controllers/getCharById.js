
const axios = require('axios')
const errorHandler = require('../utils/errors')
const API_KEY = 'henrym-wvallejos'
const URL = 'https://rym2-production.up.railway.app/api/character/'


const getCharById = async (req, res) => {

    // const { id } = req.params
    // axios(`${URL}${id}?key=${API_KEY}`)
    // .then(
    //     ({data}) => {
    //    if(data) res.json(data)
    //    else res.status(404).json({message: 'Not Found'})
    //     }
    //     )
    // .catch((error) => res.status(500).json({message: error.message}))

    try {
        const { id } = req.params
        const {data} = await axios(`${URL}${id}?key=${API_KEY}`)
        res.status(200).json(data)
    } catch (error) {
        errorHandler(res, error)
    }


}




// --- Controller SIN express


// function getCharById(res, id) {
//     axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-wvallejos`)
//         .then(({data}) => {
//             const {id, name, gender, species, origin, image, status} = data
//             res.writeHead(200, { 'Content-Type': 'application/json' })
//             res.end(JSON.stringify({id, name, gender, species, origin, image, status}))
//         })
//         .catch((error) => {
//             res.writeHead(500, { 'Content-Type': 'text/plain' })
//             res.end(error.message)
//         })
// }

module.exports = getCharById