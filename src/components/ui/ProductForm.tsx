import { Product } from "@/types/Products/Product";
import React, { useState } from "react";

interface ProductFormProps {
    onSubmit: (product: Omit<Product, 'id'>) => void; // Esperando um produto sem o 'id'
    onCancel: () => void;
}


export const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, onCancel }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState("");
    const [cover, setCover] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ title, description, price, category, cover });
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
                    onChange={(e) => setPrice(Number(e.target.value))}
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

            <div className="flex gap-4 justify-end mt-4">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Adicionar Produto
                </button>
            </div>
        </form>
    );
};