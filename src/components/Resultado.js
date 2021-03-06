import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;
const ResultadoCotizacion = styled.div`
  text-align: center;
  padding: 1rem;
  border: 1px solid #26C6DA;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;
const MensajeCotizacion = styled.p`
  color: #00838F;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Resultado = ({cotizacion}) => {
  
  // if(cotizacion === 0) return null;

  // return (  
  //   <h1>Resultado</h1>
  // );

  return (
    (cotizacion === 0) 
      ? <Mensaje>Elige la marca, el tipo de seguro y el year</Mensaje> 
      : (
          <ResultadoCotizacion>
            <TransitionGroup
              component='span'
              className='resultado'
            >
              <CSSTransition
                classNames='resultado'
                key={cotizacion}
                timeout={{ enter:500, exit:500}}
              >
                <MensajeCotizacion>El total es $ <span>{cotizacion}</span></MensajeCotizacion> 
              </CSSTransition>
            </TransitionGroup>
          </ResultadoCotizacion>
         )
  )

}

Resultado.propTypes = {
  cotizacion: PropTypes.number.isRequired
}
 
export default Resultado;