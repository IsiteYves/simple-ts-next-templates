import { FC } from 'react'
import { aptOptions, patientDocuments, userMeta } from '../../data/data'
import UserProfile from './userProfile'


const Patient: FC = () => {
    return (
        <div className='flex gap-0  w-full'>
            <div className='py-10 w-[300px]  h-screen'>
                <UserProfile />
                <h1 className="my-8 text-xl">Files / Documents</h1>
                {
                    patientDocuments.map((document) => (
                        <div className="flex px-3 py-3 gap-2 bg-[#F9F9F9]  my-4" key={document.id}>
                            <img src="/icons/doc.svg" alt="" />
                            <span className='capitalize break-keep' style={{ fontFamily: 'Source Serif Pro' }}>{document.name}.pdf</span>
                        </div>

                    ))
                }
            </div>
            <div className='w-full  p-10'>
                <div className='meta grid grid-cols-4 gap-4 w-full'>
                    {Object.entries(userMeta).map((data,index) => {
                        return (
                            <div className='flex flex-col justify-start gap-4 py-4 border-b border-nv-tt'  key={index}>
                                <span className='font-normal text-lt-gy'>{data[0]}</span>
                                <span className='break-keep'>{data[1]}</span>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <div className="flex bg-[#F8F8F8] px-3 py-2 w-fit mt-10 rounded-md gap-6">
                        {
                            aptOptions.map((option) => (
                                <button key={option.id} className={`font-source p-2 ${option.selected ? "text-[#4469BA] bg-white rounded-md py-3" : " text-lt-gy"} px-6`}>{option.title}</button>
                            ))}
                    </div>
                    <div className='bg-[#F8F8F8] mt-4 rounded-xl' >
                        <div className="flex items-center justify-between py-3 px-4  border-b border-lt-gy border-opacity-30">
                            <span>Root canal treatment</span>
                            <button className=' p-3 rounded-md bg-white' >Show previous treatments</button>
                        </div>
                        <div className='flex flex-col gap-4 p-4'>
                            <div className='px-10 py-2 shadow-sm flex  w-full gap-2 bg-white justify-between items-center'>
                                <div className='flex flex-col justify-start gap-4 py-2  w-fit'>
                                    <span className='font-bold text-xl'>26 Nov &quot;19</span>
                                    <span className='break-keep text-lt-gy'>09.00 -10.00</span>
                                </div>
                                <div className='w-[1px] h-12 border-l bg-gray-300' />
                                <div className='flex flex-col justify-start gap-2 py-4  w-fit'>
                                    <span className='break-keep text-lt-gy text-sm'>Treatment </span>
                                    <span >Open access</span>
                                </div>
                                <div className='w-[1px] h-12 border-l bg-gray-300' />
                                <div className='flex flex-col justify-start gap-2 py-4  w-fit'>
                                    <span className='break-keep text-lt-gy text-sm'>Densist </span>
                                    <span >Drg. Adam H.</span>
                                </div>
                                <div className='flex flex-col justify-start gap-2 py-4  w-fit'>
                                    <span className='break-keep text-lt-gy text-sm'>Nurse </span>
                                    <span >Jessicamila</span>
                                </div>
                                <button className='flex items-center gap-4'>
                                    <img src="/icons/doc_b.svg" alt="" />
                                    <span className='text-[#3156C8]'>Note</span>
                                </button>
                            </div>
                            <div className='px-10 py-2 shadow-sm flex  w-full gap-2 bg-white justify-between items-center'>
                                <div className='flex flex-col justify-start gap-4 py-2  w-fit'>
                                    <span className='font-bold text-xl'>{"26 Nov '19"}</span>
                                    <span className='break-keep text-lt-gy'>09.00 -10.00</span>
                                </div>
                                <div className='w-[1px] h-12 border-l bg-gray-300' />
                                <div className='flex flex-col justify-start gap-2 py-4  w-fit'>
                                    <span className='break-keep text-lt-gy text-sm'>Treatment </span>
                                    <span >Open access</span>
                                </div>
                                <div className='w-[1px] h-12 border-l bg-gray-300' />
                                <div className='flex flex-col justify-start gap-2 py-4  w-fit'>
                                    <span className='break-keep text-lt-gy text-sm'>Densist </span>
                                    <span >Drg. Adam H.</span>
                                </div>
                                <div className='flex flex-col justify-start gap-2 py-4  w-fit'>
                                    <span className='break-keep text-lt-gy text-sm'>Nurse </span>
                                    <span >Jessicamila</span>
                                </div>
                                <button className='flex items-center gap-4'>
                                    <img src="/icons/doc_b.svg" alt="" />
                                    <span className='text-[#3156C8]'>Note</span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Patient