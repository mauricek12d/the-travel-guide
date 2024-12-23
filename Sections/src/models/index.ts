import sequelize from '../config/connection.js';
import { UserInfo } from './User.js';

const User = UserInfo(sequelize);

export { sequelize, User };
