import { ReactNode } from "react";
import {Cancel01Icon} from "hugeicons-react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white/30">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-light-grey max-w-xl w-full relative">
                <button
                    className="absolute -top-10 right-0 cursor-pointer bg-white border border-light-grey rounded-full p-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <Cancel01Icon size={20} />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
