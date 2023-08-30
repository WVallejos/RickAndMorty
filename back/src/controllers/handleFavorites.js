let myFavorites = []

function postFav(req, res) {
    const char = req.body
    myFavorites.push(char)
    res.json(myFavorites)
}

function deleteFav(req, res){
    const { id } = req.params
    myFavorites = myFavorites.filter((f) => f.id !== Number(id))
    res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}