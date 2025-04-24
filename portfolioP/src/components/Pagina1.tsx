import React from 'react';
// Iconos de las tecnologías
import reactIcon from "../assets/react.svg";
import tsIcon from "../assets/typescript.svg";
import viteIcon from "../assets/vite.svg";
import cssIcon from "../assets/css3.svg";
import htmlIcon from "../assets/html5.svg";
import jsIcon from "../assets/javascript.svg";

const tecnologias = [
  { name: "React", icon: reactIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "Vite", icon: viteIcon },
  { name: "CSS", icon: cssIcon },
  { name: "HTML", icon: htmlIcon },
  { name: "JavaScript", icon: jsIcon },
];

interface Pagina1Props {
  dark: boolean;
}

const Pagina1: React.FC<Pagina1Props> = ({ dark }) => (
  <><div
    style={{
      background: dark ? '#212529' : '#fff',
      color: dark ? '#fff' : '#000',
    }}
  >
    <section id="home" className="mb-4 text-center">
      <img src="/portfolio.jpg" alt="Mi Portfolio" className="img-fluid mb-3" style={{ maxWidth: '80%' }} />
      <h1 className="fs-4">Portafolio personal desarrollado con React, TypeScript, y Vite.</h1>
      <p className="fs-6">Este proyecto utiliza Bootstrap para el diseño responsivo</p>
    </section>

    <section id="about" className="mb-4">
      <h2 className="fs-5">Sobre mí</h2>
      <div className="d-flex flex-column flex-md-row align-items-center gap-3">
        <img
          src="/img2.jpg"
          alt="Foto personal"
          style={{ width: '150px', borderRadius: '10px', objectFit: 'cover' }} />
        <div>
          <p className="fs-6">
            Hola Soy Chao, y os presento mi supuesto nuevo portfolio web. Aquí encontrarás una muestra de mi página, mis proyectos y algo sobre mí.
            Me gusta explorar nuevas ideas y aprender cosas nuevas. En este espacio, encontrarás algunos de mis intereses y proyectos personales.
          </p>
          <p className="fs-6">
            Soy una persona con ganas de aprender. Me esfuerzo por trabajar de manera efectiva en equipo, siendo responsable y puntual.
            Tengo fuerte deseo con la mejora continua y el cumplimiento de objetivos.
          </p>
        </div>
      </div>
    </section>
<section className="mb-4">
  <h1 className="fs-5 text-center">Tecnologías usados alguna vez...</h1>
  <br></br>
  <div className="d-flex flex-wrap justify-content-center gap-4">
    {tecnologias.map((tech) => (
      <div
        key={tech.name}
        className="d-flex flex-column align-items-center"
        style={{ width: "100px" }}
      >
        <img
          src={tech.icon}
          alt={tech.name}
          style={{ width: "50px", height: "50px", objectFit: "contain" }}
        />
        <span className="mt-2">{tech.name}</span>
      </div>
    ))}
  </div>
</section>

    <section id="languages" className="mb-4">
      <h2 className="text-center fs-5 mb-3">Idiomas</h2>

      <div className="mb-3">
        <p className="fw-bold">Castellano</p>
        <div className="progress">
          <div className="progress-bar bg-grey" style={{ width: '90%' }}>
            90%
          </div>
        </div>
      </div>

      <div className="mb-3">
        <p className="fw-bold">Inglés</p>
        <div className="progress">
          <div className="progress-bar bg-info" style={{ width: '50%' }}>
            50%
          </div>
        </div>
      </div>

      <div className="mb-3">
        <p className="fw-bold">Chino</p>
        <div className="progress">
          <div className="progress-bar bg-warning text-dark" style={{ width: '40%' }}>
            40%
          </div>
        </div>
      </div>
    </section>

    <section id="projects" className="mb-4">
      <h2 className="fs-5">Proyectos</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover align-middle table-sm">
          <thead className="table-dark">
            <tr>
              <th>Proyecto</th>
              <th>Descripción</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Proyecto 1</td>
              <td>Proyecto web del año pasado</td>
              <td>
                <a
                  href="https://ch4a0.github.io/ProyectowebC/HTML/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </td>
            </tr>
            <tr>
              <td>Proyecto 2</td>
              <td>Formulario</td>
              <td>
                <a
                  href="https://github.com/ICV-24-25/html-formulario-registro-CH4a0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </td>
            </tr>
            <tr>
              <td>Proyecto 3</td>
              <td>Plantilla recuperación</td>
              <td>
                <a
                  href="https://ch4a0.github.io/AW-Chao/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <img src="/Plantilla.jpeg" alt="Plantilla" className="img-fluid mb-4" />
    </section>

  </div>
  </>
);

export default Pagina1;
