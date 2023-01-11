import React from 'react'
import '../stylesheet/Testimonio.css'



export function Testimonial(props){
  return(
    <div className='contenedor'>
    <img className='imagen-testimonio'
    src={require(`../img/${props.imagen}.png` )} 
    alt={props.names} />
    <div className='contenedor-texto'>
      <p className='name'>{props.names} En {props.country}</p>
    <p className='post'>{props.post} en {props.company}</p>
      <p className='testimonial'>{props.testimonial}"</p>
    </div>
    </div>

  );  

}
