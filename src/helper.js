//calcula la diferencia de years
export function obtenerDiferenciaYear(year){
  return new Date().getFullYear() - year;
}

//calcula la diferencia de marca
export function calcularMarca(marca){
  let incremento;

  switch(marca){
    case 'europeo':
      incremento = 1.30;
      break;
    case 'americano':
      incremento = 1.15;
      break;
    case 'asiatico':
      incremento = 1.05;
      break;

    default:
      break;
  }
  return incremento;
}

//obtiene el plan de seguro
export function obtenerPlan(plan){
  return (plan === 'basico') ? 1.20 : 1.50;
}

//retorna la primera letra en mayuscula
export function primerMayuscula(texto){
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}