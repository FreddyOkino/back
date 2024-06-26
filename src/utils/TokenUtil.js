require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = {
    gerarToken: (perfil) => {
        try {
            return jwt.sign(perfil, process.env.SECRET)
        } catch (error) {
            console.log(`ERROR: ${error.message}`)
            throw {
                status: 500,
                message: "Error na geração do token"
            }
        }
    },
    verificarToken: (token) => {
        try {
            return jwt.verify(token, process.env.SECRET)
        } catch (error) {
            console.log(`ERROR: ${error.message}`)
            throw {
                status: 500,
                message: "Error ao autenticar: token invalido"
            }
        }
    }
}