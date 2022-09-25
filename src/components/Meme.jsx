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

    return(
        <main>
            <div className="form">             
                <input 
                    className="form--input"  
                    type="text"
                    name="title1" 
                /> 
                <input 
                    className="form--input" 
                    type="text" 
                    name="title2" 
                />
                <button 
                    className="form--button" 
                    type="button" 
                    onClick={GetImageUrl}
                    >Get a new meme image,
                </button>       
            </div>
            <div className="generated--img">
                <img src={meme.randomImage} />
            </div>
        </main>
    );

}

export default Meme;