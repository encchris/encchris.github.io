
import { Mail, Linkedin, Globe, Phone, MapPin, Briefcase, Award, Code, Cpu, Download, MessageCirclePlusIcon } from 'lucide-react';
import { datosPersonales, perfilProfesional, habilidades, experiencia, referencias, formacionAcademica, cursosDesarrollo } from './curriculumData';

export default function Curriculum() {

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div id="curriculum" className="min-h-screen bg-[#1b2430]">

      <div className="max-w-4xl mx-auto bg-white min-h-screen">
        {/* Header estilo LinkedIn */}
        <div className="relative">
          {/* Banner azul */}
          <div className="h-32 bg-blue-600 text-white flex flex-col justify-center items-end p-4">
            <h2 className='text-3xl font-bold text-white mb-1'>Christian López</h2>
            <span className='text-xl text-white'>Desarrollador Web</span>
            <div className="flex items-center gap-2 text-gray-200">
                <span>{datosPersonales.email}</span>
            </div>
          </div>
          
          {/* Contenido del perfil */}
          <div className="px-6 pb-6">
            <div className="relative -mt-16 mb-4">
              {/* Avatar placeholder */}
              <div className="w-32 h-32 bg-gray-300 rounded-full border-4 border-white">
                <img src="img/foto.jpg" alt="Chris foto" className='rounded-full'/>
              </div>
            </div>
            
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">{datosPersonales.nombre}</h1>
              <p className="text-xl text-gray-700 mb-3">{datosPersonales.profesion}</p>
              <div className="text-sm text-gray-600 space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{datosPersonales.ubicacion}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>{datosPersonales.email}</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>{datosPersonales.telefono}</span>
                </div> */}
              </div>
            </div>
            {/* Botón de descarga - se oculta al imprimir */}
            <div className="no-print">
                <button
                onClick={handleDownloadPDF}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:bg-blue-700 transition shadow-lg"
                >
                <Download size={20} />
                Descargar PDF
                </button>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="px-6 space-y-6 pb-8">
          {/* Acerca de / Perfil Profesional */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Acerca de</h2>
            <p className="text-gray-700 leading-relaxed">{perfilProfesional}</p>
          </section>

          {/* Experiencia */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experiencia</h2>
            <div className="space-y-6">
              {experiencia.map((exp, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                      <Briefcase size={24} className="text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{exp.cargo}</h3>
                    <p className="text-gray-700 font-medium">{exp.empresa}</p>
                    <p className="text-sm text-gray-600 mb-2">{exp.periodo}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{exp.funciones}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Educación */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Educación</h2>
            <div className="space-y-6">
              {formacionAcademica.map((form, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                      <Award size={24} className="text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{form.institucion}</h3>
                    <p className="text-gray-700">{form.titulo}</p>
                    <p className="text-sm text-gray-600">{form.periodo}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Licencias y certificaciones */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Licencias y certificaciones</h2>
            <div className="space-y-3">
              {cursosDesarrollo.map((curso, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                      <Award size={20} className="text-gray-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800">{curso}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Aptitudes / Habilidades */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Aptitudes</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Code size={20} className="text-blue-600" />
                Informática
              </h3>
              <div className="flex flex-wrap gap-2">
                {habilidades.informatica.map((hab, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm border border-gray-300">
                    {hab}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <Cpu size={20} className="text-blue-600" />
                Electrónica
              </h3>
              <div className="flex flex-wrap gap-2">
                {habilidades.electronica.map((hab, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm border border-gray-300">
                    {hab}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <MessageCirclePlusIcon size={20} className="text-blue-600" />
                Comunicación
              </h3>
              <div className="flex flex-wrap gap-2">
                {habilidades.comunicacion.map((hab, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm border border-gray-300">
                    {hab}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Referencias */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Referencias Laborales</h2>
            <div className="space-y-4">
              {referencias.map((ref, idx) => (
                <div key={idx} className="border border-gray-200 rounded p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{ref.empresa}</h3>
                  <p className="text-sm text-gray-700 mb-1 flex items-center gap-2">
                    <MapPin size={14} />
                    {ref.direccion}
                  </p>
                  <p className="text-sm text-gray-700 flex items-center gap-2">
                    <Phone size={14} />
                    {ref.telefono}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contacto */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Información de contacto</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-gray-600" />
                <a href={`mailto:${datosPersonales.email}`} className="text-blue-600 hover:underline">
                  {datosPersonales.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin size={20} className="text-gray-600" />
                <a href={`https://${datosPersonales.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {datosPersonales.linkedin}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-gray-600" />
                <a href={`https://${datosPersonales.portfolio}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {datosPersonales.portfolio}
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          body {
            margin: 0;
            padding: 0;
          }
          
          @page {
            margin: 0.5cm;
            size: A4;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}