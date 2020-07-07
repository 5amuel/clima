import React, { useState } from 'react';
import Error from './Error'

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {


//extraer ciudad y pais del state con destructuring
    const { ciudad, pais } = busqueda;

//state para los errores durante el submit 
const [error, guardarError] = useState(false);

//funcion que coloca los elementos en el state
    const handleChange = e => {
        //actualizar el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

//Cuando el usuario da sumit al form
    const handleSubmit = e => {
        e.preventDefault();
        //Validar
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true)
            return;
        }
        guardarError(false);
        //pasarlo al componente principal
        guardarConsultar(true);
    }


    return ( 
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error mensaje="Ambos campos son obligatorios"/> : null}
            <div className="input-field col s12">
                <input 
                    type="text" 
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select 
                    name="pais" 
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione un Pais --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
                <div className="input-field col s12">
                    <input 
                        type="submit"
                        value="Mostrar Clima"
                        className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;