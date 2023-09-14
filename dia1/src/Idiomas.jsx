import React, {useState} from 'react'

function Idiomas(props) {
  const[idiomas, setIdiomas] = useState([
    'INGLÉS',
    'ESPAÑOL',
    'ALEMÁN',
    'ITALIANO',
    'PORTUGÉS',
    'FRANCÉS',
    'COREANO'
  ]);

  const[mostrarIdiomas, setMostrarIdiomas] = useState(true);

  const toggleIdiomas = () => {
    setMostrarIdiomas(!mostrarIdiomas);
  }

  return (
    <div>
      <h2 onClick={toggleIdiomas}>{props.title}</h2>
      {mostrarIdiomas && (
        <ul>
          {idiomas.map((idiomas, index) => (
            <li key={index}>{idiomas}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Idiomas

