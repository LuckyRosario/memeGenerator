import React, { useState } from 'react';
import memesData from '../memeData';
import '../Inputs.css';

export default function Inputs(){
  const [meme, setMeme] = useState({
      topText: '',
      bottomText: '',
      randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  const [allMemeImages, setAllMemeImages] = useState(memesData)
    function getImage(event){
        event.preventDefault()
    const images= allMemeImages.data.memes
    const index = Math.floor(Math.random() * images.length)
    const url = images[index].url
    setMeme(prevMeme =>
        ({...prevMeme,
        randomImage: url}))
    
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    return (
        <>
            <main>
                <div>
                 <div className="container">
                <form className="form container-fluid">
                    <div className="row inputs">

                        <input className="col-5 form--input p-2 m-3" type="text" placeholder="Top-Text"   
                         name="topText"
                        value={meme.topText}
                        onChange={handleChange} />
                        
                        <input className="col-5 form--input p-2 m-3" type="text" placeholder="Bottom-Text"
                         name="bottomText"
                         value={meme.bottomText}
                         onChange={handleChange} />

                    </div>
                    <div className="row">
                        <button className="col-12 form-button p-3 m-3" onClick={getImage}>Get a new meme image</button>
                    </div>
                </form>
                </div>
                <div className="meme">
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                <img className="memeImage w-100" alt="meme image" src={meme.randomImage} />
               
                </div>
                </div>
            </main>
        </>
    )
}