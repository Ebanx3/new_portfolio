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
      <div className="px-3 relative top-0 left-[calc(90%)] inline-block">
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
                ? "material-symbols-outlined text-white text-4xl"
                : "material-symbols-outlined text-black text-4xl"
            }
          >
            light
          </span>
        </button>
      </div>

      <div
        className={
          darkMode
            ? "text-white text-4xl uppercase font-bold text-center mt-20"
            : "text-stone-600 text-4xl uppercase font-bold text-center mt-20"
        }
      >
        Esteban dos Santos
      </div>
      <div
        className={
          darkMode
            ? "text-cyan-500 text-3xl uppercase font-bold text-center"
            : "text-sky-600 text-3xl uppercase font-bold text-center"
        }
      >
        {inEsp ? "Desarrollador Full Stack" : "Full Stack Developer"}
      </div>
    </>
  );
};

export default Header;
