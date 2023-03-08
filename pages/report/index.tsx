import { FC } from 'react'
import { userProfile, legendComponents } from '../../data/data'
import {  useRouter }  from 'next/router'

const Patient: FC = () => {
    const router = useRouter();


    return (
        <div className=' gap-0  w-full '>
            <h1 className="text-2xl font-bold mt-6">View report</h1>
            <div className="flex items-center gap-6 mt-1">
                <div className='text-sm '>
                    <span className='text-lt-gy'>Patient name :</span>
                    <span>David Allen</span>
                </div>
                <div className='text-sm'>
                    <span className=' text-lt-gy'>Date uploaded :</span>
                    <span>04/28/2018   16:05:51</span>
                </div>
            </div>
            <div>

                <button className='bg-green flex gap-4 px-3 py-2 rounded-md items-center float-right'>
                    <img src="/icons/dpdf.svg" alt="" />
                    <span className='font-source text-white'>Download&nbsp;pdf</span>
                </button>
            </div>
            <img src="/graphics/graph.svg" alt="" className='w-full my-10' />
            <div className="border-t  flex gap-10 items-center py-4">
                <div className="w-fit flex items-top py-6 gap-6">
                    <div className='w-fit h-fit'>
                        <h1 className="text-2xl font-bold mt-6">LTMK3729373</h1>
                        <div className="data  flex items-center mt-4">
                            <div className='flex flex-col items-center gap-2'>
                                <span className='capitalize text-sm text-lt-gy font-light'>{"Refresh"}</span>
                                <button className='' onClick={() => router.push("/report-2")}><img src="/icons/refresh.svg" alt="" /></button>
                            </div>
                            <div className='w-[1px] h-[34px] mx-10 bg-gray-300   opacity-70' />
                            <div className='flex flex-col items-center gap-2'>
                                <span className='capitalize text-sm text-lt-gy font-light'>{"Connected"}</span>
                                <button className=''><img src="/icons/switch.svg" alt="" /></button>
                            </div>
                        </div>
                    </div>
                    <img src="/graphics/round-graph.svg" alt="" draggable="false" className='m-4' />
                </div>
                <div className='w-[1px] h-[140px] mx-10 bg-gray-300   opacity-70' />
                <div className='flex flex-col items-center'>
                    <span className="text-2xl font-bold text-black text-center">{userProfile.fullname}</span>
                    <span className='text-lt-gy text-sm text-center font-light'>{userProfile.email}</span>
                    <div className="data  flex items-center mt-4">
                        <div className='flex flex-col items-center'>
                            <span>{userProfile.past}</span>
                            <span className='capitalize text-sm text-lt-gy font-light'>{"Past"}</span>
                        </div>
                        <div className='w-[1px] h-[34px] mx-10 bg-gray-300   opacity-70' />
                        <div className='flex flex-col items-center'>
                            <span>{userProfile.upcoming}</span>
                            <span className='capitalize text-sm text-lt-gy font-light'>{"upcoming"}</span>
                        </div>
                    </div>
                </div>
                <div className='w-[1px] h-[140px] mx-10 bg-gray-300   opacity-70' />
                <div className='flex flex-col'>
                    <span className={`text-2xl font-bold } `}>LEGEND</span>
                    {
                        legendComponents.map((item,index) => (
                            <div className='flex items-center gap-2 my-2' key={index}>
                                <div className={`w-3 h-3 rounded-full `}  style={{backgroundColor : item.color }}/><span className='text-sm text-lt-gy'>{item.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Patient