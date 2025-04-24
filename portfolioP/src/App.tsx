// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Container, Button, Nav } from 'react-bootstrap';
import './App.css'; // Asegúrate de que esta línea esté presente
// Importa los componentes desde la carpeta components
import HomePage from './components/Pagina1';  // Ahora desde components/HomePage
import ContactPage from './components/Contacto';  // Ahora desde components/ContactPage

import './App.css';  // Mantén tus estilos personalizados

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
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Container>

        <footer className="text-center py-3 border-top mt-5">
          <h3 className="mb-2">Página web creada en 2024</h3>
        </footer>
      </div>
    </Router>
  );
};

export default App;
