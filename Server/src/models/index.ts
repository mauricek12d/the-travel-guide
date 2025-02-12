import sequelize from '../config/connection.js';
import { UserInit } from './User.js';

const User = UserInit(sequelize);   


export { sequelize, User };
