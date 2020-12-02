import type {Event} from "./Event"

export interface Form extends Event {
    name: string
    id?: string,
    email: string,
    phoneNumber: number,
    maritalStatus: string,
    street: string,
    houseNumber: number,
    neighborhood: string,
    city: string,
    state: string,
    zipCode: number
}