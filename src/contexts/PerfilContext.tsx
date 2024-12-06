'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Perfil } from '@/types/Perfil/Perfil';
import axios from 'axios';

// Tipagem do contexto
interface PerfilContextType {
    dataPerfil: Perfil | null;
    setDataPerfil: React.Dispatch<React.SetStateAction<Perfil | null>>;
}

// Criação do contexto
const PerfilContext = createContext<PerfilContextType | undefined>(undefined);

// Provedor do contexto
interface PerfilProviderProps {
    children: ReactNode;
}

export const PerfilProvider: React.FC<PerfilProviderProps> = ({ children }) => {
    const [dataPerfil, setDataPerfil] = useState<Perfil | null>(null);

    // Busca dados da API no carregamento inicial
    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                const response = await axios.get('/api/perfil');
                const data: Perfil[] = response.data; // Tipagem explícita do dado
                if (data.length > 0) {
                    setDataPerfil(data[0]); // Seleciona o primeiro perfil
                }
            } catch (error) {
                console.error('Erro ao buscar dados do perfil:', error);
            }
        };

        fetchPerfil();
    }, []); // Executa apenas uma vez ao montar o componente

    return (
        <PerfilContext.Provider value={{ dataPerfil, setDataPerfil }}>
            {children}
        </PerfilContext.Provider>
    );
};

// Hook personalizado
export const usePerfilContext = (): PerfilContextType => {
    const context = useContext(PerfilContext);
    if (!context) {
        throw new Error('usePerfilContext must be used within a PerfilProvider');
    }
    return context;
};
