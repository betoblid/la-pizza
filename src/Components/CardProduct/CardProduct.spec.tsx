import { render, screen } from "@testing-library/react"
import { CardProduct } from "./CardProduct"
import { prodctMock } from "../../mock"

const prodctsMock = prodctMock
describe("<CardProduct />", () => {

    it("Verificar se o card está na tela", () => {

        render(<CardProduct products={prodctMock}/>)
        //verifdicar se existe no documento
        expect(screen.getByRole("heading", {name: /la Cuma/i})).toBeInTheDocument();
        //verificar se exite price do product
        expect(screen.getByText(/29.90/i)).toBeInTheDocument()
        //verificar se tem uma descrição
        expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument()
    })
    it("verificar se imagem está na tela", () => {
        render(<CardProduct products={prodctMock}/>)
        //verificar se a imagem está visivel
        expect(screen.getByAltText("La Cuma")).toBeInTheDocument()
    })

    it("criar um snapshot", () => {
        const { container } =  render(<CardProduct products={prodctMock}/>)
    
        expect(container).toMatchSnapshot()
    })
})