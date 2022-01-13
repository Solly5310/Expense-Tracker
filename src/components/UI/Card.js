import './Card.css';
import React from 'react';

function Card(props) {
   let shade = 'card ' + props.className;
   
   
   return (
      <div className={shade}>{props.children}</div>
   )


}

export default Card