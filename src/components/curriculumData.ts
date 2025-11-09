
export interface DatosPersonales {
    nombre: string;
    profesion: string;
    telefono: string;
    email: string;
    ubicacion: string;
    linkedin: string;
    portfolio: string;
}

export interface Habilidades {
    informatica: string[];
    electronica: string[];
    comunicacion: string[];
}

export interface ExperienciaItem {
    periodo: string;
    empresa: string;
    cargo: string;
    funciones: string;
}

export interface ReferenciasItem {
    empresa: string;
    direccion: string;
    telefono: string;
}

export interface FormacionAcademicaItem {
    titulo: string;
    institucion: string;
    periodo: string;
}

export const datosPersonales: DatosPersonales = {
    nombre: "Christian Rafael López Alarcón",
    profesion: "Desarrollador web - Full Stack",
    telefono: "---",
    email: "encchris90@gmail.com",
    ubicacion: "Mariano Roque Alonso, Paraguay",
    linkedin: "linkedin.com/in/christian-lópez-alarcón",
    portfolio: "encchris.github.io/"
  };

export const perfilProfesional: string = "Mi experiencia abarca la concepción, diseño y desarrollo de sitios web funcionales y fáciles de usar. He creado páginas web utilizando React js y React Native para amigos y clientes, aplicando mis conocimientos en: HTML, CSS, JavaScript, PHP, mySQL. Además, desarrollo y mantengo el proyecto personal https://ellysmemory.com/ , una plataforma educativa que ofrece servicios de enseñanza en matemáticas y preparación para el examen de ingreso a la Facultad Nacional de Asunción. Este proyecto me ha permitido profundizar en: diseño responsive, UX/UI, optimización de rendimiento y gestión de usuarios.";

export const habilidades: Habilidades = {
    informatica: [
      "Desarrollo Web Full Stack (React, Node.js)",
      "Bases de Datos (SQL, PostgreSQL)",
      "Programación (JavaScript, Python, PHP)",
      "Control de Versiones (Git, Docker)",
      "Desarrollo Front-end (HTML, CSS, Tailwindcss, Bootstrapcss, Reactjs, JQuery)"
    ],
    electronica: [
      "Automatización Industrial - UPS",
      "Mantenimiento de Equipos Electrónicos"
    ],
    comunicacion: [
      "Liderazgo Técnico y Mentoreo",
      "Gestión de Proyectos Ágiles",
      "Colaboración y Sinergia",
      "Adaptabilidad y Aprendizaje Continuo",
      "Enfoque en Resultados y Calidad",
      "Proactividad y Resolución de Problemas"
    ]
  };

export const experiencia: ExperienciaItem[] = [
    {
      periodo: "2025 - Presente",
      empresa: "SENDIT S.A.",
      cargo: "Desarrollador Full Stack",
      funciones: "Mi función principal es diseñar, desarrollar y mantener aplicaciones web, debo optimizar el rendimiento del sitio y asegurar el correcto funcionamiento de la parte operativa de la empresa, incluyendo los calculos de envíos, recargos y la gestion de usuarios y paquetes. Tambien realizo reportes y automatización de tareas. Utilizo tecnologías como PHP, MySQL, JavaScript, HTML, CSS, Codeigniter, Docker, GIT, Python."
    },
    {
      periodo: "2022 - 2024",
      empresa: "Desarrollador - Freelance",
      cargo: "Desarrollador Web y profesor particular",
      funciones: "Desarrollo de sistemas web, mantenimiento de aplicaciones existentes, integración de APIs y enseñanza para estudiantes de nivel secundario y universitario. Proyectos de Tesis y culminación de grados aplicando tecnologias web."
    },
    {
      periodo: "2015 - 2022",
      empresa: "Capacitador en Ofimática y profesor particular.",
      cargo: "Profesor - Freelance",
      funciones: "El trabajo que estuve realizando es el de enseñar y capacitar al personal de algunas empresas que van migrando de la ardua tarea de presentar los informes a mano a presentarlos ahora de forma digital, utilizando Excel, Word y otras herramientas como el correo electrónico y más. Tambien fui profesor particular de matemáticas para estudiantes de nivel secundario y universitario."
    },
    {
      periodo: "2013 - 2013",
      empresa: "Hola Paraguay S.A.",
      cargo: "Operador Call Center",
      funciones: "Atención al cliente, solucionamos inconvenientes en tiempo real, también ayudamos al cliente a conocer más sobre el servicio y las facturaciones y algunas funciones administrativas. Trabajé siendo Team leader, encargado de coordinar al equipo y asegurar el cumplimiento de los objetivos diarios. Resolviendo consultas sobre Servicio ADSL, Servicio LTE, Servicio Línea Alta, Servicio IPTV, Servicio Líneas IP. Realizaba verificación técnica con el usuario, el sistema de COPACO y      configuraciones del Router."
    },
    {
      periodo: "2010 - 2012",
      empresa: "Informática Uno S.A.",
      cargo: "Técnico",
      funciones: "Mi función consistía en solucionar problemas y ayudar a mejorar la capacidad de administración, la disponibilidad y el rendimiento de equipos sensibles; electrónicos, industriales, integrados en red y de comunicaciones especificamente UPS de la marca APC."
    },
    {
      periodo: "2009 - 2010",
      empresa: "(CIDESA) Consultora Integral para el Desarrollo Empresarial S.A.",
      cargo: "Operador Call Center. Servicio Flatworld.",
      funciones: "El trabajo de Operador Call Center consistía en transcribir mensajes de voz a texto en tiempo real, con correcta ortografía y precisa transcripción. Trabajé siendo Team leader, encargado de los servicios a Chile y España."
    }
  ];

export const referencias: ReferenciasItem[] = [
    {
      empresa: "CIDESA",
      direccion: "Del Maestro N° 1439 esq. O’Higgins",
      telefono: "(59521) 6160000"
    },
    {
      empresa: "Informática Uno S.A",
      direccion: "Artigas 2521 c/ Brasilia",
      telefono: "(021) 283 225"
    },
    {
      empresa: "Hola Paraguay S.A",
      direccion: "Avda. Eusebio Ayala c/ Bartolome de las Casas",
      telefono: "--"
    }
  ];

export const formacionAcademica: FormacionAcademicaItem[] = [
    {
      titulo: "Ingeniería en Informática",
      institucion: "Universidad Técnica Intercontinental (UTIC)",
      periodo: "2010 - 6to Semestre interrumpido"
    },
    {
      titulo: "Bachiller en Administración de Negocios",
      institucion: "Escuela Nacional de Comercio Nº 1.",
      periodo: "2006 - 2008"
    },
    {
      titulo: "Nivel Primario",
      institucion: "Escuela General Eugenio Alejandrino Garay Nº 240.",
      periodo: "1996 - 2005"
    }
  ];

export const cursosDesarrollo: string[] = [
    "React: de 0 a experto - DevTalles (Hernan Herrera)",
    "Docker: Guía práctica - DevTalles (Hernan Herrera)",
    "FastAPI: Crea APIs eficientes con Python - DevTalles (Hernan Herrera)",
    "React Native Expo: Aplicaciones nativas para IOS y Android - DevTalles (Hernan Herrera)",
    "Zustand: Gestor de estado para React - DevTalles (Hernan Herrera)",
    "Y mas cursos de la plataforma - DevTalles"
  ];