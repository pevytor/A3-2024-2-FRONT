import { Product } from "@/types/Products/Product";
import { ProductItem } from "@/components/main/components/ProductItem";

interface ProductsProps {
    category: string | null;
    categoryRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
    products: Product[];
    onAdd?: (newProduct: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({
    category,
    categoryRefs,
    products,
    onAdd,
}) => {
    const groupedProducts = products?.reduce((acc, product) => {
        if (!acc[product.category]) acc[product.category] = [];
        acc[product.category].push(product);
        return acc;
    }, {} as Record<string, Product[]>) || {};

    return (
        <div>
            {Object.entries(groupedProducts).map(([categoryName, products]) => (
                <div
                    key={categoryName}
                    ref={(el) => {
                        if (categoryRefs.current) {
                            categoryRefs.current[categoryName] = el;
                        }
                    }}
                    className="mb-6"
                >
                    <h2 className="text-xl font-bold mb-3 flex justify-between items-center">
                        {categoryName}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {products.map((product) => (
                            <ProductItem
                                key={product.id}
                                product={product}
                                onClick={() => { }}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
