import { Product } from "@/types/Products/Product";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    product: Product;
    onClick: () => void;
    onDelete: () => void;
};

export const ProductItem = ({ product, onClick, onDelete }: Props) => {

    return (
        <div onClick={onClick} className="flex p-3 bg-white rounded-lg cursor-pointer hover:opacity-90 hover:drop-shadow-md group">
            <div
                className="w-28 h-28 rounded-lg bg-cover bg-center"
                style={{
                    backgroundImage: `url('/assets/images/products/${product.cover || '1.jpg'}')`, // Usa imagem padrão se `product.cover` estiver indefinido
                }}
            ></div>
            <div className="ml-3 flex-1 flex flex-col justify-between">
                <div>
                    <div className="font-bold">{product.name}</div>
                    <div className="text-zinc-400 line-clamp-2 leading-tight">{product.description}</div>
                </div>

                <div className="flex justify-between items-center mt-auto">
                    <div className="font-bold">R$ {product.price ? product.price.toFixed(2) : '0.00'}</div>
                    <div>
                        <FontAwesomeIcon
                            icon={faCirclePlus}
                            className="size-5 text-zinc-400 group-hover:text-zinc-800"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
