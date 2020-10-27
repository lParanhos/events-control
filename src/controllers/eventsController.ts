import { EventModel } from '../db/Models/eventModel'
import { UserModel } from '../db/Models/userModel'
import { sequelize } from '../db/sqliteDb'


export const getAllEvents = async (req, res, next) => {
    try {
        await sequelize.sync();
        const events = await EventModel.findAll({ include: UserModel })
        const parsedEventList = JSON.stringify(events)
        res.end(parsedEventList)
    } catch (error) {
        console.log(error)
        res.end({ success: false, message: 'Failed to find users'})
    }
}

export const createAnEvent = async (req, res, next) => {

}