const { Favorite } = require('../DB_connection')

const getFav = async (req, res) => {
    try 
        {
            const favorites = await Favorite.findAll()
            res.json(favorites)
        }  catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = getFav