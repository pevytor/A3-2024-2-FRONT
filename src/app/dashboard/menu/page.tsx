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

    console.log("Products in dashboard menu page:", products);

    const handleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    const handleAddProduct = (newProductData: Omit<Product, 'id'>) => {
        const newProduct: Product = {
            ...newProductData,
            id: products.length + 1,
        };
        console.log("Adding product:", newProduct);
        dispatch({ type: 'ADD_PRODUCT', product: newProduct });
        handleModal();
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
                        onAdd={handleAddProduct}
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
