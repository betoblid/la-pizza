import { Products } from "../@types";
import { useProvaiderCart } from "./useProvaiderCart";

export const useCart = () => {
    //pegando os valores do carrinho
    const { cart, setCart } = useProvaiderCart()
    //function para dd ao carrinho
    function AddCard({ products }: Products) {
        //checar se já existe um
        let check = cart.find((iten) => iten.id === products.id)
        //se existir adicione mais 1 produto
        if (!!check) {
            let newList = cart.map((product) => {

                if(product.id === products.id){
                    return{
                        ...product,
                        qtn: ++product.qtn //incrementando o valor de quantidade
                    }
                }
                return product //retorna caso a condição seja falsa
            })
            setCart(newList)
            return
        }
        //caso não exista adicione um produto ao carrinho
        if (products !== undefined) {
            console.log("criou novo produto")
            let newProduct = [products].map((iten) => {
                return {
                    ...iten,
                    qtn: 1
                }
            }) 
            setCart([...cart, ...newProduct])
            console.log(cart)
            return
        }
    }

    function RemoveProduct(id: string) {

        setCart((prevProduct) => prevProduct.filter((iten) => iten.id !== id))
        return
    }

    return {
        AddCard,
        RemoveProduct
    }
}