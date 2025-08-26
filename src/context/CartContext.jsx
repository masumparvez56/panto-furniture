/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        if (cartItems.some((item) => item.id === product.id)) {
            // alert("product already added to cart");
            Swal.fire({
                title: "Opps!",
                text: "This product is already in your Cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
            })
        } else {
            setCartItems(prevItem => [...prevItem, product])
            Swal.fire({
                title: "Added",
                text: "This product is added in your Cart!",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
            })
        }
    }

    const cartCount = cartItems.length;

    return (
        <CartContext.Provider value={{ cartCount, addToCart }}>
            {children}
        </CartContext.Provider>
    )
}
