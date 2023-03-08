interface NavBarItem {
    id: number
    title: string
}


interface UserProfile {
    fullname: string
    email: string
    past: number
    upcoming: number
    picture: string
}

interface UserMeta {
    gender: string,
    birthday: string,
    phone_number: string,
    registered_date: string,
    street_address: string,
    city: string,
    zipcode: number,
    member_status: string

}

interface PatientDocument {
    id: number,
    name: string
}

interface AptOptions {
    id: number,
    title: string
    selected: boolean
}

interface LegendComponent {
    id: number,
    title: string,
    color: string
}


export const rep2LegendComponents: LegendComponent[] = [
    {
        id: 1,
        title: "p wave",
        color: "#823C84"
    },
    {
        id: 2,
        title: "st",
        color: "#3555C2"
    },
    {
        id: 3,
        title: "t wave",
        color: "#D93019"
    },
    {
        id: 4,
        title: "features",
        color: "#B9A35F"
    },
    {
        id: 5,
        title: "morphology",
        color: "#355270"
    }
]

export const legendComponents: LegendComponent[] = [
    {
        id: 1,
        title: "PVC - Premature Ventricular Contractions",
        color: "#61FF17"
    },
    {
        id: 2,
        title: "PAC - Premature Atrial Contractions",
        color: "#823C84"
    },
    {
        id: 3,
        title: "Second Degree - Second Degree Type-1/Type-2",
        color: "#B9A35F"
    },
    {
        id: 4,
        title: "NB - Noise on Beat",
        color: "#6B6B6B"
    },
]

export const aptOptions: AptOptions[] = [
    {
        id: 1,
        title: "Upcoming Appointments",
        selected: true
    },
    {
        id: 2,
        title: "Past Appointments",
        selected: false
    },
    {
        id: 3,
        title: "Medical Records",
        selected: false
    },
]
export const navbaItems: NavBarItem[] = [
    {
        id: 1,
        title: 'new'
    },
    {
        id: 2,
        title: 'patient'
    },
    {
        id: 3,
        title: 'folder'
    },
    {
        id: 4,
        title: 'upload'
    },
    {
        id: 5,
        title: 'report'
    },
    {
        id: 6,
        title: 'setting'
    },
    {
        id: 7,
        title: 'logout'
    },
]


export const userProfile: UserProfile = {
    fullname: "Diane Cooper",
    email: "diane.cooper@example.com",
    past: 15,
    upcoming: 2,
    picture: "/pic.png"
}
export const userMeta: UserMeta = {
    gender: "Female",
    birthday: "Feb 24th, 1997",
    phone_number: "(239) 555 -0108",
    registered_date: "Feb 24th, 1997",
    street_address: "JL. Diponegoro No. 21",
    city: "Cilacap",
    zipcode: 655849,
    member_status: "Active Member"

}

export const patientDocuments: PatientDocument[] = [
    {
        id: 1,
        name: "chech up results"
    },
    {
        id: 2,
        name: "check up results"
    },
    {
        id: 3,
        name: "medical prescription "
    },
    {
        id: 3,
        name: "dental X-Ray result"
    },
]

export const rep2ListItems = [
    [
        "PVC - Premature Ventricular Contractions",
        "PAC - Premature Atrial Contractions",
        "Second Degree - Second Degree Type-1/Type-2",
        "NB - Noise on Beat"
    ],
    [
        "Third Degree - Third Degree AV Block",
        "P - P Wave",
        "A! - Noise",
        "HR - Heart Rate",
        "E - Event Happening",
        "HN - High Noise",
    ],
    [
        "B - Beat",
        "BE - May/MayNot PVC",
        "PE - Definitely PVC",
        "BL - Beat Looking PVC’s",
        "L - Baseline Change",
        "R - Morph Change Due to Baseline",
    ],
]