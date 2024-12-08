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
    addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
    editProduct: (product: Product) => Promise<void>;
    deleteProduct: (productId: number) => Promise<void>;
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
                const response = await axios.get<Product[]>('/api/product');
                dispatch({ type: 'SET_PRODUCTS', products: response.data });
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        };

        fetchProducts();
    }, []);

    const addProduct = async (product: Omit<Product, 'id'>) => {
        try {
            const response = await axios.post<Product>('/api/product', product);
            dispatch({ type: 'ADD_PRODUCT', product: response.data });
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
        }
    };

    const editProduct = async (product: Product) => {
        try {
            await axios.put(`/api/product/${product.id}`, product);
            dispatch({ type: 'EDIT_PRODUCT', product });
        } catch (error) {
            console.error("Erro ao editar produto:", error);
        }
    };

    const deleteProduct = async (productId: number) => {
        try {
            await axios.delete(`/api/product/${productId}`);
            dispatch({ type: 'REMOVE_PRODUCT', productId });
        } catch (error) {
            console.error("Erro ao excluir produto:", error);
        }
    };

    return (
        <ProductsContext.Provider value={{ products, dispatch, addProduct, editProduct, deleteProduct }}>
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
