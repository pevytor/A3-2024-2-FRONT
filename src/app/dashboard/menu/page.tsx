'use client';

import React, { useState } from "react";
import { Navbar } from "@/components/auth/dashboard/menu/Navbar";
import { TopBar } from "@/components/auth/dashboard/TopBar";
import { Products } from "@/components/main/components/Products";
import { productList } from "@/data/productList";
import { Product } from "@/types/Products/Product";
import { Footer } from "@/components/footer/Footer";
import { Modal } from "@/components/ui/Modal";
import { ProductForm } from "@/components/ui/ProductForm";

export default function Page() {
    const [products, setProducts] = useState<Product[]>(productList);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = () => {
        setIsModalOpen((prev) => !prev); // Alterna entre aberto e fechado
    };

    // Função para adicionar um produto
    const handleAddProduct = (newProductData: Omit<Product, 'id'>) => {
        const newProduct: Product = {
            ...newProductData,  // Mantém os dados preenchidos no formulário
            id: Date.now(),  // Gera um id único baseado no timestamp atual
        };

        setProducts([...products, newProduct]);
        handleModal();
    };

    const handleEditProduct = (productId: number) => {
        setProducts(
            products.map((product) =>
                product.id === productId
                    ? { ...product, title: "Produto Editado" }
                    : product
            )
        );
    };

    const handleDeleteProduct = (productId: number) => {
        setProducts(products.filter((product) => product.id !== productId));
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
                        onAdd={handleAddProduct}  // Passando a função correta para adicionar um produto
                        onEdit={handleEditProduct}
                        onDelete={handleDeleteProduct}
                    />
                </div>
                <Footer />
            </div>

            <Modal isOpen={isModalOpen} onClose={handleModal}>
                <h2 className="text-xl font-bold mb-4">Adicionar Produto</h2>
                <ProductForm onSubmit={handleAddProduct} onCancel={handleModal} />
            </Modal>
        </>
    );
}