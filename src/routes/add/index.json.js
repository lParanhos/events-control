import { EventModel } from "../../db/Models/eventModel";
import { UserModel } from "../../db/Models/userModel";
import { sequelize } from "../../db/sqliteDb";
import { createAnEvent } from "../../controllers/eventsController"
 
export async function post(req, res) {
	await createAnEvent(req, res)
}