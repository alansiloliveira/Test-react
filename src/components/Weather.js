import React from 'react';


const Weather = props => (
  <div>
    { props.city && props.country && <p> Local: {props.city}, {props.country}</p>} 
    { props.temperature && <Temperature temp={props.temperature}/> }
    { props.temp_min && <p>Temperatura Minima: {props.temp_min}ºC</p> }
    { props.temp_max && <p>Temperatura Máxima: {props.temp_max}ºC</p> }
    { props.error && <p>{props.error}</p>}
  </div>
);

const Temperature = ({ temp }) => {
  if (temp < 5) {
    return (
      <p className="blue">Temperatura: {temp}ºC</p>
    )
  } else if (temp < 25) {
    return (
      <p className="orange">Temperatura: {temp}ºC</p>
    )
  } else {
    return (
      <p className="red">Temperatura: {temp}ºC</p>
    )
  }
}

export default Weather;


