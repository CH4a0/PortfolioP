import { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      data-bs-theme={dark ? 'dark' : 'light'}
      style={{
        minHeight: '100vh',
        background: dark ? '#212529' : '#fff',
        color: dark ? '#fff' : '#000' // <-- Esto agrega color al texto principal
      }}
    >
      <Navbar expand="lg" bg={dark ? "dark" : "light"} variant={dark ? "dark" : "light"} className="mb-4 shadow-sm">
        <Container>
          <Navbar.Brand href="#home">Mi Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#about">About me</Nav.Link>
              <Nav.Link href="#projects">Proyectos</Nav.Link>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav>
            <Button variant={dark ? "light" : "dark"} onClick={() => setDark(d => !d)}>
              {dark ? 'Modo Claro' : 'Modo Oscuro'}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <section id="home" className="mb-5 text-center">
          <img src="/portfolio.jpg" alt="Mi Portfolio" className="img-fluid mb-4" />
          <h1>Portafolio personal desarrollado con React, TypeScript, y Vite.</h1>
          <p>Este proyecto utiliza Bootstrap para el diseño responsivo</p>
        </section>
        <section id="about" className="mb-5">
          <h2>Sobre mí</h2>
          <div className="d-flex flex-column flex-md-row align-items-center gap-4">
            <img
              src="/img2.jpg"
              alt="Foto personal"
              style={{ width: '200px', borderRadius: '10px', objectFit: 'cover' }}
            />
            <div>
              <p>
                Hola Soy Chao, y os presento mi supuesto nuevo portfolio web. Aquí encontrarás una muestra de mi página, mis proyectos y algo sobre mí.
                Me gusta explorar nuevas ideas y aprender cosas nuevas. En este espacio, encontrarás algunos de mis intereses y proyectos personales. En este portfolio, podrás explorar algunos de los proyectos en los que hice.</p>
              <p>Soy una persona con ganas de aprender. Me esfuerzo por trabajar
                de manera efectiva en equipo, siendo responsable y puntual.
                Tengo fuerte deseo con la mejora continua y el cumplimiento de
                objetivos.
                Hice prácticas de empresas FCT en AvanzaFibra durante 2
                meses sobre como montar fibras, fusión de cables... Titulos: Título de Educación Obligatorio
                Estudios ESO y Título de técnico grado de medio de sistemas microinformaticos
                Estudios FP 2021-2023
                Lorem ipsum incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </section>
        <section id="languages" className="mb-5">
          <h2 className="text-center mb-4">Idiomas</h2>

          <div className="mb-3">
            <p className="fw-bold">🇪🇸 Castellano</p>
            <div className="progress">
              <div className="progress-bar bg-grey" style={{ width: '90%' }}>
                90%
              </div>
            </div>
          </div>

          <div className="mb-3">
            <p className="fw-bold">🇬🇧 Inglés</p>
            <div className="progress">
              <div className="progress-bar bg-info" style={{ width: '50%' }}>
                50%
              </div>
            </div>
          </div>

          <div className="mb-3">
            <p className="fw-bold">🇨🇳 Chino</p>
            <div className="progress">
              <div className="progress-bar bg-warning text-dark" style={{ width: '40%' }}>
                40%
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="mb-5">
          <h2>Proyectos</h2>
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
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
                <tr>
                  <td colSpan={3}>
                    <video width="100%" height="auto" controls>
                      <source src="./video1.mp4" type="video/mp4" />
                      Tu navegador no soporta el video.
                    </video>
                  </td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <div className="ratio ratio-16x9">
                      <iframe
                        src="https://www.youtube.com/embed/iG2jotQo9NI?si=CG7eg7wFQq6Irgrh"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <img src="/Plantilla.jpeg" alt="Plantilla" className="img-fluid mb-4" />
          </div>
        </section>
        <section id="contact" className="mb-5">
          <h2>Contacto</h2>
          <p>Envíame un email a <a href="mailto:tucorreo@email.com">tucorreo@email.com</a></p>
        </section>
      </Container>
      <footer className="text-center py-4 border-top mt-5">
        <h3 className="mb-3">Página web creada en 2024</h3>
        <a href="#" className="me-3 text-dark fs-4">
          <i className="bi bi-twitter"></i> {/* Ícono de Twitter */}
        </a>
        <a href="#" className="me-3 text-dark fs-4">
          <i className="bi bi-linkedin"></i> {/* Ícono de LinkedIn */}
        </a>
        <a href="#" className="text-dark fs-4">
          <i className="bi bi-youtube"></i> {/* Ícono de YouTube */}
        </a>
      </footer>
    </div>

  );
}

export default App;