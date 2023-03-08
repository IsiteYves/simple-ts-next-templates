import { FC } from 'react'
import { userProfile, rep2LegendComponents, rep2ListItems } from '../../data/data'
const Patient: FC = () => {
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
            <img src="/graphics/graph2.svg" alt="" className='w-full my-10' draggable="false" />
            <div className='flex gap-2 items-center'>
                {
                    rep2LegendComponents.map((item, index) => (
                        <div className='flex items-center gap-2 my-2 w-fit' key={index}>
                            <div className={`w-3 h-3 rounded-full `} style={{ backgroundColor: item.color }} /><span className='text-sm text-lt-gy uppercase'>{item.title}</span>
                        </div>
                    ))
                }
            </div>
            <div className='flex items-center gap-8'>
                <button className='uppercase text-green p-2 border-b border-green font-extrabold'>LEGENDS</button>
                <button className='uppercase font-extrabold'>Heart Rate Variability Chart</button>
            </div>
            <div className="grid  grid-cols-3 pt-4">
                {
                    rep2ListItems.map((list, index) => (
                        <ul key={index}>
                            {
                                list.map((item, index) => (
                                    <li key={index} className="text-sm text-lt-gy my-2">{item}</li>
                                ))
                            }
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}

export default Patient