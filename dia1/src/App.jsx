import "./App.css";
import Educacion from './Educacion';
import Experiencia from './Experiencia';
import Habilidades from './Habilidades';
import Historico from './Historico';
import Idiomas from './Idiomas';
import Interese from './Interese';
import Informacion from './Informacion';
import Photo from './Photo';

function App() {
  return (
    <div className="app-container">
      <div className="left-section">
        <div className="background-left">
          <Photo/>
          <Habilidades title="Habilidades"/>
          <Idiomas title="Idiomas"/>
          <Interese title = "Interese"/>
        </div>
      </div>
      <div className="right-section">
        <div className="background-right">
          <Informacion title="Información"/>
          <Educacion title="Historico Educacional"/>
          <Experiencia title="Experiencia"/>
          <Historico title="Historico"/>
        </div>
      </div>
    </div>
  );
}

export default App;
