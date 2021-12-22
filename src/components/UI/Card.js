import './Card.css';

function Card(props) {
   let shade = 'card ' + props.className;
   
   
   return (
      <div className={shade}>{props.children}</div>
   )


}

export default Card