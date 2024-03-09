

export const FormatPrice = (price: number) => {

    return price.toLocaleString("PT-BR", {style: "currency", currency: "BRL"})
}