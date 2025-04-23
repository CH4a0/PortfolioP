import { useState } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './App.css';

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div data-bs-theme={dark ? 'dark' : 'light'} style={{ minHeight: '100vh', background: dark ? '#212529' : '#fff' }}>
      <Navbar expand="lg" bg={dark ? "dark" : "light"} variant={dark ? "dark" : "light"} className="mb-4 shadow-sm">
        <Container>
          <Navbar.Brand href="#home">Mi Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Inicio</Nav.Link>
              <Nav.Link href="#about">Sobre mí</Nav.Link>
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
          <h1>Hola, soy [Tu Nombre]</h1>
          <p>Desarrollador web apasionado por React y tecnologías modernas.</p>
        </section>
        <section id="about" className="mb-5">
          <h2>Sobre mí</h2>
          <p>Aquí puedes escribir una breve descripción sobre ti.</p>
        </section>
        <section id="projects" className="mb-5">
          <h2>Proyectos</h2>
          <ul>
            <li>Proyecto 1</li>
            <li>Proyecto 2</li>
            <li>...</li>
          </ul>
        </section>
        <section id="contact" className="mb-5">
          <h2>Contacto</h2>
          <p>Envíame un email a <a href="mailto:tucorreo@email.com">tucorreo@email.com</a></p>
        </section>
      </Container>
    </div>
  );
}

export default App;