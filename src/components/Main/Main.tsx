import { useState, useEffect, useRef } from "react";
import { Categories } from "./components/Categories";
import { Products } from "./components/Products";
import { productList } from "@/data/productList";
import { Product } from "@/types/Products/Product";

export const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [products, setProducts] = useState<Product[]>(productList); // Definindo a lista de produtos

    // Criar referência para as categorias
    const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // Manipula a seleção de categoria e faz scroll
    const handleCategorySelect = (category: string | null) => {
        setSelectedCategory(category);

        if (category && categoryRefs.current[category]) {
            // Faz scroll para a categoria correspondente
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
                    products={products} // Passando a lista de produtos aqui
                />
            </div>
        </div>
    );
};