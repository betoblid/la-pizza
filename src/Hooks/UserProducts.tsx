import { useContext } from "react"
import { ContextProducts } from "../Context/Products/CreateContext"

export const UserProducts = () => {
    return useContext(ContextProducts)
}