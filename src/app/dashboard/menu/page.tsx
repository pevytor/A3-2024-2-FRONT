'use client'

import React, { useState } from "react";
import { Navbar } from "@/components/auth/dashboard/menu/Navbar";
import { TopBar } from "@/components/auth/dashboard/TopBar";
import { Products } from "@/components/main/components/Products";
import { productList } from "@/data/productList";
import { Product } from "@/types/Products/Product";

export default function Page() {
    const [products, setProducts] = useState<Product[]>(productList);

    const handleAddProduct = () => {
        const newProduct: Product = {
            id: Date.now(), // Gera um ID único
            title: "Novo Produto",
            description: "Descrição do novo produto",
            price: 0,
            category: "Categoria",
            cover: "imagem.jpg",
        };
        setProducts([...products, newProduct]);
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
        <div className="w-screen h-screen gap-3">
            <TopBar />
            <div className="boxed flex flex-col mt-5 gap-7">
                <Navbar onAdd={handleAddProduct} />
            </div>

            <div className="boxed">
                <Products
                    category={null}
                    categoryRefs={React.createRef()}
                    products={products}
                    onAdd={handleAddProduct}
                    onEdit={handleEditProduct}
                    onDelete={handleDeleteProduct}
                />
            </div>
        </div>
    );
}