## NODEJS

## NODE (v20.3.1)

## start
`npm start`
`npm install --save body-parser@1.19.0 dotenv@8.2.0 ejs@3.1.5 express@4.17.1`
` npm install --save-dev @babel/core@7.12.10 @babel/preset-env@7.12.10 @babel/node@7.12.10 nodemon@2.0.7`

## sequelize/cli
`npm install --save-dev sequelize-cli@6.2.0`
-> link: https://sequelize.org/docs/v6/other-topics/migrations/#installing-the-cli
->link: https://mherman.org/blog/node-postgres-sequelize/

## Create Model
`npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`

## install mysql2
`npm install --save mysql2@2.2.5`

## running migrations
`npx sequelize-cli db:migrate`

## Creating the first Seed
`npx sequelize-cli seed:generate --name demo-user`

## running seeds
`npx sequelize-cli db:seed:all`