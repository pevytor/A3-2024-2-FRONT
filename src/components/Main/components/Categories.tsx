import { productList } from "@/data/productList";
import { Button } from "@/components/ui/Button";

export const Categories = ({ onCategorySelect }: { onCategorySelect: (category: string | null) => void }) => {
    // Extrai categorias únicas dos produtos usando Set para garantir que não haja duplicatas
    const categories = Array.from(new Set(productList.map(product => product.category)));

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