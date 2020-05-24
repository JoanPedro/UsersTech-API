const { Model, DataTypes } = require('sequelize');

class Tech extends Model {
  static init(sequelize) {
    // Campos da tabela.
    super.init(
      {
      name: DataTypes.STRING,
      }, {
        sequelize,
        tableName: 'techs',
      })
  }
  
  // Unifica os relacionamentos.
  static associate(models) {
    // Muitos para Muitos
    this.belongsToMany(models.User, { 
      foreignKey: 'tech_id', through: 'user_techs', as: 'users'
    })
  }
}

module.exports = Tech;