'use client';

import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { productList } from "@/data/productList";
import { Product } from "@/types/Products/Product";

type Action =
    | { type: 'ADD_PRODUCT'; product: Product }
    | { type: 'REMOVE_PRODUCT'; productId: number };

interface ProductsContextType {
    products: Product[];
    dispatch: React.Dispatch<Action>;
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

const productsReducer = (state: Product[], action: Action): Product[] => {
    console.log("Reducer called with action:", action);
    console.log("Current state before action:", state);

    switch (action.type) {
        case 'ADD_PRODUCT':
            const updatedState = [...state, action.product];
            console.log("Updated state after ADD_PRODUCT:", updatedState);
            return updatedState;
        case 'REMOVE_PRODUCT':
            const filteredState = state.filter(product => product.id !== action.productId);
            console.log("Updated state after REMOVE_PRODUCT:", filteredState);
            return filteredState;
        default:
            console.log("Unknown action type, returning current state.");
            return state;
    }
};

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [products, dispatch] = useReducer(productsReducer, productList);
    console.log("ProductsProvider initialized with products:", products);

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
