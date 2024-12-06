import { Product } from "@/types/Products/Product";

export type Action =
    | { type: 'ADD_PRODUCT'; product: Product }
    | { type: 'SET_PRODUCTS'; products: Product[] };

export const productReducer = (state: Product[], action: Action): Product[] => {

    switch (action.type) {
        case 'ADD_PRODUCT':
            const updatedState = [...state, action.product];
            return updatedState;
        case 'SET_PRODUCTS':
            return action.products;
        default:
            return state;
    }
};
