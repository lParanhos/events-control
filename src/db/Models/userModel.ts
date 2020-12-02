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
     phoneNumber: {
         type: DataTypes.NUMBER,
     },
     maritalStatus: {
         type: DataTypes.STRING
     },
     street: {
         type: DataTypes.STRING,
     },
     houseNumber: {
         type: DataTypes.NUMBER,
     },
     neighborhood: {
         type: DataTypes.STRING,
     },
     city: {
         type: DataTypes.STRING,
     },
     state: {
         type: DataTypes.STRING,
     },
     zipCode: {
         type: DataTypes.NUMBER,
     }
    
})