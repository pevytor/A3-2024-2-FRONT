'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import { Product } from "@/types/Products/Product";
import axios from "axios";

type Action =
    | { type: 'ADD_PRODUCT'; product: Product }
    | { type: 'REMOVE_PRODUCT'; productId: number }
    | { type: 'EDIT_PRODUCT'; product: Product }
    | { type: 'SET_PRODUCTS'; products: Product[] };

interface ProductsContextType {
    products: Product[];
    dispatch: React.Dispatch<Action>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

const productsReducer = (state: Product[], action: Action): Product[] => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.product];
        case 'REMOVE_PRODUCT':
            return state.filter(product => product.id !== action.productId);
        case 'EDIT_PRODUCT':
            return state.map((p) => (p.id === action.product.id ? action.product : p));
        case 'SET_PRODUCTS':
            return action.products;
        default:
            return state;
    }
};

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, dispatch] = useReducer(productsReducer, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>('/api/product'); // Caminho relativo
                dispatch({ type: 'SET_PRODUCTS', products: response.data });
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, dispatch }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('useProducts deve ser usado dentro de um ProductsProvider');
    }
    return context;
};
