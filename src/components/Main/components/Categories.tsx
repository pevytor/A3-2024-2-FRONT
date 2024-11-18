import { Button } from "@/components/ui/Button";

export const Categories = () => {
    const handleCategory = () => {
        alert('Categoria');
    }
    return (
        <div className="flex gap-3">
            <Button label="Hamburguer" size="medium" cor="light" onClick={handleCategory} />
            <Button label="Pastel" size="medium" cor="light" onClick={handleCategory} />
            <Button label="Bebidas" size="medium" cor="light" onClick={handleCategory} />
            <Button label="Kids" size="medium" cor="light" onClick={handleCategory} />
        </div>
    );
}