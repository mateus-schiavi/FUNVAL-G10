import React, {useState} from 'react'

function Historico(props) {
  const[historico, setHistorico] = useState ([
    'Misionero Retornado',
    'Formado en electrica de manutención electroeletronica',
    'Formado em Inglés',
    'Formado en Español'
  ])
  const [mostrarHistorico, setMostrarHistorico] = useState(true);

  const toggleHistorico = () => {
    setMostrarHistorico(!mostrarHistorico);
  }
  return (
    <div>
      <h2 onClick={toggleHistorico}>{props.title}</h2>
      {mostrarHistorico && (
        <ul>
          {historico.map((historico, index) => (
            <li key={index}>{historico}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Historico
