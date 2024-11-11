import './App.css';
import Experiencia from './pages/experiencia/Experiencia';
import FormacionAcademica from './pages/formacion/FormacionAcademica';
import Inicio from './pages/inicio/Inicio';
import Hobby from './pages/hobby/Hobby';
import SobreMi from './pages/sobremi/SobreMi';
import Contacto from './pages/contacto/Contacto';

function App() {
  return (
    <div className="App">    
      <Inicio/>
      <SobreMi/>
      <FormacionAcademica/>
      <Experiencia/>
      <Hobby/>
      <Contacto/>
  
    </div>
    
  );
}

export default App;
