const { User } = require('../DB_connection')

const postUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if ( email && password){
        let user = await User.create({email, password})
        res.json(user)
    }
    else {
        res.status(404).json('Faltan Datos');
    }
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = postUser