import { FC } from "react";
import { navbaItems } from "../data/data";
import  {useRouter } from 'next/router'
interface LayoutProps {
    children : React.ReactNode
}
const Layout: FC<LayoutProps> = ({ children } : LayoutProps) => {
    const router = useRouter();
    return (
        <div className="flex">
            <div className=" w-24 border-r max-h-screen h-screen sticky top-0">
                <img src="/icons/logo.svg" alt="" className="w-full h-fit  p-4 bg-[#29B712]" />
                <div className=" py-2 flex items-center flex-col gap-6 justify-between">
                    {navbaItems && navbaItems.map(item => (
                        <div id={item.title} className="flex flex-col gap-2 items-center justify-between py-2 hover:bg-slate-50 duration-100 w-full cursor-pointer" onClick={() => router.push(`/${item.title}`)}>
                            <img src={`/icons/${item.title}.svg`} alt="" />
                            <span className="uppercase  text-[12px] opacity-30">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="px-10 w-full">
                { children }
            </div>
        </div>
    )
}

export default Layout