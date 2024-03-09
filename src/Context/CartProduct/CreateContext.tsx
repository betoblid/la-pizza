import { createContext } from "react";
import { ContextCartType } from "../../@types";


export const CartProduct = createContext({} as ContextCartType)
CartProduct.displayName = "cart Product"