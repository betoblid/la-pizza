import { useCallback } from "react"
import { Products } from "../@types"
import { UserProducts } from "./UserProducts"

export function useFavorit() {

    const { favorit, setFavorit } = UserProducts()

    function AddFavorit({ products }: Products) {

        let checkExist = favorit.find((iten) => iten.id === products.id)
        console.log(!!checkExist)

        if (!!checkExist) {
            //removendo da lista
            setFavorit((prevFavorit) => prevFavorit.filter((iten) => iten.id !== products.id))
            return
        }
        //adicionando a lista
        setFavorit([...favorit, products])
        return
    }

    
    return {
        AddFavorit,
        favorit
    }
}