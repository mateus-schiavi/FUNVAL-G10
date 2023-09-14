
import React, { useState } from 'react';

function Habilidades(props) {
  const [habilidades, setHabilidades] = useState([
    'HTML',
    'CSS',
    'C#',
    'Java',
    'JavaScript',
    'Python'
  ]);

  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  const toggleHabilidades = () => {
    setMostrarHabilidades(!mostrarHabilidades);
  };

  return (
    <div>
      <h2 onClick={toggleHabilidades}>{props.title}</h2>
      {mostrarHabilidades && (
        <ul>
          {habilidades.map((habilidades, index) => (
            <li key={index}>{habilidades}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Habilidades;
