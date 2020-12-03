import { EventModel } from '../db/Models/eventModel'
import { UserModel } from '../db/Models/userModel'
import { sequelize } from '../db/sqliteDb'


export const getAllEvents = async (req, res, next) => {
    try {
        await sequelize.sync();
        const events = await EventModel.findAll({ include: [{model: UserModel, }],  })
        const parsedEventList = JSON.stringify(events)
        res.end(parsedEventList)
    } catch (error) {
        console.log(error)
        res.end({ success: false, message: 'Failed to find users'})
    }
}

export const createAnEvent = async (req, res, next) => {
    console.log("===>", req.body)
    try {
        await sequelize.sync();
        const { name, city, houseNumber, phoneNumber,maritalStatus, neighborhood, state, street, zipCode, ...eventData } = req.body;
        
        
        const user = await UserModel.create({
              name, city, houseNumber, phoneNumber,maritalStatus, neighborhood, state,street,zipCode
        });
           
        const { id }: any = user.toJSON(); 

        const event = await EventModel.create({
           ...eventData,
        
           userId: id
        });

        const message = JSON.stringify({success: 200, event: event.toJSON()});
        res.end(message);
     } catch (error) {
        console.log('Problem :(', error);
        res.end({ success: false, message: 'Oooops, fail :('});
    }
}