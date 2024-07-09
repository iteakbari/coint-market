import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    backdropClosable?: boolean;
    enterFrom?: 'left' | 'right' | 'top' | 'bottom';
    backdrop: boolean
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    size = 'medium',
    backdropClosable = true,
    enterFrom = 'top',
    backdrop
}) => {
    if (!isOpen) return null;

    const enterClasses = {
        left: 'transform translate-x-full',
        right: 'transform -translate-x-full',
        top: 'transform translate-y-full',
        bottom: 'transform -translate-y-full',
    };

    const enterActiveClasses = {
        left: 'transform translate-x-0',
        right: 'transform translate-x-0',
        top: 'transform translate-y-0',
        bottom: 'transform translate-y-0',
    };

    const backdropClass = `w-screen h-screen z-[1040] flex items-center justify-center bg-black bg-opacity-40 fixed inset-0 transition-transform duration-300 `;
    const modalClass = `top-20 left-[50%] -translate-x-[50%] bg-white p-6 rounded-lg shadow-lg fixed transition-transform duration-300 z-[1050] ${isOpen ? enterActiveClasses[enterFrom] : enterClasses[enterFrom]
        }`;

    return (
        <>
            {backdrop && <div
                className={backdropClass}
                onClick={backdropClosable ? onClose : undefined}
            ></div>}
            <div className={`${modalClass} min-w-56 min-h-28`}>
                <button onClick={onClose} className="absolute top-4 left-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Modal;
