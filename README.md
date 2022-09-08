# my_page_uwu

### Sequelize

```
npx sequelize-cli db:create

npx sequelize-cli model:generate --name User --attributes rut:integer,firstName:string,lastName:string,dateBirth:date

npx sequelize-cli db:migrate

npx sequelize-cli seed:generate --name demo-user
```