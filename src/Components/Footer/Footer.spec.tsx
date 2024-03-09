import { render, screen } from "@testing-library/react"
import { Footer } from "./Footer"

describe("<Footer />", () => {

    it("verificar se tem um paragrafo", () => {
        render(<Footer />)

        expect(screen.getByText(/Desenvolvido/i)).toBeInTheDocument()
    })
    it("verificar se tem um link", () => {
        render(<Footer />)
        expect(screen.getByRole("link", {name: /herbert/i})).toBeInTheDocument()
    })
    it("cirar um snapshot", () => {
        const { container } =  render(<Footer />)

        expect(container).toMatchSnapshot()
    })
})