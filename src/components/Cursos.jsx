const Cursos = () => {
  return (
    // <div className="flex justify-around flex-col lg:flex-row items-center mb-5">
    <div className="flex flex-wrap  mx-4 justify-around mb-5">
      <a
        href="https://www1.coderhouse.com.uy/certificados/632474a91a7013000e9f7b89?ss=7b5aa2f3-756b-4672-bf02-9b5b6c915355&fc=uy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="becertificado.png"
          alt="certificado backend"
          className="h-72 opacity-60 hover:opacity-100 hover:cursor-pointer"
        />
      </a>
      <a
        href="https://www.coderhouse.com.uy/certificados/624bb2bf051e01001ac23348"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="dwcertificado.png"
          alt="certificado desarrollo web"
          className="h-72 opacity-60 hover:opacity-100 hover:cursor-pointer"
        />
      </a>
      <a
        href="https://www.coderhouse.com.uy/certificados/633a1ce4dece68000e7190c2"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="rjcertificado.png"
          alt="certificado react"
          className="h-72 opacity-60 hover:opacity-100 hover:cursor-pointer"
        />
      </a>
      <a
        href="https://www.coursera.org/account/accomplishments/verify/EBVMLNE2YWPT?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="meta.jpeg"
          alt="certificado Intro front-end"
          className=" h-72 opacity-60 hover:opacity-100 hover:cursor-pointer"
        />
      </a>
    </div>
  );
};

export default Cursos;
