const { Favorite } = require('../DB_connection')

const postFav = async (req, res) => {
    try {
        const {id, name, origin, status, image, species, gender } = req.body
        if (id && name && origin && status && image && species && gender) {
            const favorite = await Favorite.create({id, name, origin, status, image, species, gender })
            const favorites = await Favorite.findAll()
            res.json(favorites)
        } else {
            res.status(401).json('Faltan datos')
        }

    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = postFav