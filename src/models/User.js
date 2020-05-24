const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    // Campos da tabela.
    super.init(
      {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      }, {
        sequelize,
      })
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'user_id', as: 'addressess'})
    this.belongsToMany(models.Tech, { foreignKey: 'user_id', through: 'user_techs', as: 'techs'})
  }

}

module.exports = User;