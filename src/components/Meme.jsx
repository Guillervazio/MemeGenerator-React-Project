import React from "react";
import memesData from "../memesData.js";
function Meme(){
    const [memeImage, setMemeImage] = React.useState("");

    function GetImageUrl(){
        let memesArr = memesData.data.memes;
        let imgPosition = Math.floor(Math.random() * memesArr.length);
        setMemeImage(imgUrl => imgUrl =memesArr[imgPosition].url);

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
                <img src={memeImage} />
            </div>
        </main>
    );

}

export default Meme;