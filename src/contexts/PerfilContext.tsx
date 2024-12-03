'use client';

import { perfilList } from '@/data/perfilList';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Perfil } from '@/types/Perfil/Perfil'; // Importa o tipo Perfil

// Tipagem do contexto
interface PerfilContextType {
    dataPerfil: Perfil;
    setDataPerfil: React.Dispatch<React.SetStateAction<Perfil>>;
}

// Cria o contexto com tipo genérico
const PerfilContext = createContext<PerfilContextType | undefined>(undefined);

// Tipagem para o Provedor
interface PerfilProviderProps {
    children: ReactNode;
}

// Criação do Provedor
export const PerfilProvider: React.FC<PerfilProviderProps> = ({ children }) => {
    const perfil = perfilList[0] as Perfil; // Assume que o primeiro item da lista é do tipo Perfil
    const [dataPerfil, setDataPerfil] = useState<Perfil>(perfil);

    return (
        <PerfilContext.Provider value={{ dataPerfil, setDataPerfil }}>
            {children}
        </PerfilContext.Provider>
    );
};

// Hook personalizado para consumir o contexto
export const usePerfilContext = (): PerfilContextType => {
    const context = useContext(PerfilContext);
    if (!context) {
        throw new Error('usePerfilContext must be used within a PerfilProvider');
    }
    return context;
};
