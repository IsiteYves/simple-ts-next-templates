import { FC } from 'react'
import { userProfile } from '../../data/data'

 const UserProfile = () => {
    return (
        <div className='flex flex-col items-center'>
            <img src={userProfile.picture} alt="" className='w-[92px] h-[92px] object-cover rounded-full' />
            <span className="text-2xl font-bold text-black text-center">{ userProfile.fullname }</span>
            <span className='text-lt-gy text-sm text-center font-light'>{ userProfile.email }</span>
            <div className="data  flex items-center mt-4">
                <div className='flex flex-col items-center'>
                    <span>{userProfile.past}</span>
                    <span className='capitalize text-sm text-lt-gy font-light'>{"Past"}</span>
                </div>
                <div className='w-[1px] h-[34px] mx-10 bg-gray-300   opacity-70'/>
                <div className='flex flex-col items-center'>
                    <span>{userProfile.upcoming}</span>
                    <span className='capitalize text-sm text-lt-gy font-light'>{"upcoming"}</span>
                </div>
            </div>
            <button className='py-3  rounded-md mt-4 border-nv-tt w-full border-2 ' style={{ fontFamily : 'Source Serif Pro'}}>Send Message</button>
        </div>
    )
}


export default UserProfile