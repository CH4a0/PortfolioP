import React from 'react';

interface ContactoProps {
  dark: boolean;
}

const Contacto: React.FC<ContactoProps> = ({ dark }) => (
  <div
    style={{
      background: dark ? '#212529' : '#fff',
      color: dark ? '#fff' : '#000',
    }}
  >
   <div className="container mt-5">
      <h3 className="mb-4">Contacto</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" placeholder="tu@correo.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea className="form-control" id="mensaje" rows={5} placeholder="Escribe tu mensaje aquí..."></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </div>
  </div>
);

export default Contacto;
