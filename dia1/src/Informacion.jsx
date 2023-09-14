import React, { useState } from 'react';

function Informacion(props) {
  const [información, setInformación] = useState([
    'Dirección: Rua Expedicionário João de Carvalho, 106',
    'E-mail: mtsschiavi@gmail.com',
    'Teléfono: +55(11)942-642-378',
    'Fecha de Nascimiento: 04.07.1998',
    'Permiso: NO'
  ]);

  const [mostrarInformacion, setMostrarInformacion] = useState(true);

  const toggleInformacion = () => {
    setMostrarInformacion(!mostrarInformacion);
  }

  return (
    <div>
      <h2 onClick={toggleInformacion}>{props.title}</h2>
      {mostrarInformacion && (
        <ul>
          {información.map((informacion, index) => (
            <li key={index}>{informacion}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Informacion;
