import { FC } from 'react'
import { aptOptions, patientDocuments, userMeta } from '../../data/data'



const Patient: FC = () => {
    const c = [1,2,3,4,5,6]
    return (
        <div className='flex flex-col  w-full'>
            <div className='w-full border-b border-slate-100 flex items-center'>
                <input type="text" name="" placeholder='Find by name of phone number' className='text-2xl py-4  outline-none w-full' id="" />
                <div className='flex gap-10'>

                    <div className="flex items-center gap-4">
                        <span className='text-sm text-lt-gy'>Gender</span>
                        <button className='flex items-center gap-2'>
                            <span>Male</span>
                            <img src="/icons/ddown.svg" alt="" />
                        </button>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className='text-sm text-lt-gy'>Member&nbsp;status</span>
                        <button className='flex items-center gap-2'>
                            <span>Active&nbsp;member</span>
                            <img src="/icons/ddown.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="map">
                {  c.map((ct) => (
                        <div className="flex  items-center justify-between border-b py-2" key={ct}>
                            <div className='w-fit'>

                                <div className="w-fit flex items-baseline gap-4">
                                    <span className='font-bold text-xl'>Diane Cooper</span> <span className='text-sm text-lt-gy'>diane.cooper@example.com</span>
                                </div>
                                <div className='flex items-center gap-10'>
                                    <div className='flex flex-col justify-start gap-2 py-4  w-fit'>
                                        <span className='break-keep text-lt-gy text-sm'>Gender </span>
                                        <span >Female</span>
                                    </div>
                                    <div className='w-[1px] h-12 border-l bg-gray-300' />
                                    <div className='flex flex-col justify-start gap-2 py-4  w-fit'>
                                        <span className='break-keep text-lt-gy text-sm'>Birthday </span>
                                        <span >Feb 24th 1997</span>
                                    </div>
                                    <div className='w-[1px] h-12 border-l bg-gray-300' />
                                    <div className='flex flex-col justify-start gap-2 py-4  w-fit'>
                                        <span className='break-keep text-lt-gy text-sm'>Phone number </span>
                                        <span >(239) 555 -0108</span>
                                    </div>
                                    <div className='w-[1px] h-12 border-l bg-gray-300' />
                                    <div className='flex flex-col justify-start gap-2 py-4  w-fit'>
                                        <span className='break-keep text-lt-gy text-sm'>Member status </span>
                                        <span >Active member</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className='flex flex-col justify-start gap-2 py-4  w-fit'>
                                    <span >15</span>
                                    <span className='break-keep text-lt-gy text-sm'>Past </span>
                                </div>
                                <div className='w-[1px] h-12 border-l bg-gray-300' />
                                <div className='flex flex-col justify-start gap-2 py-4  w-fit'>
                                    <span >02</span>
                                    <span className='break-keep text-lt-gy text-sm'>Upcoming </span>
                                </div>
                                <div className='px-4'>
                                    <button className='uppercase text-left font-semibold text-green'>view egc  <br /> report <br /> documents</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Patient