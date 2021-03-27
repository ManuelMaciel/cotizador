import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { primerMayuscula } from '../helper';

//StyledComponents
const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838F;
  color: #FFF;
  margin-top: 1rem;
`;

const Resumen = ({datos}) => {
  
  //extraer datos
  const { marca, year, plan } = datos;

  //si no se le envio ningun dato no retorna nada
  if( marca.trim() === '' || year.trim() === '' || plan.trim() === '') return null;
  
  return (  
    <ContenedorResumen>
      <h2>Resumen de Cotizacion</h2>
      <ul>
        <li>Marca: <span>{primerMayuscula(marca)}</span> </li>
        <li>Plan:  <span>{primerMayuscula(plan)}</span> </li>
        <li>Year:  <span>{year}</span> </li>
      </ul>
    </ContenedorResumen>
  );
}
 
Resumen.propTypes = {
  datos: PropTypes.object.isRequired
}

export default Resumen;