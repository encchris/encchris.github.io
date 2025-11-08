import NavLink from "./ui-kit/NavLink";

function Header({ showCurriculum, setShowCurriculum }) {
    return (
        <header className="flex flex-wrap md:justify-between items-center justify-center gap-2 bg-[#fafafa] text-white p-5 md:rounded-lg sticky top-0 z-50 no-print">
            <h1 className="text-2xl text-[#111111]">Christian López</h1>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <NavLink 
                            href="#inicio" 
                            showCurriculum={showCurriculum}
                            setShowCurriculum={setShowCurriculum}
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            href="#experiencia"
                            showCurriculum={showCurriculum}
                            setShowCurriculum={setShowCurriculum}
                        >
                            Experiencia
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            href="#curriculum"
                            showCurriculum={showCurriculum}
                            setShowCurriculum={setShowCurriculum}
                        >
                            Curriculum
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            href="#contacto"
                            showCurriculum={showCurriculum}
                            setShowCurriculum={setShowCurriculum}
                        >
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;