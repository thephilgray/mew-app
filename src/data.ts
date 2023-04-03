import { add } from 'date-fns'

// mock data
export const members = []

export const submissions = [
    {
        id: '8d2ff936-ff6b-472b-8b37-b51d586ce265',
        title: 'Submission 1 fgfgdgfdg',
        byline: 'sdfsdfdfds sdfdff',
        submitted: add(new Date(), { days: -2 }),
    },
    {
        id: '84438a74-067b-44ea-adfc-683e6b7bbdbb',
        title: 'Submission 2 b51d586ce265',
        byline: 'b51d586ce265',
        submitted: new Date(),
    },
]

export type Assignment = {
    id: number
    required: boolean
    title: string
    submissions: number
    members: number
    start: Date
    due: Date
}

export const assignments: Assignment[] = [
    {
        id: 1,
        required: true,
        title: 'Week 1',
        submissions: 26,
        members: 26,
        start: add(new Date(), { weeks: -2 }),
        due: add(new Date(), { weeks: -1 }),
    },
    {
        id: 2,
        required: true,
        title: 'Week 2: Another week, and really long name',
        submissions: 25,
        members: 26,
        start: add(new Date(), { weeks: -1 }),
        due: new Date(),
    },
    {
        id: 3,
        required: true,
        title: 'Week 3: Something Something',
        submissions: 20,
        members: 25,
        start: new Date(),
        due: add(new Date(), { weeks: 1 }),
    },
]

export type User = {
    id: string
    name: string
    roles: string[]
}

export type Workshop = {
    id: string
    title: string
    members: User[]
    admins: User[]
    dateEnrolled: Date
    start: Date
    status: string
}

export const workshops: Workshop[] = [
    {
        id: 'workshop-e6c642ec-fd72-4129-baca-59046433f2eb',
        title: 'Spring 2021 Creative Workshop',
        dateEnrolled: new Date('03-23-2021'),
        start: add(new Date(), { weeks: -4 }),
        status: 'active',
        members: [
            {
                id: '067e56ba-571b-4c3b-9851-e180faeefa8f',
                name: 'Test User',
                roles: ['admin'],
            },
        ],
        admins: [
            {
                id: '067e56ba-571b-4c3b-9851-e180faeefa8f',
                name: 'Test User',
                roles: ['admin'],
            },
        ],
    },
    {
        id: 'workshop-f34722be-072c-413d-a371-34506e80029a',
        title: '2020 Workshop',
        dateEnrolled: new Date('12-22-2020'),
        start: add(new Date(), { weeks: -4 }),
        status: 'active',
        members: [
            {
                id: '067e56ba-571b-4c3b-9851-e180faeefa8f',
                name: 'Test User',
                roles: ['admin'],
            },
        ],
        admins: [
            {
                id: '067e56ba-571b-4c3b-9851-e180faeefa8f',
                name: 'Test User',
                roles: ['admin'],
            },
        ],
    },
]
