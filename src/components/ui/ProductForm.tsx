import { Product } from "@/types/Products/Product";
import React, { useState, useEffect } from "react";

interface ProductFormProps {
    product?: Product; // Produto opcional para edição
    onSubmit: (product: Product) => void;
    onCancel: () => void;
    onDelete?: () => void; // Adicionando a função de excluir
}

export const ProductForm: React.FC<ProductFormProps> = ({ product, onSubmit, onCancel, onDelete }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState<number | "">("");
    const [category, setCategory] = useState("");
    const [cover, setCover] = useState("");

    useEffect(() => {
        if (product) {
            setTitle(product.name);
            setDescription(product.description);
            setPrice(product.price);
            setCategory(product.category);
            setCover(product.cover);
        }
    }, [product]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const priceValue = price === "" ? 0 : price;

        onSubmit({ id: product?.id || 0, name, description, price: priceValue, category, cover });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Título</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                />
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descrição</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                />
            </div>

            <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Preço</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                />
            </div>

            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoria</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                />
            </div>

            <div>
                <label htmlFor="cover" className="block text-sm font-medium text-gray-700">Imagem</label>
                <input
                    type="text"
                    id="cover"
                    value={cover}
                    onChange={(e) => setCover(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    required
                />
            </div>

            <div className="flex text-sm gap-2 justify-end mt-4">
                {/* Botão de Excluir */}
                {product && onDelete && (
                    <button
                        type="button"
                        onClick={onDelete}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Excluir Produto
                    </button>
                )}

                {/* Botão de Cancelar */}
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Cancelar
                </button>

                {/* Botão de Salvar */}
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    {product ? "Salvar Alterações" : "Adicionar Produto"}
                </button>
            </div>
        </form>
    );
};
