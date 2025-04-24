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
    <h2>Contacto</h2>
    <p>Puedes contactarme por email: <a href="mailto:tucorreo@email.com">tucorreo@email.com</a></p>
  </div>
);

export default Contacto;
