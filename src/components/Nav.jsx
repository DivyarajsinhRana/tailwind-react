import { headerLogo } from "../assets/images"

const Nav = () => {
    return (
        <header>
            <nav>
                <a href="/">
                    <img src={headerLogo} alt="logo" />
                </a>
            </nav>
        </header>
    )
}

export default Nav