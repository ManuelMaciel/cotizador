import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

//Styled Components
const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #fff;
  padding: 3rem;
`;


function App() {
  //useState
  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos: {
      marca:  '',
      year:   '',
      plan:   ''
    }
  })

  const [ cargando, guardarCargando ] = useState(false);
  const { cotizacion, datos } = resumen;

  return (
    <Fragment>
      <Contenedor>
        <Header 
          titulo='Cotizador de Seguro'
        />
        <ContenedorFormulario>
          <Formulario 
            guardarResumen={guardarResumen}
            guardarCargando={guardarCargando}
          />
          { cargando ? <Spinner /> : null }
          
          { !cargando 
            ? <Resumen datos={datos} /> 
            : null
          }
          { !cargando 
            ? <Resultado cotizacion={cotizacion} /> 
            : null
          }
          
        </ContenedorFormulario>
      </Contenedor>
    </Fragment>
  );
}

export default App;
