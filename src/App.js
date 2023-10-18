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
// import Diseño from './Diseño_Section/Diseño';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import circulo from './img/circulo.png';
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
  


   {/* <Routes>
    <Route path='/diseño' element={<Diseño />}>
      
    </Route>
   </Routes> */}

 
  return (
    // <BrowserRouter>
    
  

    <div className="App">


      

      {/* <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} /> */}
      <p className='nombre'> NICOLÁS S. QUIROZ</p>
      
      <div>
        
      </div>

      {/* <div className='intro' style={{display: 'flex'}}> */}
      <div className='intro'>
        {/* <div className='iz'> */}
         <p>
           I'm a Data Scientist living in Viña del Mar, Chile.
        </p><p>
          
           Moving in the line between art and science.</p>
           <p><a href="/#/diseno">I'm into web design</a> and development, I fell in love with landing pages and that blank page.</p>
            <p> I also <a href="/#/startup">document on learning</a> how all crafts merge into a business.</p>
           
           <p><b>I'm currently <a href="/#/#deepmusic">applying Machine Learning</a> in music production.</b>
           
        </p>
        

        <p>I'm also diving into Web Design, the fundamentel interface in the intersection of art and software.</p>

        

        <p>
         nicosquiroz@gmail.com - <a href='https://www.threads.net/nicosquiroz'>Threads</a> - <a href='https://www.linkedin.com/in/nicosquiroz'>Linkedin</a>
        </p>
        {/* </div> */}

        {/* <div className='der '><p>This website attempts to explore the answers, inevitably coming across different disciplines I want to dive in. I'm right now diving into neural networks and machine learning, music and im interested in the brain.</p></div>
        <div className='der '><p>Here i can write someteing very bacan and that extends for mor than one line so the whole thing seems like a little paragraph. Here i can write someteing one line so the whole thing seems like a little paragraph.</p></div> */}
        {/* <div className='der '><p>thing 1<br></br>thing 2<br></br>thing 3</p></div> */}
        <p id="deepmusic"></p>
        {/* <aside className={'sidebar2'}>HOLA</aside> */}
      </div>





    <div className='circulo'>
    {/* <img className="circulo" src={circulo}/> */}

    </div>
    
    <div className='Blog'>
    
  
    <p className='fuente2' >A JOURNEY TOWARDS DEEP MUSIC.</p>

    <p>I can’t be the only one who has experienced a mysterious feeling with DeepDreaming imagery. Known patterns and strangely unfamiliar, yet very hypnotic to our eyes.
    And as with anything that’s visually beautiful and kind of illusory, I wonder: How does it sound?</p>
<p>Can generated sounds induce the same warm unfamiliarity in our minds, opposed to what music or visual art usually provokes?</p>

<p>This website attempts to explore the answers, inevitably coming across different disciplines I want to dive in. I'm right now diving into neural networks and machine learning, music and im interested in the brain.</p>

<br></br>
<br></br>
<div>
{/* <div style={{display: 'flex'}}> */}
<p>I’m documenting the process guided by a creative project I’ve been working on for the past few months with my brilliant friend <a href='http://instagram.com/jajamacka'>Macka Garrido</a>. 
She’s currently making a video for a short piece of music I created, and I’m composing the music for a video she made. But neither of us know what the other is exacly doing until it’s finished, nor what we wanted to say.

{/* <Sound/> */}
</p>
<p>
In my view, it beautifully portraits these intermediate states between chaos and certainty, and I can only close this exploration in the same lenaguege it uses.
</p>
{/* </div> */}

 {/* <p>
</p> */}
{/* <aside className={'sidebar2'}><Sound/></aside> */}
<p>
{/* (IN MY INTERPRETATION (view))

inspired me… */}


</p>
<p>

So I don’t know yet where I will get to, but that’s the fun part.


... quizá puede terminar en attempts to answer these questions. how could ai be merged with music? terminar con let machine dreamds?

</p>

<p>generative ai, hallucinations... expand the mind</p>
</div>
<br></br>
<p>
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

   {/* <p className='videomacka'>VIDEO: MACKA GARRIDO</p> */}
   <p className="intxt">
    Audiovisual proyect started as a first approach to music and video. It consist in two stages. We’re now in the second stage. <b>And this is the point of view of Nico. Video by Macka Garrido</b>
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
    Well, this is an extract frome the video I'm musicalizing. It was created by 
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
  <div className='Span'></div>
  <div className='Span'></div>
  <div className='Span'></div>
  <p>Here you will find writings on different topics regarding to the proyect, and more in deph thoughts diverging (and converging) from it. On the one hand, I want to showcase how the different areas combine together into only one outcome. For that purpose I'm going to be the most explainable possible. But on the other, I like to pursuit some tecnical nowledge both in science, related to the brain, perception, conciousness and it's relation to artificial intelligence in a reaserch and production level, and I'd like to register the creative process related to musical production and the details of the construccion of a piece. I'm not sure how I'll be dividing the themes. As a first approach, I'll be writing all down on the same page. And if something gets too technical, I'll make an aside from that, possibly turning into another line of thoughts.</p>
  <p>This journey... Why ML?</p>
  <p>Sección leyendo Being You</p>
  <p>I'm also very happy since this website was being planned for years. I didn't know what was going to be the context. I didn't know it would have turned out the way it is. And I feel very confortable with just writing out my thoughts in here. I see the progression. </p>
  
  </div>

  
  
</div> 

<div className='Spanseparador'></div>
      
      {/* <div style={{marginTop: 50 + 'em'}}> */}
      {/* analytics */}
      {/* </div> */}






{/* TEST CON FILTROS */}

{/* <Filtros/> */}
   
    {/* <span></span> */}




    {/* <Futuro/> */}

    </section>

    
        
     </div>







    // </BrowserRouter>
  );
 
}

export default App;
