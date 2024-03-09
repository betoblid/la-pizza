import { useEffect, useState } from "react"
import { ProductProps, childrenProps } from "../../@types"
import { ContextProducts } from "./CreateContext"
import db from "../../Data/db.json"

export const ProductsProvaider = ({ children }: childrenProps) => {

    const [products, setProducts] = useState<ProductProps[]>([])
    const [favorit, setFavorit] = useState<ProductProps[] | []>([])

    useEffect(() => {
        setTimeout(() => {
            setProducts(db.products)
        }, 500);

    }, [])
    return (
        <ContextProducts.Provider value={{ products, favorit, setFavorit }}>
            {
                children
            }
        </ContextProducts.Provider>
    )
}