import {
    Model,
    type InferAttributes,
    type InferCreationAttributes,
    type CreationOptional,
    DataTypes,
    type Sequelize,
  } from 'sequelize';
  
  import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
  
  interface UserAttributes {
    id: number;
    username: string;
    email: string;
    password: string;
  }
  
  interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
  
  export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    declare id: number;
    declare username: string;
    declare email: string;
    declare password: string;
  }

  export class User extends Model<
    InferAttributes<User>,
    InferCreationAttributes<User>
  > {
    declare id: CreationOptional<number>;
    declare username: string;
    declare email: string;
    declare password: string;
  }
  
  export function UserInfo(sequelize: Sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: true,
          },
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: 'Please enter a password',
            },
            len: {
              args: [8, 100],
              msg: 'Password must be at least 8 characters long',
            },
          },
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'user',
      }
    );
  
    return User;
  }
  