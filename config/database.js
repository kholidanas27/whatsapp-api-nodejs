import { Sequelize } from "sequelize";

const db = new Sequelize("whatsapp-api", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
