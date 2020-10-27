import { UUIDV4,DataTypes } from "sequelize"
import { sequelize } from "../sqliteDb"

export const UserModel = sequelize.define("User", {
    id: {
        type:DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
     email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true
     },
     phoneNumber: {
         type: DataTypes.NUMBER,
         allowNull: false
     },
     maritalStatus: {
         type: DataTypes.STRING
     },
     street: {
         type: DataTypes.STRING,
         allowNull: false
     },
     houseNumber: {
         type: DataTypes.NUMBER,
         allowNull: false
     },
     neighborhood: {
         type: DataTypes.STRING,
         allowNull: false
     },
     city: {
         type: DataTypes.STRING,
         allowNull: false
     },
     state: {
         type: DataTypes.STRING,
         allowNull: false
     },
     zipCode: {
         type: DataTypes.NUMBER,
         allowNull: false
     }
    
})