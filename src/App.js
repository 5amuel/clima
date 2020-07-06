import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Fromulario';


function App() {

  //Creacion del state
  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });
  const {ciudad, pais} = busqueda;

  const[consultar, guardarConsultar] = useState(false);

  useEffect(() =>{
    const consultarAPI = async () => {
      https://samples.openweathermap.org/data/2.5/weather?q=guadalajara,mexico&appid=49286c95f627abed045531eed8b17618

    }
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
              2
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    
  );
}

export default App;
