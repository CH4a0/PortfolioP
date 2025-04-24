import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import './App.css';

// Importa los componentes desde la carpeta components
import Pagina1 from './components/Pagina1';  // Renombrado de HomePage a Pagina1
import Contacto from './components/Contacto';  // Renombrado de ContactPage a Contacto

const App: React.FC = () => {
  const [dark, setDark] = useState(false);

  return (
    <Router>
      <div
        data-bs-theme={dark ? 'dark' : 'light'}
        style={{
          minHeight: '100vh',
          background: dark ? '#212529' : '#fff',
          color: dark ? '#fff' : '#000',
        }}
      >
        <Navbar expand="lg" bg={dark ? 'dark' : 'light'} variant={dark ? 'dark' : 'light'} className="mb-3 shadow-sm">
          <Container>
            <Navbar.Brand href="#home">Mi Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Inicio</Nav.Link> {/* Ruta para la página principal */}
                <Nav.Link href="#about">About Me</Nav.Link> {/* Ancla dentro de la misma página */}
                <Nav.Link href="#projects">Proyectos</Nav.Link> {/* Ancla dentro de la misma página */}
                <Nav.Link as={Link} to="/contact">Contacto</Nav.Link> {/* Ruta a la página de contacto */}
              </Nav>
              <Button variant={dark ? 'light' : 'dark'} onClick={() => setDark(d => !d)}>
                {dark ? 'Modo Claro' : 'Modo Oscuro'}
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <Routes>
            {/* Pasamos el estado dark como prop a Pagina1 y Contacto */}
            <Route path="/" element={<Pagina1 dark={dark} />} />
            <Route path="/contact" element={<Contacto dark={dark} />} />
          </Routes>
        </Container>

        <footer className="text-center py-3 border-top mt-5">
          <h3 className="mb-2">Página web creada en 2025</h3>
        </footer>
      </div>
    </Router>
  );
};

export default App;
