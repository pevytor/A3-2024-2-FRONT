import { productList } from "@/data/productList";
import { Button } from "@/components/ui/Button";

export const Categories = ({ onCategorySelect }: { onCategorySelect: (category: string | null) => void }) => {
    // Extrai categorias únicas dos produtos
    const categories = Object.keys(
        productList.reduce((acc, product) => {
            acc[product.category] = true;
            return acc;
        }, {} as Record<string, boolean>)
    );

    return (
        <div className="flex gap-3 overflow-x-auto whitespace-nowrap scrollbar-none">
            {/* Botão para Todas as Categorias */}
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
