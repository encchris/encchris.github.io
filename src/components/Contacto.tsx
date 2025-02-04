
import { InfoContacto } from "./ui-kit/InfoContacto";

const infoContacto = [
    {
        leyend: "Número de teléfono:", 
        link: "https://api.whatsapp.com/send/?phone=595983735126&text=Hola Christian,+estoy+interesado+en+tu+perfil&type=phone_number&app_absent=0", 
        text: "(0983) 735-126"
    },
    {
        leyend: "Linkedin:", 
        link: "https://www.linkedin.com/in/christian-l%C3%B3pez-alarc%C3%B3n/", 
        text: "christian-lópez-alarcón"
    },
    {
        leyend: "Github portafolio:", 
        link: "https://encchris.github.io/", 
        text: "Portafolio"
    },
]

function Contacto() {
    return (
        <section id="contacto" className="bg-[#fafafa] p-5 rounded-lg box-border">
            <h2 className="text-2xl mb-[1.5rem]">Contacto</h2>

            {
                infoContacto.map(({leyend, link, text}) => (
                    <InfoContacto 
                        key = {leyend}
                        leyend = {leyend}
                        link = {link}
                        text = {text}
                    />
                ))
            }
            
        </section>
    )
}

export default Contacto;