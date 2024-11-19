import { Table } from "@/types/Dashboard/Table";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    table: Table;
}

export const TableItem = ({ table }: Props) => {
    return (
        <div
            className={`flex text-white min-w-28 justify-center items-center gap-3 rounded-lg p-5
        ${table.open ? 'bg-sky-600' : 'bg-zinc-600'}
    `}
        >
            <FontAwesomeIcon icon={faUtensils} className="size-5" />
            <div className="text-xl flex-1">MESA {table.id}</div>
        </div>

    );
}