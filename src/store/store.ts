import { writable } from 'svelte/store';
import type { Form } from '../Models/Form'

export const event = writable<Form>({
    name: '',
    email: '',
    phoneNumber: null,
    maritalStatus: '',
    street: '',
    houseNumber: null,
    neighborhood: '',
    city: '',
    state: '',
    zipCode: null,
    description: '',
    type: 'birthday',
    date: null
})