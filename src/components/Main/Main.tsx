'use client';

import { useState, useRef } from "react";
import { Categories } from "./components/Categories";
import { Products } from "./components/Products";
import { useProducts } from "@/contexts/ProductsContext";

export const Main = () => {
    const { products } = useProducts();
    console.log("Products in Main component:", products);

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

    const handleCategorySelect = (category: string | null) => {
        setSelectedCategory(category);

        if (category && categoryRefs.current[category]) {
            categoryRefs.current[category]?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-full py-5 px-1">
            <div className="boxed flex flex-col gap-7">
                <Categories onCategorySelect={handleCategorySelect} />
                <Products
                    category={selectedCategory}
                    categoryRefs={categoryRefs}
                    products={products}
                />
            </div>
        </div>
    );
};
