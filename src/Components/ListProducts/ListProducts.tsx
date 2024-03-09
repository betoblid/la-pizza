import { UserProducts } from "../../Hooks/UserProducts"
import { CardProduct } from "../CardProduct/CardProduct";


export const ListProducts = () => {

    const { products } = UserProducts();

    return (

        <div className="bg-list bg-center bg-no-repeat bg-cover bg-fixed py-20 w-full">

            <h2 className="font-bold text-center text-4xl">
                Mais vendidas
            </h2>

            <div className="flex items-center gap-4 justify-center mt-10 flex-wrap">
                {
                    products.length === 0 && <h2 className="font-bold text-3xl my-10">Carregando dados</h2>
                }
                {
                    products.length > 0 && products.map((iten) => {
                        return (
                            <CardProduct key={iten.id} products={iten} />
                        )
                    })
                }
            </div>
        </div>
    )
}