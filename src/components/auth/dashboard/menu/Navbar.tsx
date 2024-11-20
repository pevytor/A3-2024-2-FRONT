import React from "react";
import { Button } from "@/components/ui/Button";

interface NavbarProps {
    onAdd?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onAdd }) => {
    return (
        <div className="flex self-end">
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