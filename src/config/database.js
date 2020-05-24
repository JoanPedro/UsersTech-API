module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'sqlnode',
  define: {
    timestamps: true,
    underscored: true,
  }
}

// Com define -> Toda tabela terá: createdAt e updatedAt;
// Nome das tabelas em snakeCase, separa por under_line. 