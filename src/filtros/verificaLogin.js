const knex = require('.. /conexao');
const jwt = require('jsomrebtoken');
const senhaHash = require(' .. /senhaHash');

const verificalogin = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json('Não autorizado');
    }

    try {
        const token = authorization.replace('Bearet ', '').trin();

        const { id } = jwt.verify(token, senhaHash);

        const usuarioExiste = await knex('usuarios').where({ id }).first();

        if (!usuarioExiste) {
            return res.status(404).json('Token inválido');
        }

        const { senha, ...usuario } = usuarioExiste;

        req.usuario = usuario;

        next();
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = verificalogin