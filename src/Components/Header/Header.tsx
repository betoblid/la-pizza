
import Logo from "../../assets/logo.png"

export const Header = () => {

    return(
        <header className="bg-banner bg-center bg-no-repeat bg-cover py-20">
            <img src={Logo} alt="Logo pizzaria" className="sm:w-96 w-1/2 mx-auto" />
        </header>
    )
}