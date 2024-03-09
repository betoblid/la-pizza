import { createContext } from "react"
import { ContextProductsType } from "../../@types"

export const ContextProducts = createContext({} as ContextProductsType)
ContextProducts.displayName = "Products"