import React, { useState } from 'react';
import memesData from '../memeData';
import '../Inputs.css';

export default function Inputs(){
  const [meme, setMeme] = useState({
      topText: '',
      bottomText: '',
      randomImage: ''
  })
  const [allMemeImages, setAllMemeImages] = useState(memesData)
    function getImage(){
    const images= allMemeImages.data.memes
    const index = Math.floor(Math.random() * images.length)
    const url = images[index].url
    setMeme(prevMeme =>
        ({...prevMeme,
        randomImage: url}))
    
    }
    return (
        <>
            <main>
                <div>
                <form className="form container-fluid">
                    <div className="row inputs">
                        <input className="col-5 form--input p-2 m-3" type="text" placeholder="Top-Text" />
                        <input className="col-5 form--input p-2 m-3" type="text" placeholder="Bottom-Text" />
                    </div>
                    <div className="row">
                        <button className="col-12 form-button p-2 m-2" onClick={getImage}>Get a new meme image</button>
                    </div>
                </form>
                <div>
                <img className="memeImage" src={meme.randomImage} />
                </div>
                </div>
            </main>
        </>
    )
}