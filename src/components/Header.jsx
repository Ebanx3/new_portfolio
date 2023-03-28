const Header = ({ darkMode, changeDarkMode, inEsp, changeLanguage }) => {
  const onClickLampButton = () => {
    changeDarkMode();
  };

  const onClickLan = (lan) => {
    if (inEsp && lan == "esp") return;
    if (!inEsp && lan == "eng") return;
    changeLanguage();
  };

  return (
    <>
      <div className=" flex items-center justify-end mr-8">
        <button
          className={
            inEsp
              ? "mr-1 font-bold text-cyan-500"
              : "mr-1 font-bold text-cyan-500 cursor-default opacity-20"
          }
          onClick={() => onClickLan("eng")}
        >
          <span>ENG</span>
        </button>
        <button
          className={
            inEsp
              ? "mr-1 font-bold text-cyan-500 cursor-default opacity-20"
              : "mr-1 font-bold text-cyan-500"
          }
          onClick={() => onClickLan("esp")}
        >
          <span>ESP</span>
        </button>
        <button onClick={onClickLampButton}>
          <span
            className={
              darkMode
                ? "material-symbols-outlined text-white text-2xl"
                : "material-symbols-outlined text-black text-2xl"
            }
          >
            {darkMode ? "dark_mode" : "light_mode"}
          </span>
        </button>
      </div>

      <div
        className={
          darkMode
            ? "text-white sm:text-4xl text-2xl uppercase font-bold text-center mt-20"
            : "text-stone-600 sm:text-4xl text-2xl uppercase font-bold text-center mt-20"
        }
      >
        Esteban dos Santos
      </div>
      <div
        className={
          darkMode
            ? "text-cyan-500 text-xl sm:text-3xl uppercase font-bold text-center"
            : "text-sky-600 text-xl sm:text-3xl uppercase font-bold text-center"
        }
      >
        {inEsp ? "Desarrollador Full Stack" : "Full Stack Developer"}
      </div>
    </>
  );
};

export default Header;
