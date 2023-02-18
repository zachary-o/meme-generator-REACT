import React from 'react'
import { useState, useEffect } from 'react';


export const Meme = () => {

const [meme, setMeme] = useState({
  topText: "",
  bottomText: "",
  randomImage: "https://i.imgflip.com/30b1gx.jpg",
});
const [allMemes, setAllMemes] = useState([])

// FETCH DATA
useEffect(() => {
  const getMemes = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  };
  getMemes();
}, []);

// RANDOM IMAGE FUNCTION
const getMemeImage = () => {
    const randomNumber  = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }));
};

// BUTTON EVENT LISTENER FUNCTION: CHANGE IMAGE
const handleMemeCHange = (event) => {
  const { name, value} = event.target
  setMeme(prevMeme => {
    return {
      ...prevMeme,
      [name]: value
    }
  })
}


  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleMemeCHange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleMemeCHange}
        />

        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼️
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} alt="" className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
