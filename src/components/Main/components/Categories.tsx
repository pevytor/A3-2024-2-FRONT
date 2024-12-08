import { Button } from "@/components/ui/Button";
import { useProducts } from "@/contexts/ProductsContext";

export const Categories = ({ onCategorySelect }: { onCategorySelect: (category: string | null) => void }) => {
    const { products } = useProducts();

    // Extrai categorias únicas dos produtos usando Set
    const categories = Array.from(new Set(products.map(product => product.category)));

    return (
        <div className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-none">
            <Button
                label="Todas"
                size="medium"
                cor="light"
                onClick={() => onCategorySelect(null)}
            />

            {/* Botões Dinâmicos de Categorias */}
            {categories.map((category) => (
                <Button
                    key={category}
                    label={category}
                    size="medium"
                    cor="light"
                    onClick={() => onCategorySelect(category)}
                />
            ))}
        </div>
    );
};
