import logo from "../assets/react.svg"

export default function Header() {

    return (
        <header className="header">
            <img src={logo} alt="logo"/>
            <h1>React Facts</h1>
            <nav>
                <ul className="nav-list">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
