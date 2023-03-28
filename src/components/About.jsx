import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#242424] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Title */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ad5c5c]">
              About
            </p>
          </div>
        </div>
        {/* About me text */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className=" sm:text-right text-4xl font-bold">
            <p>Hola. Soy Chris, encantado con tu visita a mi portafolio.</p>
          </div>
          <div>
            <p>
              Me apasiona crear experiencias web excepcionales que hagan una
              diferencia en la vida de las personas. Como desarrollador, me
              esfuerzo por crear sitios web intuitivos, atractivos y accesibles
              que resuelvan las necesidades de los usuarios de manera efectiva.
              Durante mi carrera, he adquirido experiencia en tecnologías como
              JavaScript, React y API Rest, entre otras, lo que me ha permitido
              desarrollar habilidades para implementar soluciones eficientes. Si
              necesitas ayuda para crear tu sitio web, ¡permíteme ser tu aliado!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
