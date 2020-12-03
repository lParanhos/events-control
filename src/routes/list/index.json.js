import { getAllEvents } from "../../controllers/eventsController"

export async function get(req, res) {
    await getAllEvents(req, res)
}