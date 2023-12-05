"use client"
import { usePathname } from "next/navigation"
import { useMemo } from "react"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Box from './Box'

interface SideBarProps {
    children: React.ReactNode
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {

    const pathName = usePathname()

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathName !== '/search',
            href: '/'

        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathName === '/search',
            href: '/search'
        }
    ],
        [pathName])
    return (
        <div className="flex h-full ">
            <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
                <Box>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <HiHome className="w-8 h-8 text-white" />
                            <span className="ml-2">Home</span>
                        </div>
                    </div>
                </Box>
                <Box className="overflow-y-auto h-full">
                    Library
                </Box>
            </div>
        </div>
    )
}

export default SideBar