import useAuthModal from "@/hooks/useAuthModal";
import * as Dialog from "@radix-ui/react-dialog"
import React from "react";
import { IoMdClose } from "react-icons/io";


interface ModalProps {
    isOpen: boolean;
    onChange: () => void;
    title: string;
    description: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onChange, title, description, children }) => {
    const authModal = useAuthModal()
    return (
        <Dialog.Root open={isOpen} onOpenChange={onChange}>
            <Dialog.Portal>
                <Dialog.Overlay className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0" />
                <Dialog.Content className="fixed bg-neutral-800 drop-shadow-md p-[25px] max-h-full h-full md:h-auto md:max-h-[85vh] w-full md:w-[90vw] md:max-w-[450px] border border-neutral-700 focus:outline-none top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-md">
                    <Dialog.Title className="text-xl font-bold mb-4 text-center">
                        {title}
                    </Dialog.Title>
                    <Dialog.Description className="mb-5 text-sm leading-normal text-center">
                        {description}
                    </Dialog.Description>
                    <div>
                        {children}
                    </div>
                    <Dialog.Close asChild>
                        <button className="text-neutral-400 rounded-full hover:text-neutral-300 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center focus:outline-none" onClick={authModal.onClose}>
                            <IoMdClose />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}

export default Modal