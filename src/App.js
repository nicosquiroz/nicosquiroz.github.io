import React, { useState } from 'react';
import './App.css';
// import { NavHashLink as Link} from 'react-router-hash-link';
// import { Link } from 'react-router-dom';

// Implementando componentes para cambiar entre "Música" y "Ciencia"
import Header from './Header';
import MusicSection from './MusicSection';
import ScienceSection from './ScienceSection';
import Sidebar from './sidebar';
import Futuro from './jfuturo';
import Filtros from './filtros';
import Sound from "./sound";

import { BrowserRouter } from 'react-router-dom';

import Diagrama from './img/diagrama.png';
import './slideshow.css';


 function App() {
  // Implementando componentes para cambiar entre "Música" y "Ciencia"
  const [showMusicSection, setShowMusicSection] = useState(true);

  const handleMusicClick = () => {
    setShowMusicSection(true);
  };

  const handleScienceClick = () => {
    setShowMusicSection(false);
  };
  


  

 
  return (
    <BrowserRouter>
    
   

    <div className="App">


      

      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <h4> Nicolás S. Quiroz</h4>
      
      <div>
        
      </div>

      <div>
         <p>
           I'm a Data Scientist living in Viña del Mar, Chile.
        </p><p>
          <br></br>
           Chaotically learning in the line between art and science. <br></br>I'm currently <a href="#deepmusic">applying Machine Learning</a> in music production.
        </p>
        <p>
         nicosquiroz@gmail.com - <a href='https://www.threads.net/nicosquiroz'>Threads</a> - <a href='https://www.linkedin.com/in/nicosquiroz'>Linkedin</a>
        </p>
        <p id="deepmusic"></p>
      </div>
    <div className='Blog'>
    
  
    <p >A JOURNEY TOWARDS DEEP MUSIC.</p>

    <p>I can’t be the only one who has experienced a mysterious feeling with DeepDreaming imagery. Known patterns, strangely unfamiliar and hypnotic to our eyes, yet very captivating.</p>
    <p> And as with anything that’s visually beautiful and kind of illusory, I wonder: <b>How does it sound?</b>
</p>
<p>Can generated sounds induce the same warm unfamiliarity in our minds, opposed to what music or visual art usually provokes?</p>
<br></br>
<br></br>

<div style={{display: 'flex'}}>
<p style={{display: 'inline'}}>I’m documenting the process guided by a creative project I’ve been working on for the past few months with my brilliant friend <a href='http://instagram.com/jajamacka'>Macka Garrido</a>. 
She’s currently making a video for
</p><Sound/>
</div>

 <p>I created, and I’m composing the music for a video she made.
</p>
{/* <aside className={'sidebar2'}><Sound/></aside> */}
<p>
{/* (IN MY INTERPRETATION (view))

inspired me… */}

It portraits beautifully these intermediate states between chaos and certainty, and I can only close this exploration in the same lenaguege it uses.
</p>
<p>
But neither of us know what the other is exacly doing until it’s finished, nor what we wanted to say.
So I don’t know yet where I will get to, but that’s the fun part

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

</p>
</div>

    <div className="fondoblur">
      fondoblur
    </div>













    <section id="in" className="Seccion2" >

    <div className='Span'>
      <h1>INNERTWIST</h1>
    </div>

    <div className='gif'></div>


    {/* <div className="slideshow"><div><p className='slide-text'>Innertwist is composed by Mackarena Garrido Strelow and Nicolás S. Quiroz.</p></div></div> */}
    <div>
    {/* <p className="intxt">
    Como pueden ver en el video, amerita entrar en el mundo de la programación. Qué oportunidad más perfecta. Nos adentraremos en el análisis de imágenes y sonido, y cómo se mezclan a través del arte y tecnología. 
    </p> */}
   <p className="intxt">
    Audiovisual proyect started as a first approach to music and video. It consist in two stages. We’re now in the second stage. <b>And this is the point of view of Nico.</b>
    <br></br>Puedes explorar ambas áreas en detalle. Música y ciencia.</p>
    {/* <img className="diagrama" src={Diagrama}/> */}
    </div>

    <div className='Span'></div>

    
    <Header
        onMusicClick={handleMusicClick}
        onScienceClick={handleScienceClick}/>
      
      {showMusicSection ? <MusicSection /> : <ScienceSection />}

      <div className='Span'></div>
   <div class="row">
  <div class="column">
  <p>
  With my brilliant friend <a href='http://instagram.com/jajamacka'>Macka Garrido</a>, we've been secretly working on the same creative project. It's called <a href="#in ">Innertwist</a>. Right now, she's making a video for music I made, and I'm creating the music for a video she made. This started as our first steps to finally create the things we wanted to create.
  </p>
  {/* <p><b><u>Give me a sound! (pantalla en blanco)</u></b></p> */}
  
  {/* <img src={gif} class="gif" />; */}
  <p>
  The important thing now is that her video is simply beautiful to my eyes and mind. I see so many interpretations, so chaotic yet concise and ordered at the same time. She loves programming, as you might notice.
  </p><p>
  So I found in this challenge the perfect opportunity to incorporate this beautiful area of science and technology and see what happens if we let the machine dreams merge with sound waves.
  </p>
  </div>
  <div class="column">
    
  <div className='Span'></div>
  <div className='Span'></div>
  <div className='Span'></div>
<p>
  Now, I'm certain that there are tons of researchers, artists, and innovators who are at the frontier of what we know, and so many knowledgeable people who can either see together or differentiate where the line between art, science, or technology is drawn. I'm a beginner in every discipline. But I see enormous value in the thinking process. 
  , the mental process that comes with learning. I feel very inspired by how people arrive at the ideas they come across, how the lines and dots connect. It's as if the branches that come before something we can call an idea are, of course, part of that idea.
   {/* I don't mean to say that I'll reach a groundbreaking idea right away, but I'm inspired by witnessing how others learn. */}
  </p><p>
  I'd like to apply that process of mixing things in unexpected ways along the process, as I find that most of the time, I get the best insights from learning how everyone else learns. And I... </p>
  </div>
</div> 



      
      {/* <div style={{marginTop: 50 + 'em'}}> */}
      {/* analytics */}
      {/* </div> */}






{/* TEST CON FILTROS */}

{/* <Filtros/> */}
   
    {/* <span></span> */}




    {/* <Futuro/> */}

    </section>

    
        
     </div>







    </BrowserRouter>
  );
 
}

export default App;
