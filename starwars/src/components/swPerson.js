import React from 'react';
import './StarWars.css';

const SwPerson = props => {
  return (
    <li className="list-item">
      <div className="character-card">
        <h3>{props.character.name}</h3>
        <p>Gender: {props.character.gender}</p>
        <p>Height: {props.character.height}</p>
        <p>Mass: {props.character.mass}</p>
        <p>Hair Color: {props.character.hair_color}</p>
        <p>Skin Color: {props.character.skin_color}</p>
        <p>Eye Color: {props.character.eye_color}</p>
        <p>Birth Year: {props.character.birth_year}</p>
      </div>
    </li>
  );
};

export default SwPerson;
