import { Product } from "@/types/Products/Product";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    product: Product;
    onClick: () => void;
}

export const ProductItem = ({ product, onClick }: Props) => {
    return (
        <div onClick={onClick} className="flex p-3 bg-white rounded-lg cursor-pointer hover:opacity-90">
            <div className="w-28 h-28 rounded-lg bg-cover bg-center"
                style={{
                    backgroundImage: `url('/assets/images/products/${product.cover}')`,
                }}></div>
            <div className="ml-3 flex-1">
                <div className="font-bold">{product.title}</div>
                <div className="text-zinc-400">{product.description}</div>
                <div className="flex justify-between items-center">
                    <div className="font-bold">{product.price}</div>
                    <div><FontAwesomeIcon icon={faCirclePlus} className="size-5" /></div>
                </div>
            </div>
        </div>
    );
}