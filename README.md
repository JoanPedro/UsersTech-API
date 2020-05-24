## Docker

>Para a criação do container, instale o **docker**
Após instalação rode o comando: 
```docker run --name dbsqlnode -e POSTGRES_PASSWORD=docker -p 5432:5432 postgres:11```

- O atributo **name** especifica o nome do container a ser gerado (*dbsqlnode*);
- No atributo **POSTGRES_PASSWORD** foi indicada a senha do administrador 
(para o usuário default postgres). Caso queira definir um usuário para o Postgre,
ao invés do default utilize: ``` ... -e POSTGRES_USER=username ```. Em que **username** é o nome a ser definido;
- O atributo **-p** indica a porta (*5432*) em que se dará a comunicação com o PostgreSQL, a qual será mapeada para a porta default (*5432*) deste SGBD dentro do container;
> Pode-se criar um volume utilizando o atributo **-v**:
```/path/to/store/yourDatas:/var/lib/postgresql/data ```

## Sequelize
> Para setup inicial do banco de dados: 
``` yarn db:migrate ```

## Tecnologias
- express;
- pg;
- pg-hstore;
- sequelize.

## Startup
> ``` yarn dev ```

## Rotas

| URL                |  Método             | Operação                     |
| ------------------ | ------------------- | ---------------------------- |
|  /users            |  GET                | Lista todos os usuários      |
|  /users            |  POST               | Cria um novo usuário         |
| /users/1/addresses |  POST               | Cria um novo endereço para usuário de                                                               ID = 1   |
| /users/1/addresses |  GET                | Lista todos os endereços relacionados                                      com o usuário de ID = 1 |
| /users/1/techs     |  POST               | Cria uma nova tecnologia para usuário de                                                               ID = 1   |
| /users/1/techs     |  GET                | Lista todas as tecnologias relacionadas                                      com o usuário de ID = 1 |
| /users/1/techs     |  DELETE             | Deleta uma das tecnologias relacionadas                                      com o usuário de ID = 1 |
| /reports           |  GET                | Lista todos os usuários com email final de ...@gmail.com; que moram na rua 'Rua Boa Esperança', desses usuários -> que possuam tecnologias como React... (Pode ser React Native, ReactJS...). Caso não possuam, tecnologias serão apresentadas como vazias.                      |
