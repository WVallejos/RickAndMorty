const { Router } = require('express');
const router = Router();

const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const { postFav, deleteFav, getFav } = require('../controllers/handleFavorites')

router.get('/character/:id', getCharById)
router.get('/login', login)
router.get('/favorites', getFav)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router;