import { FC } from "react";
import { navbaItems } from "../data/data";
interface LayoutProps {
    children : React.ReactNode
}
const Layout: FC<LayoutProps> = ({ children } : LayoutProps) => {
    return (
        <div>
            <div className="navbar h-screen">
                <img src="/icons/logo.svg" alt="" className="w-full h-full p-4 bg-[#29B712]" />
                <div className="pt-4 flex items-center flex-col gap-4 ">
                    {navbaItems && navbaItems.map(item => (
                        <div id={item.title} className="flex flex-col gap-2 items-center justify-between">
                            <img src={`/icons/${item.title}.svg`} alt="" />
                            <span className="uppercase  ">{item.title}</span>
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