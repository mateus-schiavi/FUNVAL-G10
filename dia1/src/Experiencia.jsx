import React, { useState } from 'react'

function Experiencia(props) {
  const [experiencia, setExperiencia] = useState([
    'Maestro de Inglés',
    'Maestro de Informática',
    'Profesor en English Connect',
    'Profesor de Matemática'
  ]);
  const [mostrarExperiencia, setMostrarExperiencia] = useState(true);

  const toggleExperiencia = () => {
    setMostrarExperiencia(!mostrarExperiencia);
  }
  return (
    <div>
      <h2 onClick={toggleExperiencia}>{props.title}</h2>
      {mostrarExperiencia && (
        <ul>
          {experiencia.map((experiencia, index) => (
            <li key={index}>{experiencia}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Experiencia