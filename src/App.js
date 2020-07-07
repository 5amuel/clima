import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Fromulario';
import Clima from './components/Clima';

function App() {

  //Creacion del state
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const {ciudad, pais} = busqueda;

  const[consultar, guardarConsultar] = useState(false);
  const[resultado, guardarResultado] = useState({

  })

  useEffect(() => {
    const consultarAPI = async () => {
      if(consultar){
        const appId = '49286c95f627abed045531eed8b17618';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        guardarResultado(resultado);
        guardarConsultar(false);
      }
    }
    consultarAPI();
  },[consultar]);

  return (
    <Fragment>
      <Header
        titulo="Clima React App"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
            </div>
            <div className="col m6 s12"> 
              <Clima 
                resultado={resultado}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
