'use client';

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { productList } from "@/data/productList";
import { Product } from "@/types/Products/Product";

type Action =
    | { type: 'ADD_PRODUCT'; product: Product }
    | { type: 'REMOVE_PRODUCT'; productId: number }
    | { type: 'EDIT_PRODUCT'; product: Product };

interface ProductsContextType {
    products: Product[];
    dispatch: React.Dispatch<Action>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

const productsReducer = (state: Product[], action: Action): Product[] => {

    switch (action.type) {
        case 'ADD_PRODUCT':
            const updatedState = [...state, action.product];
            return updatedState;
        case 'REMOVE_PRODUCT':
            const filteredState = state.filter(product => product.id !== action.productId);
            return filteredState;
        case 'EDIT_PRODUCT':
            return state.map((p) => (p.id === action.product.id ? action.product : p));
        default:
            return state;
    }
};

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, dispatch] = useReducer(productsReducer, productList);

    return (
        <ProductsContext.Provider value={{ products, dispatch }}>
            {children}
        </ProductsContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
};
