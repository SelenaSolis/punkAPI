import React from 'react';
import './beerStyle.css';

function Beers(props){
    return(
        <div className="beer">
            <img src={props.image} alt={props.image}/>
            <h2>{props.name}</h2>
            <h3>{props.tagline}</h3>
            <h3>{props.abv}</h3>
            <button onClick={() => props.likeButton(props.index)}>{props.buttonText}</button>
        </div>
    )
}

export default Beers