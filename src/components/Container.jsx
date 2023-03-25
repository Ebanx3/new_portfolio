import React from "react";
import { useState } from "react";

const Container = ({ title, children, darkMode, inEsp }) => {
  const [collapse, setCollapse] = useState(true);

  const onClickCertif = () => {
    collapse ? setCollapse(false) : setCollapse(true);
  };

  return (
    <div className="my-10 w-full sm:w-11/12 m-auto">
      <div
        className={
          darkMode
            ? "border-4 mx-2 p-1 border-cyan-600  rounded-lg"
            : "p-2 shadow-md mx-2 border-sky-500  rounded-lg bg-white"
        }
      >
        <div className="relative">
          <p
            className={
              darkMode
                ? "text-2xl font-bold text-stone-200 uppercase text-center my-5"
                : "text-2xl font-bold text-sky-600 uppercase text-center my-5"
            }
          >
            {title}
          </p>
          <span
            className={
              darkMode
                ? "material-symbols-outlined text-5xl absolute top-0 right-5 text-cyan-500 leading-10 hover:text-cyan-300 cursor-pointer"
                : "material-symbols-outlined text-5xl absolute top-0 right-5 leading-10 text-sky-700  hover:text-sky-500 cursor-pointer"
            }
            onClick={() => onClickCertif()}
          >
            expand_more
          </span>
        </div>
        {collapse || <div>{children}</div>}
      </div>
    </div>
  );
};

export default Container;
