function Contacto() {
    return (
        <section id="contacto" className="bg-[#fafafa] p-5 rounded-lg box-border">
            <h2 className="text-2xl mb-[1.5rem]">Contacto</h2>
            <div className="flex items-center gap-3">
                <span className="text-[1.2rem]"><strong>Número de teléfono:</strong></span>
                <span className="flex items-center gap-1">
                    <a className="text-[1rem]" href="https://api.whatsapp.com/send/?phone=595983735126&text=Hola Christian,+estoy+interesado+en+tu+perfil&type=phone_number&app_absent=0">
                        (0983) 735-126
                    </a>
                    <img src="img/dir.svg" alt="redirect-svg" />
                </span>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-[1.2rem]"><strong>Linkedin:</strong></span>
                <span className="flex items-center gap-1">
                    <a className="text-[1rem]" href="https://www.linkedin.com/in/christian-l%C3%B3pez-alarc%C3%B3n/">
                        christian-lópez-alarcón
                    </a>
                    <img src="img/dir.svg" alt="redirect-svg" />
                </span>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-[1.2rem]"><strong>Github portafolio:</strong></span>
                <span className="flex items-center gap-1">
                    <a className="text-[1rem]" href="https://encchris.github.io/">
                        Portafolio
                    </a>
                    <img src="img/dir.svg" alt="redirect-svg" />
                </span>
            </div>
        </section>
    )
}

export default Contacto;