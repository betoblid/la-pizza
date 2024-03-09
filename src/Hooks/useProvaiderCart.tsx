import { useContext } from "react"
import { CartProduct } from "../Context/CartProduct/CreateContext"

export const useProvaiderCart = () => {
    return useContext(CartProduct)
}