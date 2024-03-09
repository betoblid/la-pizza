import { ReactNode } from "react"

export interface ProductProps {
    id: string,
    thumb: string,
    name: string,
    description: string,
    price: number
}

export interface Products {
    products: ProductProps
}

export interface childrenProps {
    children: ReactNode
} 

export interface ContextProductsType {
    
    products: ProductProps[],
    favorit: ProductProps[] | [],
    setFavorit: React.Dispatch<React.SetStateAction<ProductProps[] | []>>,
}

export interface cartProduct {
     
        id: string,
        thumb: string,
        name: string,
        description: string,
        price: number,
        qtn: number
    
}
export interface ContextCartType {

    cart: cartProduct[] | [],
    setCart:  React.Dispatch<React.SetStateAction<cartProduct[] | []>>,
}