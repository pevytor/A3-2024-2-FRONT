import React from "react";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
    onAdd?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onAdd }) => {
    return (
        <div className="flex justify-between items-center">
            <div>Categorias</div>
            <div>
                {onAdd && (
                    <Button
                        label="Adicionar novo item"
                        size="medium"
                        cor="sky"
                        onClick={onAdd}
                    />
                )}
            </div>
        </div>
    );
};
