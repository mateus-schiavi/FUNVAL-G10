import React, { useState } from 'react';

function Educacion(props) {
  const [educacion, setEducacion] = useState([
    'BYU-IDAHO - Applied Technology',
    'Engenãria de Computación - UNIVESP - SP - BR'
  ]);

  const [mostrarEducacion, setMostrarEducacion] = useState(true);

  const toggleEducacion = () => {
    setMostrarEducacion(!mostrarEducacion);
  };

  return (
    <div>
      <h2 onClick={toggleEducacion}>{props.title}</h2>
      {mostrarEducacion && (
        <ul>
          {educacion.map((educacion, index) => (
            <li key={index}>{educacion}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Educacion;
