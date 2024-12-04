'use client';

import React, { ReactNode, useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;  // O título é opcional
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    // Bloqueia a rolagem ao abrir o modal e restaura ao fechar
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Limpeza do efeito (garante que a rolagem seja liberada caso o modal seja fechado de maneira não controlada)
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onClose} // Fecha ao clicar no overlay.
        >
            <div
                className="relative w-full max-w-lg bg-white rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()} // Impede fechamento ao clicar dentro do modal.
                role="dialog"
                aria-modal="true"
            >
                {/* Cabeçalho do Modal */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                    {title ? (
                        <h2 className="text-lg font-semibold text-gray-800">
                            {title}
                        </h2>
                    ) : (
                        <h2 className="text-lg font-semibold text-gray-800">
                            "Título não disponível"  {/* Mensagem de fallback */}
                        </h2>
                    )}
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition"
                        aria-label="Close modal"
                    >
                        {/* Ícone "X" */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Corpo do Modal */}
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};
