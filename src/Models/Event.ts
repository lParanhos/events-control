export interface Event {
    id?: string,
    description: string,
    observations?: string,
    name: string,
    type: 'weeding' | 'birthday',
    groomsName?: string,
    date: Date,
    ceremonyLocation?: string,
    ceremonyHour?: Date,
    eventLocation?: string,
    eventStart?: string,
    eventEnd?: string
}