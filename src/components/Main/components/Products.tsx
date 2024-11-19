import { productList } from "@/data/productList";
import { ProductItem } from "./ProductItem";

export const Products = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {productList.map(item => (
                <ProductItem
                    key={item.id}
                    product={item}
                    onClick={() => { }}
                />
            ))}
        </div>
    );
}