'use client';

import React, { useState } from "react";
import { Navbar } from "@/components/dashboard/menu/Navbar";
import { TopBar } from "@/components/dashboard/TopBar";
import { Products } from "@/components/main/components/Products";
import { Footer } from "@/components/footer/Footer";
import { Modal } from "@/components/ui/Modal";
import { ProductForm } from "@/components/ui/ProductForm";
import { useProducts } from "@/contexts/ProductsContext";
import { Product } from "@/types/Products/Product";

export default function Page() {
    const { products, dispatch } = useProducts();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productToEdit, setProductToEdit] = useState<Product | null>(null);

    const handleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    const handleAddProduct = (newProductData: Omit<Product, 'id'>) => {
        const newProduct: Product = {
            ...newProductData,
            id: products.length + 1,
        };
        dispatch({ type: 'ADD_PRODUCT', product: newProduct });
        handleModal();
    };

    const handleEditProduct = (product: Product) => {
        setProductToEdit(product);
        setIsModalOpen(true);
    };

    const handleSaveProduct = (editedProduct: Product) => {
        dispatch({ type: 'EDIT_PRODUCT', product: editedProduct });
        setProductToEdit(null);
        setIsModalOpen(false);
    };

    const handleDeleteProduct = () => {
        if (productToEdit) {
            dispatch({ type: 'REMOVE_PRODUCT', productId: productToEdit.id });
            setProductToEdit(null);
            setIsModalOpen(false);
        }
    };

    return (
        <>
            <div className="w-screen h-screen gap-3">
                <TopBar />
                <div className="boxed flex flex-col mt-5 gap-7">
                    <Navbar onAdd={handleModal} />
                </div>

                <div className="boxed">
                    <Products
                        category={null}
                        categoryRefs={React.createRef()}
                        products={products}
                        onEdit={handleEditProduct}
                    />
                </div>
                <Footer />
            </div>

            <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setProductToEdit(null); }} title={productToEdit ? 'Editar Produto' : 'Adicionar Produto'}>
                <ProductForm
                    product={productToEdit || undefined}
                    onSubmit={productToEdit ? handleSaveProduct : handleAddProduct}
                    onCancel={() => { setIsModalOpen(false); setProductToEdit(null); }}
                    onDelete={handleDeleteProduct} // Passando a função de excluir
                />
            </Modal>
        </>
    );
}
