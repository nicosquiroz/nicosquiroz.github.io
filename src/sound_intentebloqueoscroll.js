import React, { Component } from 'react';
import {Howl} from 'howler';
import "./sound.css";

import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


const audioClips = [
    // {sound: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_MP3.mp3", label: "Canción"},
    {sound: "./sounds/cancion1.mp3", label: "Give me a sound!"}
  ];

class Sound extends Component {
 /*definición de bloqueos de scroll en el body*/
 disableScroll = () => {
  // Bloquear el scroll del body
  disableBodyScroll(document.body);
};
enableScroll = () => {
  // Habilitar el scroll del body
  enableBodyScroll(document.body);
};

 
 
 
 
 
 
  /*Toma el estado de la reprodcción. Objetivo, cambiar css cuando se reproduce el sonido*/
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      
    };
    this.sound = null;
  }

  soundPlay = (src) => {
    if (this.sound) {
      this.sound.stop();
    }
    
    this.disableScroll();
    this.sound = new Howl ({
        src,
        html5: true,
        onplay: () => {
          this.setState({ isPlaying: true });
          this.disableScroll(); /*aquí se responde cuando está sonando*/
          console.log("disabled");
        },
        onend: () => {
          this.setState({ isPlaying: false });
          this.disableScroll();
          console.log("enabled");
        },
        onpause: () => {
          this.setState({ isPlaying: false });
          this.disableScroll();
          console.log("enabled");
        },
        onstop: () => {
          this.setState({ isPlaying: false });
          this.disableScroll();
          console.log("enabled");
        },
        
    });

    this.sound.play();
    console.log("playing");
    
    
};


  
RenderButtonSound = () => {
    return audioClips.map((soundObj, index) => {
        return(
          
            <button key={index} onClick={() => this.soundPlay(soundObj.sound)}>
                <b>Give me a sound!</b>
                <hr className="linea"></hr>

            </button>
            
        )
    })

};

// componentDidMount() {
//   // Agregar un evento para detectar cuando el sonido se detiene (termina)
//     this.sound.on('end', this.handleSoundEnd);
//     console.log("se activó la de apagado");
  
// }

// componentWillUnmount() {
//   // Eliminar el evento cuando el componente se desmonta
// {this.sound.off('end', this.handleSoundEnd)

// }

// componentWillUnmount() {
//   clearAllBodyScrollLocks();
// }

render(){
  const { isPlaying } = this.state;
  return (
    <div className={`Sound ${isPlaying ? "playing" : ""}`}>
      {this.RenderButtonSound()}
      </div>
    
  );
}
}


export default Sound;