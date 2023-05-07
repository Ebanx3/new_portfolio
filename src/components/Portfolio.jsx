const Portfolio = ({ inEsp, darkMode }) => {
  return (
    <div>
      <div className="flex justify-center flex-col lg:flex-row items-center mb-5 w-full 2xl:w-11/12 m-auto p-2 mt-8">
        <img src="nosApunter.png" alt="" className="w:full lg:w-1/2 " />
        <div className="w-full lg:w-1/2 p-8 text-lg">
          <p className={darkMode ? "text-white" : ""}>
            {inEsp
              ? "La idea del proyecto era suplantar un poco los apuntes que hacía durante los cursos, y que voy revisando constantemente para recordar como hacer algunas cosas. Permite crear posts con mini tutoriales sobre como usar alguna herramienta especifica. Consta con un sistema de registro y logueo, un buscador, los posts pueden recibir checks o cruces, además se pueden guardar posts en favoritos."
              : "The idea for this site it´s have a place where to save and share mini tutorials about a specific technology. Here we can signup, login, create a post, react to a post with check or a cross and save as favourite"}
          </p>
          <ul className={darkMode ? "text-white " : ""}>
            {inEsp ? "Tecnologías empleadas" : "Technologies used"}
            <li className="ml-2">- React</li>
            <li className="ml-2">- NextJs</li>
            <li className="ml-2">- Cookie</li>
            <li className="ml-2">- Eslint</li>
            <li className="ml-2">- Mongoose</li>
            <li className="ml-2">- Bcrypt</li>
            <li className="ml-2">- Jsonwebtoken</li>
            <li className="ml-2">- Typsecript</li>
            <li className="ml-2">- tailwindcss</li>
          </ul>
          <div className="flex justify-end mt-8">
            <a
              href="https://nosapuntes.netlify.app"
              className={
                darkMode
                  ? "font-bold mr-4 text-cyan-400 hover:text-cyan-200"
                  : "font-bold mr-4 text-sky-600 hover:text-sky-400"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              DEPLOY
            </a>
            <a
              href="https://github.com/Ebanx3/devblog"
              className={
                darkMode
                  ? "font-bold text-cyan-400 hover:text-cyan-200"
                  : "font-bold text-sky-600 hover:text-sky-400"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              REPO
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col lg:flex-row items-center mb-5 w-full 2xl:w-11/12 m-auto p-2">
        <img src="code-foro.png" alt="" className="w:full lg:w-1/2 " />
        <div className="w-full lg:w-1/2 p-8 text-lg">
          <p className={darkMode ? "text-white" : ""}>
            {inEsp
              ? "Code-foro, es un proyecto que hice con la finalidad de practicar NextJs, es un foro-blog con diferentes categorías sobre desarrollo. La idea es que sea un lugar donde compartir información, tutoriales o hacer preguntas."
              : "Code-fore is a website that I make to learn and practice NextJs, it´s my first project with this library. I was thinking in a place where to share some tutorials, or a place where the user can do their questions."}
          </p>
          <ul className={darkMode ? "text-white " : ""}>
            {inEsp ? "Tecnologías empleadas" : "Technologies used"}
            <li className="ml-2">- next - 13.1</li>
            <li className="ml-2">- typescript - 4.9</li>
            <li className="ml-2">- mongoose - 6.9</li>
            <li className="ml-2">- axios - 1.3</li>
            <li className="ml-2">- formik - 2.2</li>
            <li className="ml-2">- jsonwebtoken - 9.0</li>
            <li className="ml-2">- jose - 4.13</li>
            <li className="ml-2">- cloudinary - 1.35</li>
            <li className="ml-2">- bcrypt - 5.1</li>
          </ul>
          <div className="flex justify-end mt-8">
            <a
              href="https://code-foro.netlify.app"
              className={
                darkMode
                  ? "font-bold mr-4 text-cyan-400 hover:text-cyan-200"
                  : "font-bold mr-4 text-sky-600 hover:text-sky-400"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              DEPLOY
            </a>
            <a
              href="https://github.com/Ebanx3/foro"
              className={
                darkMode
                  ? "font-bold text-cyan-400 hover:text-cyan-200"
                  : "font-bold text-sky-600 hover:text-sky-400"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              REPO
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col lg:flex-row items-center mb-5 w-full 2xl:w-11/12 m-auto p-2 mt-8">
        <img
          src="https://camo.githubusercontent.com/1844e7e948600538af6a21c77ab62427589ddfd3c003691d91fad094631fd0f7/68747470733a2f2f692e696d6775722e636f6d2f5237536a4269372e676966"
          alt=""
          className="w:full lg:w-1/2 "
        />
        <div className="w-full lg:w-1/2 p-8 text-lg">
          <p className={darkMode ? "text-white" : ""}>
            {inEsp
              ? "Proyecto hecho con react para el curso de CoderHouse, simulador de e-commerce que recive productos desde FireStore Database"
              : "Project made with react for the course at CoderHouse, it´s a simulator of e-commerce. Here I used products fetched form Firebase Database"}
          </p>
          <ul className={darkMode ? "text-white " : ""}>
            {inEsp ? "Tecnologías empleadas" : "Technologies used"}
            <li className="ml-2">- react - 18.1</li>
            <li className="ml-2">- react-dom - 18.1</li>
            <li className="ml-2">- react-router-dom - 6.3</li>
            <li className="ml-2">- firebase - 9.8</li>
          </ul>
          <div className="flex justify-end mt-8">
            <a
              href="https://melodic-bonbon-094457.netlify.app"
              className={
                darkMode
                  ? "font-bold mr-4 text-cyan-400 hover:text-cyan-200"
                  : "font-bold mr-4 text-sky-600 hover:text-sky-400"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              DEPLOY
            </a>
            <a
              href="https://github.com/Ebanx3/firstReactApp"
              className={
                darkMode
                  ? "font-bold text-cyan-400 hover:text-cyan-200"
                  : "font-bold text-sky-600 hover:text-sky-400"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              REPO
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-col lg:flex-row items-center mb-5 w-full 2xl:w-11/12 m-auto p-2 mt-8">
        <img src="ram.png" alt="" className="w:full lg:w-1/2 " />
        <div className="w-full lg:w-1/2 p-8 text-lg">
          <p className={darkMode ? "text-white" : ""}>
            {inEsp
              ? "Proyecto hecho con Vue para un desafío, consume la api de rickandmortyapi.com y además un backend propio para un sistema de mensajes para cada personaje"
              : "I made this project with Vue as an interview project. Consumes the rickandmortyapi.com and it have a backend where we can create and read messages for every character"}
          </p>
          <ul className={darkMode ? "text-white " : ""}>
            {inEsp ? "Tecnologías empleadas" : "Technologies used"}
            <li className="ml-2">- vue - 3.2</li>
            <li className="ml-2">- vue-router - 4.1</li>
            <li className="ml-2">- vite - 3.2</li>
            <li className="ml-2">- Backend node, express, typescript</li>
          </ul>
          <div className="flex justify-end mt-8">
            <a
              href="https://capable-pithivier-7141b7.netlify.app"
              className={
                darkMode
                  ? "font-bold mr-4 text-cyan-400 hover:text-cyan-200"
                  : "font-bold mr-4 text-sky-600 hover:text-sky-400"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              DEPLOY
            </a>
            <a
              href="https://github.com/Ebanx3/frontendPjRaM"
              className={
                darkMode
                  ? "font-bold text-cyan-400 hover:text-cyan-200"
                  : "font-bold text-sky-600 hover:text-sky-400"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              REPO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
