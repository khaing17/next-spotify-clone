"use client"

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"


import Modal from "./Modal"
import useAuthModal from "@/hooks/useAuthModal"
import { useEffect } from "react"


const AuthModal = () => {
    const supabaseClient = useSupabaseClient()
    const router = useRouter()
    const session = useSessionContext()

    const { isOpen, onClose } = useAuthModal()
    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    }

    useEffect(() => {
        if (session) {
            router.refresh()
            onClose()
        }
    }, [session, router, onClose])
    return (
        <Modal isOpen={isOpen} title="Welcome back" description="Login to your account" onChange={() => onChange} >
            <Auth supabaseClient={supabaseClient}
                magicLink
                providers={['github']}
                theme="dark"
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "#404040",
                                brandAccent: "#22c55e"
                            }
                        }
                    }
                }}
            />
        </Modal>
    )
}

export default AuthModal