import './App.css';
import Experiencia from './pages/experiencia';
import FormacionAcademica from './pages/formacionAcademica';
import Inicio from './pages/inicio';
import Hobby from './pages/hobby';
import SobreMi from './pages/sobreMi';
import Contacto from './pages/contacto';

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
