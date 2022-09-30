import React from "react";
import styled from "styled-components";

const Pararelogramo = styled.div`
  position: absolute;
  border-radius: 4px;
  transform: skew(0, 20deg);
  overflow: hidden;
  top: ${props => props.arriba};
  left: ${props => props.izquierda};
  bottom: ${props => props.abajo};
  right: ${props => props.derecha};
  height: ${props => props.alto};
  width: ${props => props.ancho};
  background-color: ${props => props.colores};
  transition: all 0.5s;
`;

const PararelogramoImg = styled.img`
  width: 100%;
  height: 125%;
  object-fit: cover;
  object-position: center;
  transform: skew(0, -20deg) translateY(-10%);
`;

const LoginShape = ({ colores, arriba, izquierda, abajo, derecha, alto, ancho, imagen }) => {
  return (
    <Pararelogramo 
      colores={colores} 
      arriba={arriba} 
      abajo={abajo} 
      izquierda={izquierda}
      derecha={derecha} 
      alto={alto} 
      ancho={ancho}
    >
      {imagen && <PararelogramoImg src={imagen} />}
    </Pararelogramo>
  )
}

export default LoginShape;