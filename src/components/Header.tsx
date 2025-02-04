import NavLink from "./ui-kit/NavLink";

function Header() {
    return (
        <header className="flex flex-wrap md:justify-between items-center justify-center gap-2 bg-[#fafafa] text-white p-5 md:rounded-lg sticky top-0">
            <h1 className="text-2xl text-[#111111]">Christian López</h1>
            <nav>
                <ul className="flex gap-4">
                    <NavLink href="#inicio" children="Inicio"/>
                    <NavLink href="#experiencia" children="Experiencia"/>
                    <NavLink href="#contacto" children="Contacto"/>
                </ul>
            </nav>
        </header>
    )
}

export default Header;