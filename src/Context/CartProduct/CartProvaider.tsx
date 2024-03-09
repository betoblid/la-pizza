import { useState } from "react";
import { cartProduct, childrenProps } from "../../@types";
import { CartProduct } from "./CreateContext";


export const CartProvaider = ({children} : childrenProps) => {

    const [ cart, setCart ] = useState<cartProduct[] | []>([]);

    return(
        <CartProduct.Provider value={{cart, setCart }}>
            {
                children
            }
        </CartProduct.Provider>
    )
}