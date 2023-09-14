import React, { useState } from 'react'

function Interese(props) {
  const [interese, setInterese] = useState([
    'Programación Full-Stack',
    'Prácticas Universitárias',
    'Desarrollo Web'
  ]);

  const [mostrarInterese, setMostrarInterese] = useState(true);

  const toggleInterese = () => {
    setMostrarInterese(!mostrarInterese);
  }
  return (
    <div>
      <h2 onClick={toggleInterese}>{props.title}</h2>
      {mostrarInterese && (
        <ul>
          {interese.map((interese, index) => (
            <li key={index}>{interese}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Interese


