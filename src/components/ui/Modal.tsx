import React, { ReactNode } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Retorna `null` se o modal não estiver aberto.

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={onClose} // Fecha ao clicar no overlay.
        >
            <div
                className="relative bg-white w-96 rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()} // Impede fechamento ao clicar dentro do modal.
                role="dialog"
                aria-modal="true"
            >
                {/* Botão de Fechar */}
                <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    &times; {/* Ou utilize um ícone de biblioteca como Heroicons */}
                </button>

                {/* Conteúdo do Modal */}
                <div className="p-6">{children}</div>
            </div>
        </div>
    );
};