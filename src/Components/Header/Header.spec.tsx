import { render, screen } from "@testing-library/react"
import { Header } from "./Header"


describe("<Header />", () => {

    it("verificar se o Header está na tela", () => {
        render(<Header />)

        expect(screen.getByAltText(/pizzaria/i)).toBeInTheDocument()
    })
    it("criar um snapshot", () => {
        const {container } = render(<Header />)

        expect(container).toMatchSnapshot()
    })
})