const {Op} = require('sequelize')
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    
    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%gmail.com'
        }
      },
      include: [
        { 
          association: 'addressess', 
          where: {
            street: 'Rua Boa Esperança' 
          } 
        }, // Endereços
        {
          association: 'techs',
          required: false,
          where: {
            name: {
              [Op.iLike]: 'React%'
            }
          }
        }, // Tecnologias
      ]
    })

    return res.json(users);
  }
}