import React from "react";
import memesData from "../memesData.js";
function Meme(){
   // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg");
    const [meme, setMeme] = React.useState(
        {
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg"
        }
    )
    const [allMemeImages,setAllMemeImage] = React.useState(memesData);
    function GetImageUrl(){
        let memesArr = allMemeImages.data.memes;
        let imgPosition = Math.floor(Math.random() * memesArr.length);
        setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: memesArr[imgPosition].url
               })            
        );

    }
    function handleChange(event){
        const {name,value, type, checked} = event.target;
        console.log(meme)
        setMeme(prevMeme =>{
            return {
                ...prevMeme,
                [name] : type==="checkbox" ? checked : value
            }
        })
    }
    return(
        <main>
            <div className="form">             
                <input 
                    className="form--input"  
                    type="text"
                    name="topText" 
                    value={meme.topText}
                    onChange={handleChange}
                /> 
                <input 
                    className="form--input" 
                    type="text" 
                    name="bottomText" 
                    value={meme.bottomText}
                    onChange={handleChange}

                />
                <button 
                    className="form--button" 
                    type="button" 
                    onClick={GetImageUrl}
                    >Get a new meme image,
                </button>       
            </div>
            <div className="meme">
                <img className="meme--image"  src={meme.randomImage} />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );

}

export default Meme;