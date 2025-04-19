import {Sequelize} from "sequelize";
import db from "../config/Database.js";
 
const {DataTypes} = Sequelize;
 
const Note = db.define('notes',{
    number: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT
});
export default Note;

(async () => {
    await db.sync();
  })();