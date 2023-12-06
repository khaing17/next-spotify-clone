"use client";
import { useRouter } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
interface HeaderProps {
    children: React.ReactNode,
    className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const router = useRouter()
    const handleLogout = () => {
        //Implement logout logic here
    }

    return (
        <div
            className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button onClick={() => router.back()}
                        className='flex items-center justify-center p-2 bg-black hover:opacity-70 bg-opacity-60 backdrop-blur-sm rounded-full'>
                        <RxCaretLeft size={26} />
                    </button>
                    <button onClick={() => router.forward()}
                        className='flex items-center justify-center p-2 bg-black hover:opacity-70 bg-opacity-60 backdrop-blur-sm rounded-full'>
                        <RxCaretRight size={26} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header 