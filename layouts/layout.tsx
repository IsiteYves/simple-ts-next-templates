import { FC } from "react";
import { navbaItems } from "../data/data";
interface LayoutProps {
    children : React.ReactNode
}
const Layout: FC<LayoutProps> = ({ children } : LayoutProps) => {
    return (
        <div>
            <div className=" w-24 shadow-md max-h-screen h-screen ">
                <img src="/icons/logo.svg" alt="" className="w-full h-fit  p-4 bg-[#29B712]" />
                <div className=" py-2 flex items-center flex-col gap-6 justify-between">
                    {navbaItems && navbaItems.map(item => (
                        <div id={item.title} className="flex flex-col gap-2 items-center justify-between py-2 hover:bg-slate-50 duration-100 w-full cursor-pointer">
                            <img src={`/icons/${item.title}.svg`} alt="" />
                            <span className="uppercase  text-[12px] opacity-30">{item.title}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                { children }
            </div>
        </div>
    )
}

export default Layout