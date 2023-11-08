import React from "react";
import "./Short.css";
import Video from "../img/Video.mp4";
import Poster from "../img/Poster.png";
import ig from "../img/instagram.svg";
const LearnMore = () => {

  return (
    <div className="short">
      <div className="wrapper">
      <video id="background-video" autoplay="autoplay" defaultmuted muted loop="true" playsinline src={Video} type="video/mp4" poster={Poster}></video>
      
</div>
      <div className="Header"><div><p className="studios"><em>INNERTWIST</em> Studios</p></div><div><p className="cta"><a href="https://www.youtube.com/watch?v=vTHW212gHqE">Watch the film</a></p></div>
      </div>
      {/* <script>
      document.getElementById('video').play();
      </script> */}

      <div className="texto"><h4>EL EDIFICIO MÁS ALTO DEL MUNDO</h4>
      <p>Hola, hicimos un corto XDXD
        
      </p>
      </div>
      <div className="Footer"><div><a href="https://instagram.com/innertwistt/"><img className="ig" alt="ig" src={ig}/></a></div>
      </div>
    </div>
    
  );
};

export default LearnMore;