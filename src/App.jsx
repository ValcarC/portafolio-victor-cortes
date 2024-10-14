import React, { useState, useEffect } from "react";
import "./App.css";

const AutoTypingText = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      let index = 0;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setDisplayedText("");
            setIsTyping(true);
          }, 2000); // Pausa de 2 segundos antes de repetir
        }
      }, speed);

      return () => clearInterval(interval); // Limpiar intervalo al desmontar
    }
  }, [isTyping, text, speed]);

  return (
    <div
      style={{
        background: `linear-gradient(180deg, rgba(255,255,255,1) 50%, rgba(255,107,0,0.1) 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {displayedText}
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Estado para el modo oscuro

  const toggleMenu = () => {
    console.log("Toggling menu");
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Cerrar el menú al hacer clic fuera de él

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("menu");
      const hamburger = document.getElementById("hamburger");
      if (
        menu &&
        !menu.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cambiar el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode); // Alternar clase 'dark' en el elemento raíz
  };

  return (
    <>
      {/* <div className={`font-raleway ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}> */}
      <div className={`font-raleway'}`}>
        {/* Section */}
        <div id="home" className="h-screen">
          <div className="h-1/2 lg:h-screen bg-gradient-to-t from-orange-200 to-orange-600 dark:from-slate-900 dark:to-slate-900 relative overflow-hidden">
            {/* navbar */}
            <nav className="w-full fixed top-0 bg-zinc-100 z-10 dark:bg-orange-700">
              <div className="container mx-auto p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    className="w-12"
                    src="/logoVictor.png"
                    alt="Logo Victor"
                  />
                  <span className="text-xl font-medium text-orange-500 dark:text-zinc-100"></span>
                </div>
                <ul className="hidden md:flex space-x-10 text-gray-700 dark:text-gray-100 font-bold text-sm uppercase">
                  <li className="hover:text-gray-500">
                    <a href="#">Home</a>
                  </li>
                  <li className="hover:text-gray-500">
                    <a href="#about">Sobre Mi</a>
                  </li>
                  <li className="hover:text-gray-500">
                    <a href="#services">Servicios</a>
                  </li>
                  <li className="hover:text-gray-500">
                    <a href="#works">Trabajos y Projectos</a>
                  </li>
                  <li className="hover:text-gray-500">
                    <a href="#contact">Contacto</a>
                  </li>
                </ul>
                <div
                  id="hamburger"
                  onClick={toggleMenu}
                  className=" space-y-1 md:hidden cursor-pointer z-20"
                >
                  <div
                    className={`w-6 h-0.5 ${
                      isMenuOpen ? "bg-zinc-100" : "bg-orange-400"
                    }`}
                  ></div>
                  <div
                    className={`w-6 h-0.5 ${
                      isMenuOpen ? "bg-zinc-100" : "bg-orange-400"
                    }`}
                  ></div>
                  <div
                    className={`w-6 h-0.5 ${
                      isMenuOpen ? "bg-zinc-100" : "bg-orange-400"
                    }`}
                  ></div>
                </div>
                <ul
                  id="menu"
                  className={`menu bg-orange-500 fixed left-0 top-0 w-full h-screen p-10 rounded-b-none space-y-10 text-xl font-semibold text-zinc-100 text-center transition-all duration-500 ease-out ${
                    isMenuOpen ? "open" : ""
                  } md:hidden`}
                >
                  <ul
                    id="menu"
                    className={`menu bg-orange-600 fixed left-0 top-0 w-full h-screen p-10 rounded-b-none space-y-10 text-xl font-semibold text-zinc-100 text-center transition-all duration-500 ease-out ${
                      isMenuOpen ? "open" : ""
                    } md:hidden`}
                  ></ul>
                  <li
                    onClick={toggleMenu}
                    className="hover:text-indigo-600 hover:font-bold transition-all duration-300 translate-y-[50px]"
                  >
                    <a href="#home">Home</a>
                  </li>
                  <li
                    onClick={toggleMenu}
                    className="hover:text-indigo-600 hover:font-bold transition-all duration-300 translate-y-[50px]"
                  >
                    <a href="#about">Sobre Mi</a>
                  </li>
                  <li
                    onClick={toggleMenu}
                    className="hover:text-indigo-600 hover:font-bold transition-all duration-300 translate-y-[50px]"
                  >
                    <a href="#services">Servicios</a>
                  </li>
                  <li
                    onClick={toggleMenu}
                    className="hover:text-indigo-600 hover:font-bold transition-all duration-300 translate-y-[50px]"
                  >
                    <a href="#works">Trabajos y Proyectos</a>
                  </li>
                  <li
                    onClick={toggleMenu}
                    className="hover:text-indigo-600 hover:font-bold transition-all duration-300 translate-y-[50px]"
                  >
                    <a href="#contact">Contacto</a>
                  </li>
                </ul>
                <div className="hidden md:block w-36 cursor-pointer">
                  <button
                    onClick={toggleDarkMode}
                    className="flex flex-wrap items-center ml-4 p-2 bg-gray-800 rounded text-neutral-50 dark:bg-gray-200 dark:text-neutral-800"
                  >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                    <img
                      src="/moonVictor.png"
                      className="hidden md:block w-8 cursor-pointer"
                      alt="Icono de luna"
                    />
                  </button>
                </div>
              </div>
            </nav>

            {/* Intro Content */}
            {/* image */}
            <img
              src="/portrait.png"
              alt=""
              className="absolute bottom-0 right-0 mr-9 lg:left-0 mx-auto h-5/6 p-9 object-cover rounded-full"
            />
            {/* animate text */}
            <div className="absolute sm:ml-0 md:ml-0 top-1/3 left-9 text-xl sm:left-10 sm:text-4xl md:left-1/8 md:text-6xl lg:left-5 xl:left-18 xl:text-7xl font-bold">
              <span className="text-indigo-600">Developer</span>
              <AutoTypingText text="Designer UX/UI" speed={150} />
            </div>

            {/* texts */}
            <div className="hidden lg:flex flex-col gap-2 absolute top-15 shadow-xl bottom-0 m-auto left-9 bg-zinc-100dark:bg-slate-300 p-6 h-fit w-1/3 rounded-sm">
              <h1 className="text-3xl font-bold text-indigo-600">
                Hola, Soy Victor
              </h1>
              <p className="to-gray-400">
                Especialista en desarrollo web con amplio conocimiento en
                JavaScript y en actualización constante. Me apasiona crear
                sitios y aplicaciones ágiles que respondan a las necesidades de
                cada cliente. Amplia experiencia en la realización y gestión de
                proyectos. Busco un puesto dinámico y desafiante en una empresa
                innovadora.
              </p>
            </div>
          </div>

          {/* About */}
          <div id="about" className="px-10 dark:bg-slate-900 dark:text-white">
            <div className="container mx-auto py-32 flex-col-reverse lg:flex-row items-center flex gap-20">
              {/* Left */}
              <div className="relative">
                <div className="overflow-hidden rounded-full w-56 h-56">
                  <img
                    className="w-full h-full object-cover"
                    src="/victorRetrato.png"
                    alt="Retrato de Victor"
                  />
                </div>
              </div>

              {/* Right */}
              <div className="my-auto flex flex-col gap-3">
                <h1 className="text-3xl text-orange-700 font-bold">Sobre Mi</h1>
                <p className="text-gray-00 dark:text-zinc-100">
                  Experiencia en la producción de UX y UI para el diseño de
                  páginas web e interacciones multimedia. Tengo amplio
                  conocimiento en el uso de React JS, Node.js y manejo de base
                  de datos con PostgreSQL y MongoDb.
                </p>
                <h1 className="text-3xl font-medium text-indigo-600 dark:text-zinc-100">
                  Herramientas
                </h1>
                <p className="text-gray-00 dark:text-zinc-100">
                  Figma | Adobe Creative Suite | React | Node.js | Express |
                  JavaScript | CSS | SASS | Tailwind HTML | Wordpress | Git-Hub
                  | PostgreSQL | MongoDB | Audacity
                </p>
              </div>
            </div>
          </div>
          {/* Services */}
          <div id="services" className="dark:bg-slate-900 dark:text-zinc-100">
            <div className="container mx-auto ">
              {/* top */}
              <div className="flex flex-col gap-3 items-center">
                <h1 className="text-orange-600 font-semibold">Servicios</h1>
                <h1 className="text-3xl dark:text-zinc-100">Que ofresco?</h1>
                <p className="w-1/2 text-center text-gray-800 dark:text-zinc-100">
                  Maquetacion y Diseño de Paginas Web.
                </p>
              </div>
              {/* bottom */}
              <div className="p-5 sm:p-0 flex flex-wrap justify-between">
                {/* card */}
                <div className="w-full md:w-4/12 shadow-xl rounded-md p-5 my-3 md:my-10 flex flex-col gap-3">
                  <img src="/logoVictor.png" alt="" className="w-10" />
                  <h1 className="font-medium text-xl dark:text-zinc-100">
                    UX/UI Design
                  </h1>
                  <p className="text-gray-700 dark:text-zinc-100">
                    Especialista en la creación de sitios web.
                  </p>
                </div>

                {/* card */}
                <div className="w-full md:w-4/12 shadow-xl rounded-md p-5 my-3 md:my-10 flex flex-col gap-3">
                  <img src="/logoVictor.png" alt="" className="w-10" />
                  <h1 className="font-medium text-lg">Multimedia</h1>
                  <p className="text-gray-700 dark:text-zinc-100">
                    Creación de experiencias multimedia.
                  </p>
                </div>

                {/* card */}
                <div className="w-full md:w-4/12 shadow-xl rounded-md p-5 my-3 md:my-10 flex flex-col gap-3">
                  <img src="/logoVictor.png" alt="" className="w-10" />
                  <h1 className="font-medium text-lg">Frontend</h1>
                  <p className="text-gray-700 dark:text-zinc-100">
                    Diseño Frontend.
                  </p>
                </div>

                {/* card */}
                <div className="w-full md:w-4/12 shadow-xl rounded-md p-5 my-3 md:my-10 flex flex-col gap-3">
                  <img src="/logoVictor.png" alt="" className="w-10" />
                  <h1 className="font-medium text-lg">Backend</h1>
                  <p className="text-gray-700 dark:text-zinc-100">Backend.</p>
                </div>

                {/* card */}
                <div className="w-full md:w-4/12 shadow-xl rounded-md p-5 my-3 md:my-10 flex flex-col gap-3">
                  <img src="/logoVictor.png" alt="" className="w-10" />
                  <h1 className="font-medium text-lg">Actualización</h1>
                  <p className="text-gray-700 dark:text-zinc-100">
                    Actualización de paginas.
                  </p>
                </div>

                {/* card */}
                <div className="w-full md:w-4/12 shadow-xl rounded-md p-5 my-3 md:my-10 flex flex-col gap-3">
                  <img src="/logoVictor.png" alt="" className="w-10" />
                  <h1 className="font-medium text-lg">Mantenimiento</h1>
                  <p className="text-gray-700 dark:text-zinc-100">
                    Mantenimiento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Works! */}
          <div
            id="works"
            className="py-16 dark:bg-slate-900 dark:text-zinc-100"
          >
            <div className="container mx-auto ">
              {/* top */}
              <div className="flex flex-col gap-3 items-center">
                <h1 className=" text-3xl text-orange-600 font-semibold dark:text-zinc-100">
                  Portafolio
                </h1>
                <h1 className="text-3xl dark:text-zinc-100">
                  Trabajos y Projectos.
                </h1>
                <p className="w-1/2 text-center text-gray-800 dark:text-zinc-100">
                  Descubre mi portafolio de diseño web y UX/UI, donde la
                  estética se une a la funcionalidad. Cada proyecto refleja mi
                  compromiso por crear experiencias digitales memorables que
                  cautivan y conectan con los usuarios..
                </p>
              </div>
              {/* bottom */}
              <div className="p-5 sm:p-0 flex flex-wrap justify-around">
                {/* card */}
                <div className="w-full md:w-4/12 lg:w-1/3 shadow-xl rounded-md p-5 my-3 md:my-10 flex m-1">
                  <a
                    href="https://mern-hojita-2wkn.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/paginaWeb.png" alt="" />
                  </a>
                </div>

                {/* card */}
                <div className="w-full md:w-4/12 lg:w-1/3 shadow-xl rounded-md p-5 my-3 md:my-10 flex m-1">
                  <a
                    href="https://api-movie-zeta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="/apiMovie.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div
            id="contact"
            className="dark:bg-slate-900 dark:text-zinc-100 p-6"
          >
            <div className="container mx-auto">
              {/* top */}
              <div className="flex flex-col gap-3 items-center">
                <h1 className="text-orange-600 font-semibold">Contacto</h1>
                <h1 className="text-3xl">¿Tienes alguna Pregunta?</h1>
                <p className="w-1/2 text-center text-gray-800 dark:text-zinc-100">
                  ¿Tienes alguna idea?, vamos a discutirlo y crear algo juntos.
                </p>
                <p>
                  Correo:{" "}
                  <a
                    href="mailto:valcar.cortes@gmail.com"
                    className="text-blue-500 underline"
                  >
                    valcar.cortes@gmail.com
                  </a>
                </p>
              </div>

              {/* bottom */}
            </div>
          </div>

          {/* Footer */}
          <div className="w-full bg-indigo-500 p-6">
            <div className="container mx-auto py-5 flex items-center justify-around">
              <div className="flex gap-2">
                <img className="w-12" src="/logoVictor.png" alt="" />
                <span className="text-2xl text-zinc-100"></span>
              </div>
              <span className="hidden md:block font-medium text-zinc-100">
                © 2024 Diseño Por Victor Cortes.
              </span>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/victor-cort%C3%A9s-716002290/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-9 cursor-pointer"
                    src="../public/linkedin.png"
                    alt="LinkedIn Profile"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
