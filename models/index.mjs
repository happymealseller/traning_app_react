import sequelizePackage from 'sequelize';
// we give the name allConfig to what we're importing from config.js, i.e, our database settings
import allConfig from '../config/config.js';

import initLogModel from './log.mjs';

const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || 'development';
const config = allConfig[env];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.Log = initLogModel(sequelize, Sequelize.DataTypes);
db.sequelize = sequelize;

export default db;