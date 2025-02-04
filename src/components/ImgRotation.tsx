import React, { useState, useEffect, useRef } from 'react';

interface ImageData {
  src: string;
  alt: string;
  skills: string[];
}

const imageData: ImageData[] = [
  { 
    src: 'img/captura-home-elly.png', 
    alt: 'captura home elly',
    skills: ['HTML', 'CSS', 'JAVASCRIPT', 'PHP', 'MYSQL']
  },
  { 
    src: 'img/captura-registro-elly.png', 
    alt: 'captura registro elly',
    skills: [
      "AUTENTICACIÓN DE USUARIOS",
      "SEGURIDAD",
      "SESIONES",
      "EXPERIENCIA DE USUARIO (UX)",
      "DISEÑO RESPONSIVO"
    ]
  },
  { 
    src: 'img/captura-home2-elly.png', 
    alt: 'captura home2 elly',
    skills: [
      "DISEÑO INTUITIVO",
      "INTEGRACIÓN DE BD",
      "DESARROLLO DE API",
      "CONSULTAS SQL",
      "DISEÑO RESPONSIVO"
    ]
  },
  { 
    src: 'img/captura-dashboard-elly.png', 
    alt: 'captura dashboard elly',
    skills: [
      "CRUD",
      "FORMULARIO ADMINISTRATIVO",
      "LISTADO Y VISUALIZACIÓN DE DATOS",
      "PAGINACIÓN",
      "DISEÑO RESPONSIVO"
    ]
  },
  { 
    src: 'img/captura-leccion-algebra-elly.png', 
    alt: 'captura leccion-algebra elly',
    skills: [
      "CONSULTA DINÁMICA",
      "OPTIMIZACIÓN DE CONSULTAS",
      "RELACIONES ENTRE TABLAS",
      "ORGANIZACIÓN DE CONTENIDO",
      "DISEÑO RESPONSIVO"
    ]
  },
];

interface DynamicGridProps {
  onSkillsChange: (skills: string[]) => void; // Nueva prop para comunicar las habilidades
}

const DynamicGrid: React.FC<DynamicGridProps> = ({ onSkillsChange }) => {
  const [currentImages, setCurrentImages] = useState<ImageData[]>(imageData);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Enviar las skills iniciales al montar el componente
    onSkillsChange(currentImages[0].skills);

    const rotateImages = () => {
      setCurrentImages((prevImages) => {
        const newImages = [...prevImages.slice(1), prevImages[0]];
        return newImages; // Retornar el nuevo array para actualizar el estado
      });
    };

    intervalRef.current = setInterval(rotateImages, 7000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [onSkillsChange]); // Dependencias: solo onSkillsChange

  useEffect(() => {
    // Este useEffect se ejecuta cuando currentImages cambia (por la rotación)
    onSkillsChange(currentImages[0].skills);
  }, [currentImages, onSkillsChange]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {currentImages.map((image, index) => {
        const isMainImage = index === 0;
        return (
          <img
            key={index}
            className={`${
              isMainImage
                ? 'row-span-2 xl:col-span-2 md:col-span-4 w-full xl:h-full h-[400px] rounded-lg object-cover'
                : 'md:block h-[150px] w-full rounded-lg bg-gray-950/5 xl:aspect-square hidden'
            }`}
            src={image.src}
            alt={image.alt}
          />
        );
      })}
    </div>
  );
};

export default DynamicGrid;