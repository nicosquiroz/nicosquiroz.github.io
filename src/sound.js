import React, { Component } from 'react';
import {Howl} from 'howler';
import "./sound.css";
const audioClips = [
    // {sound: "https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_MP3.mp3", label: "Canción"},
    {sound: "./sounds/cancion1.mp3", label: "Give me a sound!"}
  ];

class Sound extends Component {
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

    this.sound = new Howl ({
        src,
        html5: true,
        onplay: () => {
          this.setState({ isPlaying: true });
        },
        onend: () => {
          this.setState({ isPlaying: false });
        },
        onpause: () => {
          this.setState({ isPlaying: false });
        },
        onstop: () => {
          this.setState({ isPlaying: false });
        },
    });

    this.sound.play();
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

// import RenderButtonSound from "./soundplay";

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