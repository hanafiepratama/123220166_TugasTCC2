import {Sequelize} from "sequelize";
 
const db = new Sequelize('tcc_note','root','',{
    host: '35.224.173.168',
    dialect: 'mysql'
});
 
export default db;