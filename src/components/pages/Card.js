import React from 'react';
import '../css/Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <div className='image'>
        <a href="#">
          <img src="#" alt="" />
        </a>
      </div>
      <div>
        <h2 className="title-card">{props.categorie} </h2>
      </div>
    </div>
    
  )
}

export default Card