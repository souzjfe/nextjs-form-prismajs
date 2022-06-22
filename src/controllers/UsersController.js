import prisma from '../lib/prisma'


class UsersController {
  async create(req, res) {
    console.log(req.body)
    const usuario = await prisma.usuario.create({ data: req.body })
    return res.json(usuario)
  }

}

export default new UsersController()