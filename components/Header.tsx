"use client";
import { useRouter } from 'next/navigation'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import Button from './Button';
import useAuthModal from '@/hooks/useAuthModal';
interface HeaderProps {
    children: React.ReactNode,
    className?: string
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const router = useRouter()
    const handleLogout = () => {
        //Implement logout logic here
    }
    const authModal = useAuthModal()

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
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                        <HiHome className="text-black " size={20} />
                    </button>
                    <button className='rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition'>
                        <BiSearch className="text-black " size={20} />
                    </button>
                </div>
                <>
                    <div className='flex space-x-6'>
                        <div className="">
                            <Button
                                className='bg-transparent text-neutral-300 font-medium' onClick={authModal.onOpen}>
                                Sign Up
                            </Button>
                        </div>
                        <div className="">
                            <Button
                                className='bg-white px-6 py-2' onClick={authModal.onOpen}>
                                Login
                            </Button>
                        </div>
                    </div>
                </>
            </div>
            {children}
        </div>
    )
}

export default Header 