import { productList } from "@/data/productList";
import { ProductItem } from "@/components/main/components/ProductItem";

export const Products = ({
    category,
    categoryRefs,
}: {
    category: string | null;
    categoryRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
}) => {
    // Agrupa produtos por categoria
    const groupedProducts = productList.reduce((acc, product) => {
        if (!acc[product.category]) acc[product.category] = [];
        acc[product.category].push(product);
        return acc;
    }, {} as Record<string, typeof productList>);

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
                    {/* Título da Categoria */}
                    <h2 className="text-xl font-bold mb-3">{categoryName}</h2>

                    {/* Produtos da Categoria */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {products.map((product) => (
                            <ProductItem key={product.id} product={product} onClick={() => { }} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};