import { useState } from "react";
import { tableList as initialTableList } from "@/data/tableList";
import { TableItem } from "@/components/auth/dashboard/tables/TableItem";
import { Button } from "@/components/ui/Button";

export const Tables = () => {
    // Estado para armazenar a lista de mesas
    const [tables, setTables] = useState(initialTableList);

    // Função para adicionar uma nova mesa
    const handleAdd = () => {
        const newTable = {
            id: tables.length + 1, // Gera um novo ID sequencial
            open: true,           // Define o estado inicial como fechado
        };
        setTables([...tables, newTable]); // Atualiza o estado com a nova mesa
    };

    return (
        <>
            <div className="self-end mb-4">
                <Button label="Adicionar mesa" size="medium" cor="sky" onClick={handleAdd} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-8">
                {tables.map((table) => (
                    <TableItem key={table.id} table={table} />
                ))}
            </div>
        </>
    );
};