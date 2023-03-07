interface NavBarItem {
    id : number
    title :  string
}


interface UserProfile {
    fullname  : string
    email : string
    past : number
    upcoming : number
    picture : string
}

interface UserMeta {
    gender  : string,
    birthday  : string ,
    phone_number : string ,
    registered_date : string,
    street_address :string ,
    city : string ,
    zipcode :  number ,
    member_status : string

}

export const navbaItems : NavBarItem[] = [
    {
        id : 1 ,
        title : 'new'
    },
    {
        id : 2 ,
        title : 'patient'
    },
    {
        id : 3,
        title : 'folder'
    },
    {
        id :4 ,
        title : 'upload'
    },
    {
        id : 5 ,
        title : 'report'
    },
    {
        id : 6 ,
        title : 'setting'
    },
    {
        id : 7 ,
        title : 'logout'
    },
]


export const  userProfile : UserProfile  = {
    fullname  : "Diane Cooper",
    email : "diane.cooper@example.com",
    past : 15,
    upcoming : 2,
    picture : "/pic.png"
}
export const  userMeta : UserMeta = {
    gender  : "Male",
    birthday  : "Feb 24th, 1997" ,
    phone_number : "(239) 555 -0108" ,
    registered_date : "Feb 24th, 1997",
    street_address :"JL. Diponegoro No. 21" ,
    city : "Cilacap" ,
    zipcode :  655849 ,
    member_status : "Active Member"

}