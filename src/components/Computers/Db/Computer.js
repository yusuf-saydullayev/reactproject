import React from 'react';
import { withRouter } from 'react-router-dom';


const Computer = props => {

  return (

    <div className="Komp" onClick={() => props.history.push('/computer/' + props.name.toLowerCase())}>
      <hr />
      <h1>Name: {props.name}</h1>
      <p>Price: {props.price}</p>
      <hr />
    </div>
  )
}



export default withRouter(Computer);
