import { useState } from "react";
import DynamicGrid from "./ImgRotation";

function Experiencia() {

    const [currentSkills, setCurrentSkills] = useState<string[]>([]); // Estado en el padre

    const handleSkillsChange = (skills: string[]) => {
        setCurrentSkills(skills); // Actualiza el estado en el padre
    };

    return (
        <section id="experiencia" className="md:scroll-mt-[60px] scroll-mt-[110px] p-5 w-full box-border bg-[#1b2430]">
                <h2 className="text-2xl text-gray-300 py-5">Experiencia y desarrollo personal</h2>
                
                <article className="grid xl:grid-cols-[800px_1fr] md:grid-cols-[550px_1fr] sm:grid-cols-1 gap-5 items-center">
                    
                    <DynamicGrid onSkillsChange={handleSkillsChange} /> {/* Pasa la función al hijo */}
                    
                    <div>
                        <h3 className="text-2xl mb-[1.5rem] text-gray-300">Elly´s memory</h3>
                        <p className="text-[1.1rem] mb-[1.5rem] text-gray-300">
                            Elly´s memory es un proyecto personal que nace de la necesidad de ofrecer servicios de enseñanza en matemáticas y preparación para el examen de ingreso a la Facultad Nacional de Asunción. La plataforma ofrece cursos online, ejercicios y exámenes de práctica.
                        </p>
                        <ul className="flex flex-col gap-4">
                            <span className="text-[1.1rem] mb-[1.5rem] text-gray-300">Conocimiento aplicado:</span>
                            {currentSkills.map((skill, index) => (
                                <li key={index} className="bg-violet-100 p-5 rounded-lg">
                                    <strong>{skill}</strong>
                                </li>
                            ))} 
                        </ul>
                    </div>
                </article>
        </section>
    );
}

export default Experiencia;