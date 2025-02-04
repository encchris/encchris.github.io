import TechImg from "./ui-kit/TechImg";
                
const imagenes = [
    {
        src: 'img/icono-html.jpg',
        alt: 'logo html'
    },
    {
        src: 'img/icono-css.jpg',
        alt: 'logo css'
    },
    {
        src: 'img/icono-js.jpg',
        alt: 'logo js'
    },
    {
        src: 'img/icono-php.jpg',
        alt: 'logo php'
    },
    {
        src: 'img/icono-mysql.jpg',
        alt: 'logo mysql'
    }
]

function Inicio() {
    return (
        <section id="inicio" className="p-5 grid md:grid-cols-[2fr_270px] gap-5 bg-[#1b2430] md:scroll-mt-[60px] scroll-mt-[110px] w-full">
            <div className="flex flex-col gap-5">

                <div>
                    <h2 className="text-2xl text-gray-300">Hola! Soy Christian López</h2>
                    <h3 className="text-[1.17rem] text-gray-300">Desarrollador Web front-end</h3>
                </div>

                <p className="text-[1.1rem] text-gray-300">
                    Soy un apasionado del diseño web y me esfuerzo por crear experiencias de usuario que sean tanto funcionales como agradables.
                    Mi experiencia abarca la concepción, diseño y desarrollo de sitios web funcionales y fáciles de usar. He creado páginas web para amigos y clientes, aplicando mis conocimientos en: HTML, CSS, JavaScript, PHP, mySQL. Además, desarrollo y mantengo el proyecto personal <a href="https://ellysmemory.com/">Elly´s memory</a>, una plataforma educativa que ofrece servicios de enseñanza en matemáticas y preparación para el examen de ingreso a la Facultad Nacional de Asunción
                </p>

                <div className="flex align-center gap-3 h-20">
                    {
                        imagenes.map(({src, alt}, index) => (
                            <TechImg 
                                key={index}
                                src={src}
                                alt={alt}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="flex items-center p-4 bg-[#fafafa] rounded-lg">
                <img src="img/foto.jpg" alt="Chris foto" />
            </div>
        </section>
    );
}

export default Inicio;