import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helper';

//Styled Compontents
const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center !important;
`;
const Label = styled.label`
  flex: 0 0 89px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
  margin: 0 1rem;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;
const Boton = styled.button`
  background-color: #00838F;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color .3s ease;
  margin-top: 2rem;

  &:hover{
    background-color: #26C6DA;
    cursor: pointer;
  }
`;
const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
`;

//Componente
const Formulario = ({guardarResumen, guardarCargando}) => {
  
  const [ datos, guardarDatos ] = useState({
    marca: '',
    year:  '',
    plan:  ''
  }); 

  const [ error, guardarError ] = useState(false);

  const { marca, year, plan } = datos;

  //leer datos
  const obtenerInfo = e => {
    guardarDatos({
      ...datos,
      [e.target.name] : e.target.value
    });
  }
  //cuando se hace el submit
  const cotizarSeguro = e => {
    e.preventDefault();

    if(marca.trim() === '' || year.trim() === '' || plan.trim() === '' ){
      guardarError(true);
      return;
    }
    guardarError(false);

    let resultado = 2000;
    //obtener la difencia de datos
    const diferencia = obtenerDiferenciaYear(year);
    //por cada year restar 3%
    resultado -= (( diferencia * 3 ) * resultado) / 100;

    //americano 15%
    //asiatico 5%
    //europeo 30%
    resultado = calcularMarca(marca) * resultado;
    //Basico Aumenta 25%
    //Total 50%
    const incrementoPlan = obtenerPlan(plan);
    resultado = parseFloat( incrementoPlan * resultado ).toFixed(2);
    //Spinner
    guardarCargando(true);
    setTimeout(() => {
      guardarCargando(false);
      //pasar al componente principal
      guardarResumen({
        cotizacion: Number(resultado),
        datos
      });
    }, 3000)
    
  }

  return (  
    <form
      onSubmit={cotizarSeguro}
    >
      {error ? <Error>Todos los campos son obligatorios</Error> : null}
      <Campo>
        <Label>Marca</Label>
        <Select
          name='marca'
          value={marca}
          onChange={obtenerInfo}
        >
          <option value=''>--Seleccione--</option>
          <option value='americano'>Americano</option>
          <option value='europeo'>Europeo</option>
          <option value='asiatico'>Asiatico</option>
        </Select>
      </Campo>
      <Campo>
        <Label>Year</Label>
          <Select
            name='year'
            value={year}
            onChange={obtenerInfo}
          >
            <option value="">-- Seleccione --</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
          </Select>
      </Campo>

      <Campo>
        <Label>Plan</Label>
        <InputRadio
          type='radio'
          name='plan'
          value='basico'
          checked={plan === 'basico' }
          onChange={obtenerInfo}
        /> Basico

        <InputRadio
          type='radio'
          name='plan'
          value='completo'
          checked={plan === 'completo' }
          onChange={obtenerInfo}
        /> Completo
      </Campo>
      <Campo>
        <Boton type='submit'>Cotizar</Boton> 
      </Campo>
    </form>
  );
}

Formulario.propTypes = {
  guardarResumen: PropTypes.func.isRequired,
  guardarCargando: PropTypes.func.isRequired
}
 
export default Formulario;