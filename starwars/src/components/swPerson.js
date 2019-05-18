import React from 'react';
import './StarWars.css';

const SwPerson = props => {
  return (
    <div className="character-card">
      <div className="title-wrapper">
        <h3>{props.character.name}</h3>
      </div>
      <ul className="character-list">
        <li>Gender: {props.character.gender}</li>
        <li>Height: {props.character.height}</li>
        <li>Mass: {props.character.mass}</li>
        <li>Hair Color: {props.character.hair_color}</li>
        <li>Skin Color: {props.character.skin_color}</li>
        <li>Eye Color: {props.character.eye_color}</li>
        <li>Birth Year: {props.character.birth_year}</li>
      </ul>
    </div>
  );
};

export default SwPerson;
