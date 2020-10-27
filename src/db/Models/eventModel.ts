import { UUIDV4, DataTypes } from "sequelize"
import { sequelize } from "../sqliteDb"
import { UserModel } from "./userModel"

export const EventModel = sequelize.define('Event', {
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    observations: {
        type: DataTypes.STRING,
    },
    user: {
        type: DataTypes.UUID,
    },
    type: {
        type: DataTypes.ENUM('weeding', 'birthday'),
        allowNull: false
    },
    groomsName : {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    ceremonyLocation: {
        type: DataTypes.STRING
    },
    ceremonyHour: {
        type: DataTypes.TIME
    },
    eventLocation: {
        type: DataTypes.STRING,
    },
    eventStart: {
        type: DataTypes.TIME
    },
    eventEnd: {
        type: DataTypes.TIME
    }
})

EventModel.hasMany(UserModel)