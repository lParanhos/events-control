export interface Event {
    id: string,
    description: string,
    observations?: string,
    user: string,
    type: 'weeding' | 'birthday',
    groomsName?: string,
    date: Date,
    ceremonyLocation?: string,
    ceremonyHour?: Date,
    eventLocation?: string,
    eventStart?: Date,
    eventEnd?: Date
}