const { User } = require('../DB_connection')

const login = async (req, res) => {
    try {
        const { email, password } = req.query;
        if (email && password) {
            let user = await User.findOne(
                {
                    where: {
                        email: email
                    }
                })
                if (!user) {
                    res.status(404).json('Usuario no encontrado')
                } else {
                    if (user.password === password) {
                        res.json({ access: true })
                        }
                    else {
                        res.status(403).json('Contraseña incorrecta')
                    }
                }    
                 
        }
        else {
            res.status(400).json('Faltan Datos')
        }

    } catch (error) {
        res.status(500).json(error.message)
    }


}

module.exports = login