"use client"

import { MyUserContextProvider } from "@/hooks/useUser"
import React from "react"


interface UserProviderType {
    children: React.ReactNode
}


const UserProvider: React.FC<UserProviderType> = ({ children }) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
}

export default UserProvider