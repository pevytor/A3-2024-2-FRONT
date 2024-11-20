import { Categories } from "@/components/main/components/Categories";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
    const handleAdd = () => {

    }
    return (
        <div className="flex justify-between items-center">
            <Categories />
            <div>
                <Button label="Adicionar novo item" size="medium" cor="sky" onClick={handleAdd} />
            </div>
        </div>
    );
}