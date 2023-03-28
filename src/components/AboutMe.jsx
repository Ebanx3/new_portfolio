const AboutMe = ({ inEsp, darkMode }) => {
  return (
    <div className="flex justify-around flex-col lg:flex-row items-center mb-5">
      <div className="w-full lg:w-1/2 py-8 px-2 md:px-8">
        <span
          className={darkMode ? "text-xl text-white " : "text-xl text-black "}
        >
          {inEsp
            ? "Soy organizado, metódico y responsable, un apasionado de todo lo relacionado al mundo IT, llevo un año y medio estudiando de forma autodidacta, haciendo cursos y proyectos con el objetivo de poder trabajar de esto."
            : "I´m organized, methodic and responsable, I really love all about the IT world, I have studied as autodidact the last two years, making courses and projects with the aim of being able to work on this"}
        </span>
        <span
          className={
            darkMode
              ? "text-lg flex items-center mt-4 text-white"
              : "text-lg flex items-center mt-4"
          }
        >
          <span className="material-symbols-outlined mr-2">location_on</span>
          Montevideo, Uruguay
        </span>
        <span
          className={
            darkMode
              ? "text-lg flex items-center mt-4 text-white"
              : "text-lg flex items-center mt-4"
          }
        >
          <span className="material-symbols-outlined mr-2">
            alternate_email
          </span>
          esteban2santos@gmail.com
        </span>
        <div className="mt-6 flex justify-end">
          <a
            href="https://www.linkedin.com/in/esteban-2san/"
            target="_blank"
            rel="noopener noreferrer"
            className={
              darkMode
                ? "font-bold text-lg uppercase text-cyan-400 hover:text-cyan-200"
                : "font-bold text-lg uppercase text-sky-600 hover:text-sky-400"
            }
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Ebanx3"
            target="_blank"
            rel="noopener noreferrer"
            className={
              darkMode
                ? "font-bold text-lg uppercase text-cyan-400 hover:text-cyan-200 ml-8"
                : "font-bold text-lg uppercase text-sky-600 hover:text-sky-400 ml-8"
            }
          >
            Github
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <span
          className={
            darkMode
              ? "text-2xl text-white font-bold"
              : "text-2xl text-black font-bold"
          }
        >
          {inEsp ? "Habilidades" : "Skills"}
        </span>
        <div className="flex p-4 gap-1 flex-wrap justify-center">
          <div className="flex flex-col items-center mx-4">
            <div className="h-20 w-20 bg-orange-500 rounded-full flex justify-center items-center text-white font-bold text-lg">
              HTML
            </div>
            <span className={darkMode ? "text-white mt-2" : "text-black mt-2"}>
              HTML
            </span>
          </div>

          <div className="flex flex-col items-center mx-4">
            <div className="h-20 w-20 bg-sky-500 rounded-full flex justify-center items-center text-white font-bold text-lg">
              CSS
            </div>
            <span className={darkMode ? "text-white mt-2" : "text-black mt-2"}>
              CSS
            </span>
          </div>

          <div className="flex flex-col items-center mx-4">
            <div className="h-20 w-20 bg-yellow-500 rounded-full flex justify-center items-center text-black font-bold text-lg">
              JS
            </div>
            <span className={darkMode ? "text-white mt-2" : "text-black mt-2"}>
              JAVASCRIPT
            </span>
          </div>

          <div className="flex flex-col items-center mx-4">
            <div className="h-20 w-20 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold text-lg">
              TS
            </div>
            <span className={darkMode ? "text-white mt-2" : "text-black mt-2"}>
              TYPESCRIPT
            </span>
          </div>

          <div className="flex flex-col items-center mx-4">
            <div className="h-20 w-20 bg-green-400 rounded-full flex justify-center items-center text-black font-bold text-lg">
              NODE
            </div>
            <span className={darkMode ? "text-white mt-2" : "text-black mt-2"}>
              NODE JS
            </span>
          </div>

          <div className="flex flex-col items-center mx-4">
            <div
              className={
                darkMode
                  ? "h-20 w-20 bg-white rounded-full flex justify-center items-center text-black font-bold text-lg"
                  : "h-20 w-20 bg-black rounded-full flex justify-center items-center text-white font-bold text-lg"
              }
            >
              EX
            </div>
            <span className={darkMode ? "text-white mt-2" : "text-black mt-2"}>
              EXPRESS JS
            </span>
          </div>

          <div className="flex flex-col items-center mx-4">
            <div className="h-20 w-20 bg-red-500 rounded-full flex justify-center items-center text-white font-bold text-lg">
              REACT
            </div>
            <span className={darkMode ? "text-white mt-2" : "text-black mt-2"}>
              REACT JS
            </span>
          </div>

          <div className="flex flex-col items-center mx-4">
            <div className="h-20 w-20 bg-cyan-500 rounded-full flex justify-center items-center text-white font-bold text-lg">
              MySQL
            </div>
            <span className={darkMode ? "text-white mt-2" : "text-black mt-2"}>
              MySQL
            </span>
          </div>

          <div className="flex flex-col items-center mx-4">
            <div className="h-20 w-20 bg-green-600 rounded-full flex justify-center items-center text-white font-bold text-lg">
              MONGO
            </div>
            <span className={darkMode ? "text-white mt-2" : "text-black mt-2"}>
              MONGODB
            </span>
          </div>

          <div className="flex flex-col items-center mx-4">
            <div className="h-20 w-20 bg-green-500 rounded-full flex justify-center items-center text-white font-bold text-lg">
              VUE
            </div>
            <span className={darkMode ? "text-white mt-2" : "text-black mt-2"}>
              VUE JS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
