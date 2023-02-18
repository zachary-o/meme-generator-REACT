import React from 'react'
import img from '../images/trollface.png'

export const Header = () => {
  return (
    <header>
      <img src={img} alt="troll face logo" />
      <h2>Meme Generator</h2>
    </header>
  );
}
