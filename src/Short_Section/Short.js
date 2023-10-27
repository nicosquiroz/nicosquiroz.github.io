import React from "react";
import "./Short.css";
import Video from "../img/Video.mp4";
import Poster from "../img/Poster.png";
const Short = () => {

  return (
    <div className="short">
      <div className="Header"><div><p className="studios"><em>INNERTWIST</em> Studios</p></div><div><p className="cta"><a href="https://www.youtube.com/watch?v=vTHW212gHqE">Watch the film</a></p></div>
      </div>
      <video id="background-video" autoplay="autoplay" loop="true" muted defaultmuted playsinline src={Video} type="video/mp4" poster={Poster}></video>
      {/* <script>
      document.getElementById('video').play();
      </script> */}

      <div className="texto"><h4>EL EDIFICIO MÁS ALTO DEL MUNDO</h4>
      <p>Short film created for the contest GEN:48 by Runway.
        <br>
        </br>
        The video was created with text-to-video tools using generative AI. <p></p>
        <br>
        </br>
        <a><b><u>Learn more about the creation process.</u></b></a>
        
      </p>
      </div>

    </div>
    
  );
};

export default Short;