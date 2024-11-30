import { Product } from "@/types/Products/Product";

export type Action =
    | { type: 'ADD_PRODUCT'; product: Product }
    | { type: 'SET_PRODUCTS'; products: Product[] };

export const productReducer = (state: Product[], action: Action): Product[] => {
    console.log("Reducer called with action:", action);
    console.log("Current state before action:", state);

    switch (action.type) {
        case 'ADD_PRODUCT':
            const updatedState = [...state, action.product];
            console.log("Updated state after ADD_PRODUCT:", updatedState);
            return updatedState;
        case 'SET_PRODUCTS':
            console.log("State replaced by SET_PRODUCTS:", action.products);
            return action.products;
        default:
            console.log("Unknown action type, returning current state.");
            return state;
    }
};
