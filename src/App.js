import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png' ; //primero escribimos la forma en que queremos referirnos a esa imagen en nuestro codigo
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics,setNumClics] = useState(0); //0 va a ser el valor inicial de numClics y con setNumClics lo actualizamos

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = ()=>{
    setNumClics(0)
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecode-camp-logo'
          src={freeCodeCampLogo}
          alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics= {numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
        
      </div>
    </div>
  );
}

export default App;
