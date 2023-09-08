const { Router } = require('express');
const router = Router();

const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const postFav = require('../controllers/postFav')
const deleteFav = require('../controllers/deleteFav')
const postUser = require('../controllers/postUser');
const getFav = require('../controllers/getFav')

router.get('/character/:id', getCharById)
router.get('/login', login)
router.post('/login', postUser)
router.get('/favorites', getFav)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)

module.exports = router;