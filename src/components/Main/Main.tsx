import { useState, useRef } from "react";
import { Categories } from "./components/Categories";
import { Products } from "./components/Products";

export const Main = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
        <div className="w-full py-5">
            <div className="boxed flex flex-col gap-7">
                {/* Componente de Categorias */}
                <Categories onCategorySelect={handleCategorySelect} />

                {/* Componente de Produtos */}
                <Products category={selectedCategory} categoryRefs={categoryRefs} />
            </div>
        </div>
    );
};
