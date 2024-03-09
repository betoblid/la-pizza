import { Heart } from "lucide-react";
import { Products } from "../../@types";
import { FormatPrice } from "../../utils/FormatPrice";
import { useCart } from "../../Hooks/useCart";
import { useFavorit } from "../../Hooks/useFavorit";
import { memo, useState } from "react";

export const CardProduct = memo(({ products }: Products) => {

    const { description, name, price, thumb } = products;
    const {AddCard } = useCart()
    const { AddFavorit } = useFavorit()
    const [favorit, setfavorit] = useState(false)
    return (

        <div className=" rounded-xl relative ">
            <div className="flex items-center justify-between flex-col text-center max-w-64 w-full shadow-sm rounded-2xl" >

                <div className="flex items-center justify-around w-full bg-gradient-to-b from-transparent from-40% to-[#FEFBF4] to-40%">
                    <div></div>
                    <figure>
                        <img src={thumb} alt={name} title={`pizza de ${name}`} className="w-20" />
                    </figure>
                    <button 
                    className="border-2 border-red-500 rounded-md bg-red-200"
                    onClick={() => {AddFavorit({products}); setfavorit((favorit) => !favorit)}}>
                        {
                            favorit ? <Heart className="text-red-500 bg-red-600" /> : <Heart className="text-red-500" /> 
                        }
                    </button>
                </div>
                <div className="bg-[#FEFBF4]">
                    <h3 className="font-bold font-inter text-xl mt-3">
                        {name}
                    </h3>
                    <p className="font-normal text-sm font-inter my-3">
                        {description}
                    </p>
                    <span className="text-2xl font-bold font-inter">
                        {FormatPrice(price)}
                    </span>
                </div>
                <div className="bg-gradient-to-b from-[#FEFBF4] from-50% to-transparent to-50% w-full pt-5" >
                    <button 
                    className="bg-btn-orange uppercase text-sm font-semibold font-inter px-6 py-2  rounded-3xl"
                    onClick={() => AddCard({products})}>
                        Comprar Agora
                    </button>
                </div>
            </div>
        </div>
    )

})